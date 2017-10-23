'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

// Starting Player
let playerTurn = 'X'

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {

    // Top Row
    if (board[0][0] === playerTurn &&
        board[0][1] === playerTurn &&
        board[0][2] === playerTurn) {
        return true;
    }

    // Middle Row
    if (board[1][0] === playerTurn &&
        board[1][1] === playerTurn &&
        board[1][2] === playerTurn) {
        return true;
    }
    // Bottom Row
    if (board[2][0] === playerTurn &&
        board[2][1] === playerTurn &&
        board[2][2] === playerTurn) {
        return true;
    }

    // If there is not a horizontal win, return false
    return false;
}

function verticalWin() {

    // Left Row
    if (board[0][0] === playerTurn &&
        board[1][0] === playerTurn &&
        board[2][0] === playerTurn) {
        return true;
    }

    // Middle Row
    if (board[0][1] === playerTurn &&
        board[1][1] === playerTurn &&
        board[2][1] === playerTurn) {
        return true;
    }

    // Right Row
    if (board[0][2] === playerTurn &&
        board[1][2] === playerTurn &&
        board[2][2] === playerTurn) {
        return true;
    }

    // If there is not a vertical win, return false
    return false;
}

function diagonalWin() {

    // Left to Right
    if (board[0][0] === playerTurn &&
        board[1][1] === playerTurn &&
        board[2][2] === playerTurn) {
        return true;
    }

    // Right to Left
    if (board[0][2] === playerTurn &&
        board[1][1] === playerTurn &&
        board[2][0] === playerTurn) {
        return true;
    }

    // If there is not a diagional win, return false
    return false;

}

function checkForWin() {

    // If there is a win, return true
    if (horizontalWin() ||
        verticalWin() ||
        diagonalWin()) {
        return true;
    }

    // if there is not a win, return false
    return false;
}

function ticTacToe(row, column) {

    // Convert strings to integers
    row = Number.parseInt(row);
    column = Number.parseInt(column);

    // Check for a valid row input
    if (row >= 3 || row < 0 || !Number.isInteger(row)) {
        console.log("!ERROR: INVALID ROW");
        return;
    }

    // Check for a valid column input
    if (column >= 3 || column < 0 || !Number.isInteger(column)) {
        console.log("!ERROR: INVALID COLUMN");
        return;
    }

    // Check for empty space
    if (board[row][column] != " ") {
        console.log("!ERROR: SPACE TAKEN TRY AGAIN");
        return;
    }

    // Record move
    board[row][column] = playerTurn;

    // Check for win
    if (checkForWin()) {
        console.log("Player " + playerTurn + " wins!");
        process.exit(-1);
    }

    // Switch to the next player
    if (playerTurn === "X") {
        playerTurn = 'O';
    } else {
        playerTurn = 'X';
    }

}

function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    rl.question('row: ', (row) => {
        rl.question('column: ', (column) => {
            ticTacToe(row, column);
            getPrompt();
        });
    });

}

// Tests

if (typeof describe === 'function') {

    describe('#ticTacToe()', () => {
        it('should place mark on the board', () => {
            ticTacToe(1, 1);
            assert.deepEqual(board, [
                [' ', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should alternate between players', () => {
            ticTacToe(0, 0);
            assert.deepEqual(board, [
                ['O', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should check for vertical wins', () => {
            board = [
                [' ', 'X', ' '],
                [' ', 'X', ' '],
                [' ', 'X', ' ']
            ];
            assert.equal(verticalWin(), true);
        });
        it('should check for horizontal wins', () => {
            board = [
                ['X', 'X', 'X'],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ];
            assert.equal(horizontalWin(), true);
        });
        it('should check for diagonal wins', () => {
            board = [
                ['X', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', 'X']
            ];
            assert.equal(diagonalWin(), true);
        });
        it('should detect a win', () => {
            assert.equal(checkForWin(), true);
        });
    });
} else {

    getPrompt();

}


/***************


board = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i']
];

Class Pseudocode

3 Arrays inside of one Array. Inside each array is a string. 

First element in the first array --> board[0][0]
First element in third array --> board[2][0]

Inserting an element in first
let row = [ '', '', ''];
row[1] = 'x';
row[2] = '0';
console.log(row);

Keep track of player's turn. 
Flip a boolean; assign a person with variable

Check for when should call for horizontal win. If not, verticle. If not diagonal. 
Horizontal win: is the column all the same?
Verticle win: are the indexes of all the arrays all the same?
just return true or false, don't return which player won. 

function ticTacToe(row, column) {

    for (var i = 0; i <= 9; i++) {
        if (i % 2) {
            board[row][column] = 'x';
            playerTurn = 'x';
        } else {
            board[row][column] = 'o';
            playerTurn = 'o';
            return board;
        }
    }
}

***************/