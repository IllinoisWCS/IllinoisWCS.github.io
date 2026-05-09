// Import huggingface model
import { pipeline } from '@huggingface/transformers';
import hnswlib from 'hnswlib-node';
import fs from 'fs';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('.env') }); // not sure if this is for my system only... inconsistent location every time.

// ====== REPEAT DETECTION COMPONENTS ======
// set up API calling -  can't load repeat detection model, can only call via api
const { HF_API_KEY } = process.env;

const MAPPING_PATH = 'src/server/data/questions_mapping.json';

function loadMapping() {
  return fs.existsSync(MAPPING_PATH)
    ? JSON.parse(fs.readFileSync(MAPPING_PATH))
    : [];
}

function saveMapping(mapping) {
  fs.writeFileSync(MAPPING_PATH, JSON.stringify(mapping));
}
// Creating an embedding using the HuggingFace model by sending via API
async function createEmbedding(text) {
  // all-distilroberta-v1 formerly... but that Inference Endpoint is not supported.
  const response = await fetch(
    'https://router.huggingface.co/hf-inference/models/sentence-transformers/all-MiniLM-L6-v2/pipeline/feature-extraction',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${HF_API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ inputs: text }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HF API failed: ${response.status}, ${errorText}`);
  }
  const embedding = await response.json();

  // normalize the embedding to unit length for cosine similarity
  const norm = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
  const normalized = embedding.map((v) => v / norm);
  return normalized;
}

// // Checking for duplicates
// async function checkDuplicate(index, input, threshold = 0.5) {
//   if (index.getCurrentCount() < 2) {
//     return;
//   }
//   const embedding = await createEmbedding(input);
//   const result = index.searchKnn(embedding, 5); // search for the nearest neighbor
//   // top few can be used for search function... for later.
//   const nearest = result.neighbors[1];
//   const distance = result.distances[1];
//   return {
//     isDuplicate: 1 - distance >= threshold,
//     similarity: 1 - distance,
//     nearestId: nearest,
//   };
// }

async function getSimilarQuestions(question) {
  const questionIndex = new hnswlib.HierarchicalNSW('cosine', 384);
  if (fs.existsSync('src/server/data/questions.index')) {
    questionIndex.readIndexSync('src/server/data/questions.index');
  } else {
    return [];
  }
  const mapping = loadMapping();
  const embedding = await createEmbedding(question);
  const result = questionIndex.searchKnn(
    embedding,
    Math.min(questionIndex.getCurrentCount(), 5),
  );
  return result.neighbors.map((internalIndex) => mapping[internalIndex]);
}

// async function questionIsRepeated(question) {
//   // eslint-disable-next-line no-undef
//   const questionIndex = new hnswlib.HierarchicalNSW('cosine', 384); // 384 is embedding size
//   if (fs.existsSync('data/questions.index')) {
//     // eslint-disable-next-line no-undef
//     questionIndex.readIndexSync('data/questions.index');
//   } else {
//     return false;
//   }
//   const result = checkDuplicate(questionIndex, question);
//   if (result.isDuplicate) {
//     return true;
//   }
//   return false;
// }

async function addQuestionToIndex(question, questionId) {
  const questionIndex = new hnswlib.HierarchicalNSW('cosine', 384);
  const mapping = loadMapping();

  if (fs.existsSync('src/server/data/questions.index')) {
    questionIndex.readIndexSync('src/server/data/questions.index');
  } else {
    questionIndex.initIndex(50000); // maximum number of elements index can hold.
  }

  const internalIndex = questionIndex.getCurrentCount();
  const embedding = await createEmbedding(question);
  questionIndex.addPoint(embedding, internalIndex);
  mapping[internalIndex] = questionId;
  questionIndex.writeIndexSync('src/server/data/questions.index');
  saveMapping(mapping);
}
// ------END OF REPEAT DETECTION COMPONENTS

// Load toxicity model only once for efficiency
async function loadToxicityClassifier() {
  let toxicityModel = null;
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

export async function classifyToxicityInput(input) {
  const classifier = await loadToxicityClassifier();
  const output = await classifier(input);
  return output;
}

export { getSimilarQuestions, addQuestionToIndex };
