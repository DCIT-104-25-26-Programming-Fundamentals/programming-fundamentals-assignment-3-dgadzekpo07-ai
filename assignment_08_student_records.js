const readlineSync = require('readline-sync');
 
let students = [];
 
/**
 * Displays the main menu.
 */
function printMenu() {
  console.log('\n================================');
  console.log('   STUDENT RECORD SYSTEM MENU');
  console.log('================================');
  console.log('1. Add student');
  console.log('2. Display all students');
  console.log('3. Calculate average score');
  console.log('4. Quit');
}
 
/**
 * Computes the average of an array of scores.
 * @param {number[]} scores
 * @returns {number} the average score
 */
function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}
 
/**
 * FEATURE 1 — Prompts for a student's name, ID, and scores, then saves the record.
 */
function addStudent() {
  const name = readlineSync.question('Student name: ');
  const id = readlineSync.questionInt('Student ID: ');
  const scoreCount = readlineSync.questionInt('How many scores? ');
 
  const scores = [];
  for (let i = 0; i < scoreCount; i++) {
    const score = readlineSync.questionInt(`Enter score ${i + 1}: `);
    scores.push(score);
  }
 
  students.push({ name, id, scores });
  console.log(`Student "${name}" added successfully.`);
}
 
/**
 * FEATURE 2 — Displays a formatted table of every student's name, ID,
 * individual scores, and average score.
 */
function displayAllStudents() {
  if (students.length === 0) {
    console.log('No students have been added yet.');
    return;
  }
 
  console.log('\nName                 ID          Scores               Average');
  console.log('---------------------------------------------------------------');
 
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const average = calculateAverage(student.scores);
 
    console.log(
      `${student.name.padEnd(20)} ${String(student.id).padEnd(11)} ` +
      `${student.scores.join(', ').padEnd(20)} ${average.toFixed(2)}`
    );
  }
}
 
/**
 * FEATURE 3 — Asks for a student ID, finds the matching student, and prints
 * their average score. Prints an error message if the ID is not found.
 */
function calculateAverageForStudent() {
  const id = readlineSync.questionInt('Enter student ID: ');
 
  let found = null;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      found = students[i];
      break;
    }
  }
 
  if (found === null) {
    console.log('Error: No student found with that ID.');
    return;
  }
 
  const average = calculateAverage(found.scores);
  console.log(`${found.name}'s average score: ${average.toFixed(2)}`);
}
 
/**
 * Runs the main menu loop until the user chooses to quit.
 */
function main() {
  let running = true;
 
  while (running) {
    printMenu();
    const choice = readlineSync.questionInt('Enter your choice (1-4): ');
 
    switch (choice) {
      case 1:
        addStudent();
        break;
      case 2:
        displayAllStudents();
        break;
      case 3:
        calculateAverageForStudent();
        break;
      case 4:
        console.log('Goodbye!');
        running = false;
        break;
      default:
        console.log('Error: Please enter a number between 1 and 4.');
    }
  }
}
 
main();
 