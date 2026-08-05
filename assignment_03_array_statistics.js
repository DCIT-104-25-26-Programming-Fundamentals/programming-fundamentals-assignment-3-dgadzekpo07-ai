

const readlineSync = require('readline-sync');

/**
 * Calculates the sum of all numbers in the array.
 * @param {number[]} nums
 * @returns {number}
 */
function calculateSum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

/**
 * Calculates the average of all numbers in the array.
 * @param {number[]} nums
 * @returns {number}
 */
function calculateAverage(nums) {
  return calculateSum(nums) / nums.length;
}

/**
 * Finds the maximum value in the array.
 * @param {number[]} nums
 * @returns {number}
 */
function calculateMax(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

/**
 * Finds the minimum value in the array.
 * @param {number[]} nums
 * @returns {number}
 */
function calculateMin(nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return min;
}

function main() {
  const n = readlineSync.questionInt('How many numbers? ');

  if (n <= 0) {
    console.log('Error: The number of values must be a positive integer.');
    return;
  }

  const numbers = [];
  for (let i = 0; i < n; i++) {
    const value = readlineSync.questionInt(`Enter number ${i + 1}: `);
    numbers.push(value);
  }

  const sum = calculateSum(numbers);
  const average = calculateAverage(numbers);
  const max = calculateMax(numbers);
  const min = calculateMin(numbers);

  console.log('\nResults:');
  console.log(`Sum:     ${sum}`);
  console.log(`Average: ${average}`);
  console.log(`Maximum: ${max}`);
  console.log(`Minimum: ${min}`);
}

main();