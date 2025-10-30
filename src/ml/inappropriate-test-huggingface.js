// THIS MODEL IS MORE ACCURATE (74%)

import { pipeline } from '@huggingface/transformers';

async function getToxicityAccuracy() {
  const classifier = await pipeline(
    'text-classification',
    'onnx-community/roberta_toxicity_classifier-ONNX',
  );

  const testSentences = [
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

  const groundTruth = [
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
    true,
    true,
    true,
    true,
    true,
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
    true,
    true,
    false,
    true,
    false,
  ];

  const predictions = await Promise.all(
    testSentences.map((sentence) => classifier(sentence)),
  );

  let correctCount = 0;

  predictions.forEach((prediction, index) => {
    const isToxic = prediction[0].label.toLowerCase().includes('toxic');
    if (isToxic === groundTruth[index]) correctCount += 1;
  });

  return correctCount / testSentences.length; // returns number between 0 and 1
}

(async () => {
  const accuracy = await getToxicityAccuracy();
  if (accuracy > 0.7) {
    // done to get rid of error
  }
  // console.log(accuracy)
})();
