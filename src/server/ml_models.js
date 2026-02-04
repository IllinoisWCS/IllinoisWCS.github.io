// Uncomment console.log statements for functionality

// Import huggingface model and readline
import { pipeline } from '@huggingface/transformers';
import readline from 'readline';

//creating HNSW index
import hnswlib from 'hnswlib-node';
const index = new hnswlib.HierarchicalNSW('cosine', 768); //768 is the embeddingsize of this model
let databaseSize = 0; //number of questions in the notion database - need to find a way to pull this.
index.initIndex(100); //maximum number of elements index can hold right now - need to resize later.

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
//1) Load repeat detection model
let repeatModel = null;
async function loadRepeatModel() {
  if (!repeatModel) {
    repeatModel = await pipeline(
      'feature-extraction',
      'sentence-transformers/all-distilroberta-v1',
    );
  }
  return repeatModel;
}

//2) Create an embedding using the model
async function createEmbedding(input) {
  const model = await loadRepeatModel();
  const embedding = await model(input);
  return embedding.data[0];
}

//3) Checking for duplicates
async function checkDuplicate(input, threshold = 0.9) {
  if (databaseSize == 0) {
    return { isDuplicate: false, similarity: 0, nearestId: null };
  }
  const embedding = await createEmbedding(input);
  const result = index.search(embedding, 1);
  const nearest = result.neighbors[0];
  const distance = result.distances[0];
  return {
    isDuplicate: 1 - distance >= threshold,
    similarity: 1 - distance,
    nearestId: nearest,
  };
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
