'use strict';

const assert = require('assert');
const readline = require('readline');
const colors = require('colors');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

let part1 = '2'.red;
let part2 = '2'.white;
let result = ('2'.red)+"-"+('2'.white);

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// generateHint() should take two arguments, solution and guess
// In generateHint(), create variables solutionArray and guessArray that each split up passed in arguments, .splitting on ''(empty string).
function generateHint(solution, guess) {
  let solutionArray = solution.split(" ");
  let guessArray = guess.split(" ");
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution

  // In mastermind(), if the guess you passed in equals the solution, return 'You guessed it!';
  if (guess === solution) {
    return "You guessed it!";
  }

}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      let expected = ('2'.red)+"-"+('2'.white);
      assert.equal(generateHint('abdc'), expected);
    });
    it('should generate hints if solution has duplicates', () => {
      let expected = ('1'.red)+"-"+('1'.white);
      assert.equal(generateHint('aabb'), expected);
    });

  });

} else {

  generateSolution();
  getPrompt();
}
