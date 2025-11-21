// Uncomment console.log statements for functionality

// Import huggingface model and readline
import { pipeline } from '@huggingface/transformers';
import readline from 'readline';

// Load model only once for efficiency
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

// function exported for use in server.js
export async function classifyToxicity(input) {
  const classifier = await loadToxicityClassifier();
  const output = await classifier(input);
  return output; // Format: [ {'toxic', score: 0.99} ]
}
