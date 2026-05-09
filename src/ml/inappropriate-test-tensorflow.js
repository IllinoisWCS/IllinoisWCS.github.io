// THIS MODEL IS LESS ACCURATE (66%)
import * as toxicity from '@tensorflow-models/toxicity';
import '@tensorflow/tfjs';

// Threshold determines how confident the model must be before
// classifying something as toxic (higher = more accurate)
// Only 66% accurate with a threshold of 0.7
const threshold = 0.7;

async function run() {
  // Load the model
  const model = await toxicity.load(threshold);

  // Sample input
  const sentences = [
    // Toxic / Offensive
    'You are the worst person I have ever met.',
    'That idea is absolutely stupid.',
    'I hate you so much.',
    'Go away, nobody wants you here.',
    'You are worthless.',
    'This is trash.',
    'Stop talking, you sound ridiculous.',
    'I hope you fail.',
    'That was the dumbest thing ever.',
    'You are a complete idiot.',

    // Severe Toxic / Threatening
    'I am going to make your life miserable.',
    'You better watch your back.',
    'I will find you.',
    'You are going to regret this.',
    'Nobody likes you, disappear.',

    // Insults / Identity Attacks
    'Only an idiot would think that.',
    'You people are hopeless.',
    'What is wrong with your brain?',
    'Can you do anything right?',
    'You are such a loser.',

    // Sexual / Explicit
    'That is so disgusting.',
    'Stop sending me those pictures.',
    'That comment was extremely inappropriate.',
    'I cannot believe you said that about sex.',
    'This is offensive and sexual in nature.',

    // Mild / Sarcastic / Funny
    'Well, that was a weird choice.',
    'I guess that could work… maybe.',
    'Haha, that is kind of funny.',
    'Oh no, you did not!',
    'That is actually hilarious.',
    'Wow, really impressive.',
    'I love this so much!',
    'This made my day.',
    'You are funny sometimes.',
    'That is clever.',

    // Neutral / Non-toxic
    'The weather is nice today.',
    'I am going to the store.',
    'I like reading books.',
    'My cat is sleeping on the couch.',
    'I enjoy cooking on weekends.',
    'That movie was interesting.',
    'I am learning JavaScript.',
    'I went for a walk yesterday.',
    'My favorite color is blue.',
    'I like listening to music.',

    // Mixed / Edge Cases
    'You are not terrible, but this is bad.',
    'I do not hate you, but that was dumb.',
    'Some people might not like this.',
    'That was offensive, but not really severe.',
    'You can be annoying sometimes.',
  ];

  // Ground truth labels: true = toxic, false = non-toxic
  const labels = [
    // Toxic / Offensive
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    // Severe Toxic / Threatening
    true,
    true,
    true,
    true,
    true,
    // Insults / Identity Attacks
    true,
    true,
    true,
    true,
    true,
    // Sexual / Explicit
    true,
    true,
    true,
    true,
    true,
    // Mild / Sarcastic / Funny
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    // Neutral / Non-toxic
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    // Mixed / Edge Cases
    true,
    true,
    false,
    true,
    false,
  ];

  // Model predictions
  const predictions = await model.classify(sentences);

  // Find the "toxicity" category results
  const tox = predictions.find((p) => p.label === 'toxicity');

  // Count correct predictions
  let correct = 0;
  for (let i = 0; i < sentences.length; i += 1) {
    if (tox.results[i].match === labels[i]) correct += 1;
  }

  // Return the accuracy as a decimal
  return correct / sentences.length;
}

// Example usage: store accuracy in a variable
(async () => {
  const accuracy = await run();
  if (accuracy > 0.7) {
    // done to get rid of error
  }
  // console.log(accuracy)
})();

// I think this should work, but takes way too long to run (uses toxic-language-test-set)
/*
import fs from 'fs';
import * as toxicity from '@tensorflow-models/toxicity';
import '@tensorflow/tfjs';

async function loadBucket(filePath) {
  const raw = await fs.promises.readFile(filePath, 'utf-8');
  const lines = raw.split('\n').filter(line => line.trim() !== ''); // remove empty lines
  const data = lines.map(line => {
    const obj = JSON.parse(line);
    return {
      text: obj.text,
      label: obj.rating === 'accepted' ? false : true  // example: mark "rejected" as toxic
    };
  });
  return data;
}

async function loadAllBuckets() {
  const buckets = ['bucket1'] //'bucket2', 'bucket3', 'bucket4', 'bucket5'];
  let allData = [];

  for (const bucket of buckets) {
    const bucketData = await loadBucket(`./toxic-language-test-set/${bucket}.json`);
    allData = allData.concat(bucketData);
  }

  return allData;
}

async function run() {
  const threshold = 0.9;
  const model = await toxicity.load(threshold);

  const allData = await loadAllBuckets();
  const sentences = allData.map(d => d.text);
  const labels = allData.map(d => d.label);

  const predictions = await model.classify(sentences);
  const tox = predictions.find(p => p.label === 'toxicity');

  let correct = 0;
  for (let i = 0; i < sentences.length; i++) {
    if (tox.results[i].match === labels[i]) correct++;
  }

  console.log(`Tested ${sentences.length} sentences`);
  console.log(`Accuracy: ${(correct / sentences.length * 100).toFixed(2)}%`);
}

run();
*/
