// // this file is using "import" but server.js is using "require"...
// import dotenv from 'dotenv'; //for api keys
// import path from "path";
// dotenv.config({path: path.resolve("../../.env")}); //not sure if this is for my system only...
// //needs to be able to use require, removed type=module in package.json... have to change this. 
// // Uncomment console.log statements for functionality

// // Import huggingface model and readline
// import readline from 'readline';

// //IMPORTING HUGGING FACE MODEL
// import fetch from 'node-fetch';

// //creation/loading of HNSW index
// import hnswlib from 'hnswlib-node';
// import fs from "fs";

const dotenv = require('dotenv'); //for api keys
const path = require("path");
dotenv.config({path: path.resolve("../../.env")}); //not sure if this is for my system only...
const readline = require('readline');
// const fetch = require('node-fetch');
const hnswlib = require('hnswlib-node');
const fs = require("fs");

// Load toxicity model only once for efficiency
let toxicityModel = null;
async function loadToxicityClassifier() {
  if (!toxicityModel) {
    // console.log('Loading toxicity classifier...');
    toxicityModel = await pipeline(
      'text-classification',
      'onnx-community/roberta_toxicity_classifier-ONNX',
    );
    // console.log('Toxicity model loaded.');
  }
  return toxicityModel;
}

// ====== REPEAT DETECTION COMPONENTS ======
//1) set up API calling -  can't load repeat detection model, can only call via api
const HF_API_KEY = process.env.HF_API_KEY;

//2) Create an embedding using the HuggingFace model by sending via API
async function createEmbedding(text) {
   //all-distilroberta-v1 formerly... but that Inference Endpoint is not supported.
  const response = await fetch("https://router.huggingface.co/hf-inference/models/sentence-transformers/all-MiniLM-L6-v2/pipeline/feature-extraction",
 {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_API_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({inputs: text})
  });


  if (!response.ok) {
    const errorText = await response.text();
    console.error("HF API error: ", response.status, errorText);
    throw new Error(`HF API failed: ${response.status}, ${errorText}`);
  }
  const embedding = await response.json();

  // normalize the embedding to unit length for cosine similarity
  const norm = Math.sqrt(
    embedding.reduce((sum, val) => sum + val * val, 0)
  );
  const normalized = embedding.map(v => v / norm);
  return normalized;
}

//3) Checking for duplicates
async function checkDuplicate(index, input, threshold = 0.5) {
  const embedding = await createEmbedding(input);
  const result = index.searchKnn(embedding, 5); //search for the nearest neighbor
  //top few can be used for search function... for later.
  const nearest = result.neighbors[0];
  const distance = result.distances[0];
  return {
    isDuplicate: 1 - distance >= threshold,
    similarity: 1 - distance,
    nearestId: nearest,
  };
}

//if question is deleted - need to remove from index too?? have to ask about this
async function questionIsRepeated(question, questionId) {
  question_index = new hnswlib.HierarchicalNSW('cosine', 384); //384 is the dimension/embedding size
  if (fs.existsSync("data/questions.index")) {
    question_index.readIndexSync(QUESTION_INDEX_FILE_PATH);
  } else {
    question_index.initIndex(100); //maximum number of elements index can hold right now - need to add resizing mechanism.
  }
  const embedding = await createEmbedding(question);
  result = checkDuplicate(question_index, question);
  if (result.isDuplicate) {
    return false;
  } else {
    question_index.addPoint(embedding, questionId);
    question_index.writeIndexSync("data/questions.index");
    return true;
  } //return top 5 questions instead
}

//bad/there is duplicate -> send false; good/no duplicate -> send true, and add to index
async function answerIsRepeatedNoIndex(answer, questionId, answerId, listOfAnswers) {
  let answerIndex = new hnswlib.HierarchicalNSW('cosine', 384);
  answerIndex.initIndex(100);
  for (let i = 0; i < listOfAnswers.length; i++) {
    const ansEmbedding = await createEmbedding(listOfAnswers[i].text);
    answerIndex.addPoint(ansEmbedding, listOfAnswers[i].id);
  }
  const result = checkDuplicate(answerIndex, answer);
  if (result.isDuplicate) {
    return false;
  } 
  if (listOfAnswers.length >= 50) {
    answerIndex.addPoint(await createEmbedding(answer), answerId);
    answerIndex.writeIndexSync(`data/answers_${questionId}.index`);
  }
  return true;
}

//bad/there is duplicate -> send false; good/no duplicate -> send true, and add to index
async function answerIsRepeatedYesIndex(answer, questionId, answerId) {
  let answerIndex = new hnswlib.HierarchicalNSW('cosine', 384);
  answerIndex.readIndexSync(`data/answers_${questionId}.index`);
  const result = checkDuplicate(answerIndex, answer);
  if (result.isDuplicate) {
    return false;
  } 

  answerIndex.addPoint(await createEmbedding(answer), answerId);
  answerIndex.writeIndexSync(`data/answers_${questionId}.index`);
  return true;
}

//------END OF REPEAT DETECTION COMPONENTS
async function classifyToxicityInput(input) {
  const classifier = await loadToxicityClassifier();
  const output = await classifier(input);
  return output;
}

// Use readline for getting input from terminal
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter text to analyze toxicity level',
});

read.prompt();

read.on('line', async (line) => {
  const textInput = line.trim();

  // To end session type 'exit' and hit enter
  if (textInput.toLowerCase() === 'exit') {
    read.close();
    return;
  }

  try {
    const result = await classifyToxicityInput(textInput);
    // Result will be either 'neutral' or 'toxic' with a score
    // higher score = more toxic/more neutral
    // console.log('Toxicity result:', result);

    if (result.label === 'toxic') {
      // console.log('True');
    } else {
      // console.log('False');
    }
    if (result == null) {
      // done to avoid errors
    }

    const duplicate_result = await checkDuplicate(textInput);
    if (duplicate_result.isDuplicate) {
      console.log(
        'A similar question has been previously asked. See here: ${duplicate_result.nearestId}',
      );
      //retrieve the actual question from the database, plus the link
    } else {
      console.log(
        "It doesn't share any similarities with other questions. Proceed to post.",
      );
      //will need to add to the index if we decide to go forward with the question: index.addPoint.
    }
  } catch (err) {
    // console.error('Error classifying text:', err);
  }

  read.prompt();
});

// Function to end session
read.on('close', () => {
  // console.log('Session ended.');
  process.exit(0);
});

/*

 //THIS CODE WAS TO TEST ADDING THE QUESTION FROM ML_MODELS.JS - AI-generated, Ria.
async function testAddQuestion() {
  const testText = "How do I approach a professor about research opportunities?";

  // Check duplicate
  const duplicateResult = await checkDuplicate(testText);
  console.log("Nearest ID:", duplicateResult.nearestId, "Similarity:", duplicateResult.similarity);
  if (duplicateResult.isDuplicate) {
    console.log("Duplicate detected!");
    return;
  }

  // Generate a fake ID
  const fakeId = Date.now(); // could be any string for now

  // Add to index
  await addQuestionToIndex(fakeId, testText);

  console.log("Question added to HNSW index with ID:", fakeId);
}



import { fileURLToPath } from "url";

// Get the current file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if this script is being run directly
if (process.argv[1] === __filename) {
  testAddQuestion().then(() => {
    console.log("Test complete");
  });
}
*/