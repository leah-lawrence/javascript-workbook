'use strict';

const assert = require('assert');
const readline = require('readline');
const colors = require('colors');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function Checker(symbol) {
    this.symbol = symbol;
}

function Board() {
    this.grid = [];
    this.checkers = [];
    // creates an 8x8 array, filled with null values
    this.createGrid = function() {
        // loop to create the 8 rows
        for (let row = 0; row < 8; row++) {
            this.grid[row] = [];
            // push in 8 columns of nulls
            for (let column = 0; column < 8; column++) {
                this.grid[row].push(null);
            }
        }
    };

    // prints out the board
    this.viewGrid = function() {
        // add our column numbers
        let string = "  0 1 2 3 4 5 6 7\n";
        for (let row = 0; row < 8; row++) {
            // we start with our row number in our array
            const rowOfCheckers = [row];
            // a loop within a loop
            for (let column = 0; column < 8; column++) {
                // if the location is "truthy" (contains a checker piece, in this case)
                if (this.grid[row][column]) {
                    // push the symbol of the check in that location into the array
                    rowOfCheckers.push(this.grid[row][column].symbol);
                } else {
                    // just push in a blank space
                    rowOfCheckers.push(' ');
                }
            }
            // join the rowOfCheckers array to a string, separated by a space
            string += rowOfCheckers.join(' ');
            // add a 'new line'
            string += "\n";
        }
        console.log(string);
    };

    // end of Board()
}

function Game() {

    this.board = new Board();
    this.playerTurn = 'R'; // player turn

    this.start = function() {
        this.board.createGrid();
        // place pieces on board in starting positions
        // fill the first 3 rows with red pieces every other place
        // narrow to within the first 3 rows
        for (let row = 0; row < 3; row++) {
            // selects all of the columns
            for (let column = 0; column < 8; column++) {
                // places checker on every other row
                if ((row + column) % 2 === 1) {
                    // Prints out R from class Checker 
                    this.board.grid[row][column] = new Checker('R');
                    this.board.checkers.push(this.board.grid[row][column]);
                }
            }
        }
        // fill the last 3 rows with black pieces every other place
        // narrow to within the first 3 rows
        for (let row = 5; row < 8; row++) {
            // selects all of the columns
            for (let column = 0; column < 8; column++) {
                // places checker on every other row
                if ((row + column) % 2 === 1) {
                    // prints out B from class Checker 
                    this.board.grid[row][column] = new Checker("B");
                    this.board.checkers.push(this.board.grid[row][column]);
                }
            }
        }
    };

    // validate inputs
    this.ValidateInputs = function(origin, destination, board) {

        // take input and split 
        let originInput = origin.split('');
        let destinationInput = destination.split('');

        // convert strings to integers
        this.originRow = Number.parseInt(originInput[0]); // origin row
        this.originColumn = Number.parseInt(originInput[1]); // origin column
        this.destinationRow = Number.parseInt(destinationInput[0]); // destination row
        this.destinationColumn = Number.parseInt(destinationInput[1]); // destination column

        // checkes if this input is a number
        if (!Number.isInteger(this.originRow) || !Number.isInteger(this.originColumn) ||
            !Number.isInteger(this.destinationRow) || !Number.isInteger(this.destinationColumn)) {
            console.log("!!ERROR: You must input a number");
            this.valid = false;
            return;
        }

        // checks if the column is within range 0-7
        if (this.originColumn > 7 || this.destinationColumn > 7 ||
            this.originColumn < 0 || this.destinationColumn < 0) {
            console.log("!!ERROR: Column error: choose between 0 and 7");
            this.valid = false;
            return;
        }

        // checks if the row is within range 0-7
        if (this.originRow > 7 || this.destinationRow > 7 ||
            this.originRow < 0 || this.destinationRow < 0) {
            console.log("!!ERROR: Row error: choose between 0 and 7");
            this.valid = false;
            return;
        }

        this.valid = true;
        return;
    };

    // validate moves
    this.ValidateMoves = function(inputs) {

        // easy to read
        let OR = inputs.originRow;
        let OC = inputs.originColumn;
        let DR = inputs.destinationRow;
        let DC = inputs.destinationColumn;

        // If (piece is king) { move piece };
        // checks to see if player is a king
        if (true) {

        }

        // checks to see if player made a move
        if (this.board.grid[OR][OC] === null) {
            console.log("1) should be able to jump over and kill another checker");
            return false;
        }

        // checks to see if player moved their piece
        if (this.board.grid[OR][OC].symbol !== this.playerTurn) {
            console.log("should move a checker");
            return false;
        }

        // checks to see if moving to the same destination
        if (OR === DR && OC === DC) {
            console.log("!!ERROR: You did not move the checker piece");
            return false;
        }

        // checks to see if there is a piece already in destination
        if (this.board.grid[DR][DC] !== null) {
            console.log("!!ERROR: You can not place a checker on another checker");
            return false;
        }

        // check each legal move. Off board moves checked earlier in ValidateInput
        // checks to see if the checker moved diagionally 1 space
        if ((OR - 1 === DR && OC - 1 === DC) ||
            (OR - 1 === DR && OC + 1 === DC) ||
            (OR + 1 === DR && OC - 1 === DC) ||
            (OR + 1 === DR && OC + 1 === DC)) {
            return true;
        } else if ((OR - 2 === DR && OC - 2 === DC) ||
            (OR - 2 === DR && OC + 2 === DC) ||
            (OR + 2 === DR && OC - 2 === DC) ||
            (OR + 2 === DR && OC + 2 === DC)) {
            return true;
        } else {
            console.log("!!ERROR: Invalid move");
            return false;
        }

    }

    this.removeChecker = function(inputs) {
        // sets origin to null
        this.board.grid[inputs.originRow][inputs.originColumn] = null;
        return;

    }

    this.addChecker = function(inputs) {
        // adds a checker piece to destination
        this.board.grid[inputs.destinationRow][inputs.destinationColumn] = new Checker(this.playerTurn);
        return;
    }

    this.togglePlayer = function() {
        // switch to the next player
        if (this.playerTurn === 'R') {
            this.playerTurn = 'B';
        } else {
            this.playerTurn = 'R';
        }
    }

    this.removeOpponent = function(inputs) {

        // easy to read
        let OR = inputs.originRow;
        let OC = inputs.originColumn;
        let DR = inputs.destinationRow;
        let DC = inputs.destinationColumn;

        if (Math.abs(DR - OR) === 2) {
            let killRow = DR - OR > 0 ? OR + 1 : DR + 1;
            let killCol = DR - OC > 0 ? OC + 1 : DR + 1;
            console.log('!! A checker was captured !!');
            this.board.grid[killRow][killCol] = null;
            // this.board.checkers.split(this.board.grid[row][column]);
        }
    }

    this.moveChecker = function(origin, destination) {

        // checks to see if the inputs are valid
        let inputs = new this.ValidateInputs(origin, destination); // is there a better way to do this as to avoid passing in board?

        if (!inputs.valid) {
            return; // Return to getPrompt if move is invalid
        }

        // checks to see if the moves are valid
        if (!this.ValidateMoves(inputs)) {
            return; // Return to getPrompt if move is invalid
        }

        // move the checker here
        this.removeChecker(inputs);
        this.addChecker(inputs);
        this.removeOpponent(inputs);

        // toggle player
        this.togglePlayer();
    };

    // end of Game()   
}



function getPrompt() {
    game.board.viewGrid();
    rl.question('which piece?: ', (whichPiece) => {
        rl.question('to where?: ', (toWhere) => {
            game.moveChecker(whichPiece, toWhere);
            getPrompt();
        });
    });
}

const game = new Game();
game.start();


//Tests

if (typeof describe === 'function') {
    describe('Game', () => {
        it('should have a board', () => {
            assert.equal(game.board.constructor.name, 'Board');
        });
        it('board should have 24 checkers', () => {
            assert.equal(game.board.checkers.length, 24);
        });
    });

    describe('Game.moveChecker()', function() {
        it('should move a checker', function() {
            assert(!game.board.grid[4][1]);
            game.moveChecker('50', '41');
            assert(game.board.grid[4][1]);
            game.moveChecker('21', '30');
            assert(game.board.grid[3][0]);
            game.moveChecker('52', '43');
            assert(game.board.grid[4][3]);
        });
        it('should be able to jump over and kill another checker', () => {
            game.moveChecker('30', '52');
            assert(game.board.grid[5][2]);
            assert(!game.board.grid[4][1]);
            assert.equal(game.board.checkers.length, 23);
        });
    });
} else {
    getPrompt();
}