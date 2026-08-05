const readlineSync = require('readline-sync');
 
let tasks = [];
 
/**
 * Displays the main menu.
 */
function printMenu() {
  console.log('\n============================');
  console.log('     TO-DO LIST MENU');
  console.log('============================');
  console.log('1. Add task');
  console.log('2. View tasks');
  console.log('3. Delete task');
  console.log('4. Quit');
}
 
/**
 * FEATURE 1 — Prompts the user for a task description and adds it to `tasks`.
 */
function addTask() {
  const description = readlineSync.question('Enter task: ');
  tasks.push(description);
  console.log(`Task added: "${description}"`);
}
 
/**
 * FEATURE 2 — Displays all tasks, numbered from 1.
 * Prints a friendly message if there are no tasks.
 */
function viewTasks() {
  if (tasks.length === 0) {
    console.log('You have no tasks yet. Add one to get started!');
    return;
  }
 
  console.log('Your Tasks:');
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}
 
/**
 * FEATURE 3 — Shows the task list, asks for a task number, and removes it.
 * Prints an error message if the number is invalid.
 */
function deleteTask() {
  if (tasks.length === 0) {
    console.log('There are no tasks to delete.');
    return;
  }
 
  viewTasks();
  const choice = readlineSync.questionInt('Enter task number to delete: ');
  const index = choice - 1;
 
  if (index < 0 || index >= tasks.length) {
    console.log('Error: Invalid task number.');
    return;
  }
 
  const removed = tasks[index];
  tasks.splice(index, 1);
  console.log(`Task "${removed}" has been removed.`);
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
        addTask();
        break;
      case 2:
        viewTasks();
        break;
      case 3:
        deleteTask();
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
 