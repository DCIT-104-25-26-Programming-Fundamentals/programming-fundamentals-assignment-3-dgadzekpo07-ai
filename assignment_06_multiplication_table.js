
const readlineSync = require('readline-sync');
 
/**
 * PART A — Prints the multiplication table for a single number, from 1 to 12.
 * @param {number} num - the number to build the table for
 */
function printTable(num) {
  console.log(`Multiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    const product = num * i;
    console.log(`${num}  x  ${String(i).padEnd(2)}  =  ${product}`);
  }
}
 
/**
 * PART B — Prints multiplication tables for every number from 1 to n,
 * separated by a divider line.
 * @param {number} n - the highest number to generate a table for
 */
function printTablesUpTo(n) {
  for (let num = 1; num <= n; num++) {
    printTable(num);
    if (num < n) {
      console.log('---------------------------');
    }
  }
}
 
function main() {
  // ---------------------------------------------------------------------
  // PART A — Single table
  // ---------------------------------------------------------------------
  const num = readlineSync.questionInt('Enter a number: ');
  console.log();
  printTable(num);
 
  // ---------------------------------------------------------------------
  // PART B — Tables from 1 to N
  // ---------------------------------------------------------------------
  const n = readlineSync.questionInt('\nEnter N (to print tables from 1 to N): ');
 
  if (n <= 0) {
    console.log('Error: N must be a positive integer.');
    return;
  }
 
  console.log();
  printTablesUpTo(n);
}
 
main();