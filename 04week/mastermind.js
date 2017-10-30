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

// Generate a hint
function generateHint(guess) {

    // split strings into arrays
    let solutionStr = solution;
    let guessStr = guess;
    let solutionArray = solutionStr.split('');
    let guessArray = guessStr.split('');
    // console.log(solutionArray);
    // console.log(guessArray);

    // determines number of correct letter locations
    let correctLetterLocations = 0;
    for (let i = 0; i < solutionArray.length; i++) {
        if (solutionArray[i] === guessArray[i]) {
            correctLetterLocations += 1;
            solutionArray[i] = null;
        }
    }

    // determines the number of correct letters
    let correctLetters = 0;
    for (let i = 0; i < solutionArray.length; i++) {

        let targetIndex = solutionArray.indexOf(guessArray[i]);

        //console.log(targetIndex);

        if (targetIndex > -1) {
            correctLetters += 1;
            solutionArray[i] = null;
        }
    }

    // return hint string
    let part1 = colors.red(correctLetterLocations); // returns a string
    let part2 = colors.white(correctLetters); // returns a string
    let result = part1 + "-" + part2;
    // console.log(result);
    return result; // returns a string

}

function mastermind(guess) {
    solution = 'abcd'; // Comment this out to generate a random solution

    // detect a correct solution
    if (guess === solution) {
        console.log("You guessed it!");
        process.exit();
    } 

    // add guess and hint to the board
    let hint = generateHint(solution, guess);
    if (board.length < 10) {
        board.push(hint + " " + guess);
    }

    // end the game after 10 incorrect guesses
    if (board.length >= 10) {
        console.log('You ran out of turns! the solution was ' + solution);
        process.exit();
    } else {
        console.log('Guess again.');
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
            let expected = ('2'.red) + "-" + ('2'.white);
            assert.equal(generateHint('abdc'), expected);
        });
        it('should generate hints if solution has duplicates', () => {
            let expected = ('1'.red) + "-" + ('1'.white);
            assert.equal(generateHint('aabb'), expected);
        });

    });

} else {

    generateSolution();
    getPrompt();
}