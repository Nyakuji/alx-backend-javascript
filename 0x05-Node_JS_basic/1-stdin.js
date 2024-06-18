const readline = require('readline');

// Create readline interface for capturing user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display welcome message
console.log('Welcome to Holberton School, what is your name?\n');

// Capture user input
rl.question('', (name) => {
  // Display user's name
  console.log(`Your name is: ${name}`);

  // Close the readline interface
  rl.close();
});

// Handle program exit
rl.on('close', () => {
  console.log('This important software is now closing\n');
  process.exit(0);
});
