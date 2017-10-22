'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};

// Renaming each stack to a peg
// Vars return as arrays
// Auto sorts arrays with the lowest number always at the end
let peg1 = stacks.a.reverse();
let peg2 = stacks.b.reverse();
let peg3 = stacks.c.reverse();

let pegNames = ['a', 'b', 'c'];

function printStacks() {
    console.log("a: " + peg1);
    console.log("b: " + peg2);
    console.log("c: " + peg3);
}

function movePiece() {
    // If the 

}

function isLegal(start, end) {

    // Are the user inputs valid? 
    if (!pegNames.includes(start) || !pegNames.includes(end)) {
        console.log("Invalid Stack Specified");
        return;
    }

}

function checkForWin() {

    // Win condition
    let win = [4, 3, 2, 1];

    // Are all of the numbers in order at the end of the stack?
    // 
    if (peg3 === win) {
        // Return True/as won
    } else {
        // Return False/as lost
    }
}

function towersOfHanoi(startStack, endStack) {

    // Are the user inputs valid? 
    let start = startStack;
    let end = endStack;
    isLegal(start, end);

    // Move piece

    // Check for win
    checkForWin();

}

function getPrompt() {
    printStacks();
    rl.question('start stack: ', (startStack) => {
        rl.question('end stack: ', (endStack) => {
            towersOfHanoi(startStack, endStack);
            getPrompt();
        });
    });
}

getPrompt();