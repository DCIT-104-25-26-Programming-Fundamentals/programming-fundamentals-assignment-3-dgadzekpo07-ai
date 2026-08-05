const readlineSync = require('readline-sync');
 
/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}
 
/**
 * Subtracts b from a.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
  return a - b;
}
 
/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}
 
/**
 * Divides a by b. Returns null if b is zero (caller must handle the error).
 * @param {number} a
 * @param {number} b
 * @returns {number|null}
 */
function divide(a, b) {
  if (b === 0) {
    return null;
  }
  return a / b;
}
 
/**
 * Computes the remainder of a divided by b. Returns null if b is zero.
 * @param {number} a
 * @param {number} b
 * @returns {number|null}
 */
function modulus(a, b) {
  if (b === 0) {
    return null;
  }
  return a % b;
}
 
/**
 * Raises a to the power of b.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function exponentiate(a, b) {
  return a ** b;
}
 
/**
 * Displays the main menu.
 */
function printMenu() {
  console.log('\n============================');
  console.log('     SIMPLE CALCULATOR');
  console.log('============================');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulus');
  console.log('6. Exponentiation');
  console.log('7. Quit');
}
 
/**
 * Prompts for two numbers, performs the requested operation, and prints
 * the result (or an error message for divide/modulus by zero).
 * @param {string} symbol - the operator symbol to display (e.g. '+', '/')
 * @param {(a: number, b: number) => number|null} operation - the function to run
 */
function performOperation(symbol, operation) {
  const a = readlineSync.questionFloat('Enter first number : ');
  const b = readlineSync.questionFloat('Enter second number: ');
 
  const result = operation(a, b);
 
  if (result === null) {
    console.log('Error: Cannot divide by zero.');
    return;
  }
 
  console.log(`Result: ${a} ${symbol} ${b} = ${result.toFixed(2)}`);
}
 
/**
 * Runs the main menu loop until the user chooses to quit.
 */
function main() {
  let running = true;
 
  while (running) {
    printMenu();
    const choice = readlineSync.questionInt('Select an operation (1-7): ');
 
    switch (choice) {
      case 1:
        performOperation('+', add);
        break;
      case 2:
        performOperation('-', subtract);
        break;
      case 3:
        performOperation('*', multiply);
        break;
      case 4:
        performOperation('/', divide);
        break;
      case 5:
        performOperation('%', modulus);
        break;
      case 6:
        performOperation('**', exponentiate);
        break;
      case 7:
        console.log('Goodbye!');
        running = false;
        break;
      default:
        console.log('Error: Please enter a number between 1 and 7.');
    }
  }
}
 
main();