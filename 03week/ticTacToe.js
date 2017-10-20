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

let playerTurn = 'X' // Every time you process a turn, you need to swap players. Before swapping, check to see if the player won
// let playerTurn = 'O';

function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
    if ((board[0][0] === playerTurn && board[0][1] === playerTurn && board[0][2] === playerTurn) ||
        (board[1][0] === playerTurn && board[1][1] === playerTurn && board[1][2] === playerTurn) ||
        (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2] === playerTurn)) {
        return true;
    }
}

function verticalWin() {
    if ((board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0] === playerTurn) ||
        (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1] === playerTurn) ||
        (board[0][2] === playerTurn && board[1][2] === playerTurn && board[2][2] === playerTurn)) {
        return true;
    }
}

function diagonalWin() {
    if ((board[0][0] === playerTurn && board[1][1] === playerTurn && board[2][2] === playerTurn) ||
        (board[0][2] === playerTurn && board[1][1] === playerTurn && board[2][0] === playerTurn)) {
        return true;
    }
}

function checkForWin() {
    if (horizontalWin() || verticalWin() || diagonalWin()) {
        return true;
    }
}

function ticTacToe(row, column) {
    
    // Convert strings to integers
    row = Number.parseInt(row);
    column = Number.parseInt(column);

    // Check for valid inputs
    if (row >= 3 || row < 0 || !Number.isInteger(row)) {
        console.log("Invalid row");
        return;
    } if (column >= 3 || column < 0 || !Number.isInteger(column)) {
        console.log("Invalid column");
        return;
    } if (board[row][column] != " ") {
        console.log("Space taken, try again");
        return;
    }

    // Record move
    board[row][column] = playerTurn;

    // Check for win
    if (checkForWin()) {
        console.log("Player " + playerTurn + " wins!");
        process.exit(-1);
    }
    
    // Togggle player turn
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