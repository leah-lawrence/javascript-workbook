'use strict';

class TicTacToe extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                turn: 'X',
                grid: [
                  [null, null, null],
                  [null, 'O', null],
                  [null, null, null]
              ]
            }
            this.takePlayerTurn = this.takePlayerTurn.bind(this);
        }

        takePlayerTurn(event) {
            // console.log("hello world");
            // console.log(this.state.turn);
            // console.log(this.state.grid);

            let cellInput = event.target.getAttribute("data-cell");
            let playerTurn = this.state.turn;
            let gameBoard = this.state.grid;
            let newState = this.state.turn;

            //console.log(cellInput);

            // can add playerTurn to the array element (onClick)
            if (cellInput === "0") {
                gameBoard[0][0] = (playerTurn);
                console.log(playerTurn);
                console.log(gameBoard);
            } else if (cellInput === "1") {
                gameBoard[0][1] = (playerTurn);
                console.log(playerTurn);
                console.log(gameBoard);
            } else if (cellInput === "2") {
                gameBoard[0][2] = (playerTurn);
                console.log(playerTurn);
                console.log(gameBoard);
            } else if (cellInput === "3") {
                gameBoard[1][0] = (playerTurn);
                console.log(playerTurn);
                console.log(gameBoard);
            } else if (cellInput === "4") {
                gameBoard[1][1] = (playerTurn);
                console.log(playerTurn);
                console.log(gameBoard);
            } else if (cellInput === "5") {
                gameBoard[1][2] = (playerTurn);
                console.log(playerTurn);
                console.log(gameBoard);
            } else if (cellInput === "6") {
                gameBoard[2][0] = (playerTurn);
                console.log(playerTurn);
                console.log(gameBoard);
            } else if (cellInput === "7") {
                gameBoard[2][1] = (playerTurn);
                console.log(playerTurn);
                console.log(gameBoard);
            } else if (cellInput === "8") {
                gameBoard[2][2] = (playerTurn);
                console.log(playerTurn);
                console.log(gameBoard);
            } 

            // switch players
            if (playerTurn === 'X') {
                //console.log(playerTurn, cellInput);
                newState = {
                  turn: 'O'
                }
            } else {
                //console.log(playerTurn, cellInput);
                newState = {
                  turn: 'X'
                }
            }
            const changePlayer = {
                turn: playerTurn
            }
            this.setState(newState);
        }

  render() {
    return (
      <div>
        <div className="row">
          <div onClick={this.takePlayerTurn} data-cell="0">{this.state.grid[0][0]}</div>
          <div onClick={this.takePlayerTurn} data-cell="1">{this.state.grid[0][1]}</div>
          <div onClick={this.takePlayerTurn} data-cell="2">{this.state.grid[0][2]}</div>
        </div>
        <div className="row">
          <div onClick={this.takePlayerTurn} data-cell="3">{this.state.grid[1][0]}</div>
          <div onClick={this.takePlayerTurn} data-cell="4">{this.state.grid[1][1]}</div>
          <div onClick={this.takePlayerTurn} data-cell="5">{this.state.grid[1][2]}</div>
        </div>
        <div className="row">
          <div onClick={this.takePlayerTurn} data-cell="6">{this.state.grid[2][0]}</div>
          <div onClick={this.takePlayerTurn} data-cell="7">{this.state.grid[2][1]}</div>
          <div onClick={this.takePlayerTurn} data-cell="8">{this.state.grid[2][2]}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
