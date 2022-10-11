'use strict';

// 1. printIndices
// Print each item in the array, followed by its index.
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
    // console.log(i);
    // console.log(items[i]);

    // console.log("**************");
    
    const message = `${i} ${items[i]}`;
    console.log(message);
  }
}


// 2. everyOtherItem
// Print a list of every other item in `items`
function everyOtherItem(items) {
  // Replace this with your code
  const result = []

  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }

  return result;
}

// 3. smallestNItems
// Print an array of the `n` smallest integers in `items`.
function smallestNItems(items, n) {
  // Replace this with your code
  const sortedItems = items.sort((a, b) => a - b);
  const sortedNItems = sortedItems.slice(0, n);
  sortedNItems.reverse();

  console.log(sortedNItems);
}