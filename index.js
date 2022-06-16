function hasTargetSum(array, target) {
  // Write your algorithm here
  let seenNumbers = new Set();
  //iterating through the array
  for (const number of array) {
    //for the current identify a complement that adds to the target  complement = target - number
    let complement = target - number;

    //checking if their is a complement is our array
    if (seenNumbers.has(complement)) 
    return true;

    seenNumbers.add(number);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([30, 9, 5, 1, 79], 31));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([22, 33, 77], 65));
}

module.exports = hasTargetSum;
