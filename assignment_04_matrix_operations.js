 
const readlineSync = require('readline-sync');
 
/**
 * Reads an R x C matrix from the user, one row at a time.
 * @param {number} rows - number of rows
 * @param {number} cols - number of columns
 * @param {string} label - label used in the input prompt (e.g. "Matrix A")
 * @returns {number[][]} the matrix
 */
function readMatrix(rows, cols, label) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    let rowValues;
 
    // Keep asking until the row has exactly `cols` numbers
    while (true) {
      const line = readlineSync.question(`Enter ${label} row ${i + 1}: `);
      rowValues = line.trim().split(/\s+/).map(Number);
 
      if (rowValues.length === cols && rowValues.every((v) => !isNaN(v))) {
        break;
      }
      console.log(`  Please enter exactly ${cols} numbers separated by spaces.`);
    }
 
    matrix.push(rowValues);
  }
  return matrix;
}
 
/**
 * Prints a matrix in a neat, aligned grid format.
 * @param {number[][]} matrix
 */
function printMatrix(matrix) {
  // Find the widest value so every column lines up
  let width = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const len = String(matrix[i][j]).length;
      if (len > width) {
        width = len;
      }
    }
  }
 
  for (let i = 0; i < matrix.length; i++) {
    let rowText = '';
    for (let j = 0; j < matrix[i].length; j++) {
      rowText += String(matrix[i][j]).padStart(width + 2);
    }
    console.log(rowText);
  }
}