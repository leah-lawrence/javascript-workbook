'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rockPaperScissors(hand1, hand2) {

    let hand1Convert = hand1.toLowerCase().trim();
    let hand2Convert = hand2.toLowerCase().trim();

    var hand1Wins = "Hand one wins!";
    var hand2Wins = "Hand two wins!";
    var noWinner = "It's a tie!";

    if (hand1Convert === hand2Convert) {
        return noWinner;
    } else if (hand1Convert === 'rock' && hand2Convert === 'paper') {
        return hand2Wins;
    } else if (hand1Convert === 'rock' && hand2Convert === 'scissors') {
        return hand1Wins;
    } else if (hand1Convert === 'paper' && hand2Convert === 'rock') {
        return hand1Wins;
    } else if (hand1Convert === 'paper' && hand2Convert === 'scissors') {
        return hand2Wins;
    } else if (hand1Convert === 'scissors' && hand2Convert === 'rock') {
        return hand2Wins;
    } else if (hand1Convert === 'scissors' && hand2Convert === 'paper') {
        return hand1Wins;
    }
}

function getPrompt() {
    rl.question('hand1: ', (answer1) => {
        rl.question('hand2: ', (answer2) => {
            console.log(rockPaperScissors(answer1, answer2));
            getPrompt();
        });
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
        it('should detect a tie', () => {
            assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
            assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
            assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
        });
        it('all scenarios for hand 1 winning', () => {
            assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
            assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
            assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
        });
        it('all scenarios for hand 2 winning', () => {
            assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
            assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
            assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
        });
        it('should scrub input to ensure toLowerCase', () => {
            assert.equal(rockPaperScissors('ROCK', 'PAPER'), "Hand two wins!");
            assert.equal(rockPaperScissors('ROCK', 'SCISSORS'), "Hand one wins!");
            assert.equal(rockPaperScissors('PAPER', 'SCISSORS'), "Hand two wins!");
            assert.equal(rockPaperScissors('PAPER', 'SCISSORS'), "Hand two wins!");
            assert.equal(rockPaperScissors('SCISSORS', 'ROCK'), "Hand two wins!");
            assert.equal(rockPaperScissors('SCISSORS', 'PAPER'), "Hand one wins!");
        });
        it('should scrub input to ensure trim', () => {
            assert.equal(rockPaperScissors(' rock ', ' scissors '), "Hand one wins!");
            assert.equal(rockPaperScissors(' paper ', ' rock '), "Hand one wins!");
            assert.equal(rockPaperScissors(' scissors ', ' paper '), "Hand one wins!");
            assert.equal(rockPaperScissors(' rock ', ' paper '), "Hand two wins!");
            assert.equal(rockPaperScissors(' paper ', ' scissors '), "Hand two wins!");
            assert.equal(rockPaperScissors(' scissors ', ' rock '), "Hand two wins!");
        });


    });
} else {

    getPrompt();

}


/*
Class Notes

To run a test in the terminal: npm test 02week/tests.js

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let add = function(a, b) {
    let sum = a + b;
    return sum;
}

if (typeof describe === 'function') {

    describe('add()', () => {
        it('testing add', () => {
            assert.equal(add(0, 1), 1);
            //assert.equal(add('banana', 'hamock'), 'Invalid Input');
            assert.equal(add(Infinity, Infinity), Infinity);
        });
        it('testing add with infinity', () => {
            assert.equal(add(Infinity, Infinity), Infinity);
        });
        it('testing add with negative', () => {
            assert.equal(add(-5, -3), -8);
        });
        it('testing add with notEqual', () => {
            assert.notEqual(add(5, '5'), 10);
        });
        it('testing add with notEqual', () => {
            assert.notEqual(add(5, '5'), '10');
        });
        it('testing add with okay 1,0', () => {
            assert.ok(add(1, 0));
        });
        it('testing add with assert', () => {
            assert(!add(0, 0));
        });
    });
}*/