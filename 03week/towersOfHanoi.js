'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let stacks = {
    a: [1],
    b: [],
    c: [4, 3, 2]
};

function printStacks() {
    console.log("a: " + stacks.a);
    console.log("b: " + stacks.b);
    console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
    let move = stacks[startStack].pop();
    stacks[endStack].push(move);
}

function isLegal(startStack, endStack) {

    // Are the user inputs valid?  Is the peg empty?
    let pegNames = ['a', 'b', 'c'];
    if (!pegNames.includes(startStack) || !pegNames.includes(endStack)) {
        console.log("Invalid Stack Name");
        return false;
    }

    // Are the inputs equal?
    if (startStack === endStack) {
        console.log("Can Not Move To Itself");
        return false;
    }

    // Is the first peg empty?
    if (stacks[startStack].length === 0) {
        console.log("Empty Start Peg");
        return false;
    }

    // Can Not Place a Large Disk On Small Disk
    let firstPeg = stacks[startStack][stacks[startStack].length - 1];
    let lastPeg = stacks[endStack][stacks[endStack].length - 1];

    if (firstPeg > lastPeg) {
        console.log("Can Not Place A Larger Disk On A Smaller Disk");
        return false;
    }

    return true;
}

function checkForWin() {
    /*
        // ?? Comparing arrays doesn't work

        if () {
            // Run win condition
            return true;
        } else {
            // Keep Playing
            return false;
        }
    */
}

function towersOfHanoi(startStack, endStack) {

    // Checks to see if legal move
    if (isLegal(startStack, endStack)) {
        // If True, move piece from end of one stack to another
        movePiece(startStack, endStack);
    }

    // Check for win

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