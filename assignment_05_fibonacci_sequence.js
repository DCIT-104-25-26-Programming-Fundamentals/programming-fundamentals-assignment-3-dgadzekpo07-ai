const readlineSync = require('readline-sync');
 
/**
 * PART A — Generates the first n terms of the Fibonacci sequence using a loop.
 * @param {number} n - how many terms to generate
 * @returns {number[]} an array containing the first n Fibonacci numbers
 */
function generateFibonacci(n) {
  const sequence = [];
 
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      sequence.push(0);
    } else if (i === 1) {
      sequence.push(1);
    } else {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
  }
 
  return sequence;
}
 
/**
 * PART B — Determines whether a given number appears in the Fibonacci sequence.
 * Generates Fibonacci numbers with a loop until the value meets or exceeds num.
 * @param {number} num - the number to check
 * @returns {boolean} true if num is a Fibonacci number, false otherwise
 */
function isFibonacci(num) {
  // Negative numbers are never part of the sequence
  if (num < 0) {
    return false;
  }
 
  let prev = 0;
  let curr = 1;
 
  // 0 is the first Fibonacci number
  if (num === 0) {
    return true;
  }
 
  while (curr < num) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
 
  return curr === num;
}
 
function main() {
  // ---------------------------------------------------------------------
  // PART A — Print the first N terms
  // ---------------------------------------------------------------------
  const n = readlineSync.questionInt('How many terms? ');
 
  if (n <= 0) {
    console.log('Error: N must be a positive integer.');
    return;
  }
 
  const sequence = generateFibonacci(n);
  console.log(`Fibonacci sequence: ${sequence.join(' ')}`);
 
  // ---------------------------------------------------------------------
  // PART B — Check if a number belongs to the sequence
  // ---------------------------------------------------------------------
  const num = readlineSync.questionInt('\nEnter a number to check: ');
 
  if (isFibonacci(num)) {
    console.log(`${num} is a Fibonacci number.`);
  } else {
    console.log(`${num} is NOT a Fibonacci number.`);
  }
}
 
main();