'use strict';

// 1. countWords
// Return an object of each word and the no. of times they appear.
function countWords(phrase) {
  const wordCounts = {};

  for (const word of phrase.split(" ")){
    if (wordCounts.hasOwnProperty(word)) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}


// 2. getMelonsAtPrice
// Return an array of melons that cost `price`.
function getMelonsAtPrice(price) {
  const melonPrice = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (!melonPrice[price]){
    return;
  } else {
    return melonPrice[price].sort()
  }
}