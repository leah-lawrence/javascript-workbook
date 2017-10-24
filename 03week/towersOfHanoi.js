'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// This object establishes the game board
let stacks = {
    a: [4, 3, 2, 1],
    b: [],
    c: []
};

// This function prints the game board so it can be viewed in console
function printStacks() {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
}

// This function moves disks from one stack to another
function movePiece(startStack, endStack) {
    let move = stacks[startStack].pop();
    stacks[endStack].push(move);
}

// This function checks to see if the move is legal
function isLegal(startStack, endStack) {

    // Are the user inputs valid?  Is the peg empty?
    let pegNames = ['a', 'b', 'c'];

    if (!pegNames.includes(startStack) || !pegNames.includes(endStack)) {
        console.log("!ERROR: Invalid Start Stack Name");
        return false;
    }

    // Are the inputs equal?
    if (startStack === endStack) {
        console.log("!ERROR: Can Not Move To Itself");
        return false;
    }

    // Is the first peg empty?
    if (stacks[startStack].length === 0) {
        console.log("!ERROR: Empty Start Peg");
        return false;
    }

    // Placing a large disk on top of a smaller one?
    let firstPeg = stacks[startStack][stacks[startStack].length - 1];
    let lastPeg = stacks[endStack][stacks[endStack].length - 1];

    if (firstPeg > lastPeg) {
        console.log("!ERROR: Can Not Place A Larger Disk On A Smaller Disk");
        return false;
    }

    return true;
}

// This function checks to see if the current state of the board is in win state
function checkForWin() {

    // Checks each element in stacks.c
    if (stacks.c[0] === 4 &&
        stacks.c[1] === 3 &&
        stacks.c[2] === 2 &&
        stacks.c[3] === 1) {
        return true;
    } else {
      return false;
    }

}

// This function runs the order of operations
function towersOfHanoi(startStack, endStack) {

    // Checks to see if legal move
    if (isLegal(startStack, endStack)) {
        // If True, move piece from end of one stack to another
        movePiece(startStack, endStack);
    }

    // Check for win
    if (checkForWin()) {
        console.log("You Win!");
        process.exit();
    }

}

// This function prompts the user for input
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