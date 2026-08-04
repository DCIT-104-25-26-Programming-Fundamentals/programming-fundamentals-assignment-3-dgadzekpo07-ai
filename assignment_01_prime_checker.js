// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 1
// =============================================================================
//
// TASK: Prime Number Checker
// (header comments unchanged...)
// =============================================================================

const readlineSync = require('readline-sync');

/**
 * Checks whether a given number is prime.
 * @param {number} num - The number to check.
 * @returns {boolean} true if num is prime, false otherwise.
 */
function isPrime(num) {
  // Numbers less than 2 are not prime
  if (num < 2) {
    return false;
  }

  // 2 is the only even prime number
  if (num === 2) {
    return true;
  }

  // Eliminate other even numbers early
  if (num % 2 === 0) {
    return false;
  }

  // Only need to check odd divisors up to the square root of num
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function main() {
  const num = readlineSync.questionInt('Enter a number: ');

  if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is NOT a prime number.`);
  }
}

main();