'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'X'
    }
    this.grid = [
      ['X',null,null],
      [null,'O',null],
      [null,null,null]
    ];
    this.takePlayerTurn = this.takePlayerTurn.bind(this);
  }

takePlayerTurn(event) {
 // console.log("hello world");
  console.log(this.state.turn);
 // console.log(this.grid);

 let cellInput = event.target.getAttribute("data-cell");
 let playerTurn = this.state.turn;
 let gameBoard = this.grid; 

 // push playerTurn to the array element (onClick)
 gameBoard[row][column].push(playerTurn);


 // // switch players
 // let nextTurn = this.state.turn;
 // if (playerTurn === 'X'){
 //   console.log(playerTurn);
 //   nextTurn = 'O'
 // } else {
 //   console.log(playerTurn);
 //   nextTurn = 'X'
 // }
 // const changePlayer = {
 //   turn: nextTurn
 // }
 // this.setState(nextTurn);


}
  render() {
    return (
      <div>
        <div className="row">
          <div onClick={this.takePlayerTurn} data-cell="0">{this.grid[0][0]}</div>
          <div onClick={this.takePlayerTurn} data-cell="1">{this.grid[0][1]}</div>
          <div onClick={this.takePlayerTurn} data-cell="2">{this.grid[0][2]}</div>
        </div>
        <div className="row">
          <div onClick={this.takePlayerTurn} data-cell="3">{this.grid[1][0]}</div>
          <div onClick={this.takePlayerTurn} data-cell="4">{this.grid[1][1]}</div>
          <div onClick={this.takePlayerTurn} data-cell="5">{this.grid[1][2]}</div>
        </div>
        <div className="row">
          <div onClick={this.takePlayerTurn} data-cell="6">{this.grid[2][0]}</div>
          <div onClick={this.takePlayerTurn} data-cell="7">{this.grid[2][1]}</div>
          <div onClick={this.takePlayerTurn} data-cell="8">{this.grid[2][2]}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
