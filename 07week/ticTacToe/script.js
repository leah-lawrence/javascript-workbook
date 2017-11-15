'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 'X'
    }
    this.board = [
      [null,null,null],
      [null,null,null],
      [null,null,null]
    ];
    this.takePlayerTurn = this.takePlayerTurn.bind(this);
  }

takePlayerTurn() {
    //console.log("hello world");
    //console.log("");

    let playerTurn = this.state.turn;
    let newTurn = this.state.turn;

    // print player turn in console onClick
    if(playerTurn === 'X'){
      console.log(playerTurn);
    }else {
      console.log(playerTurn)
    }

    // change players
    playerTurn === 'X' ? playerTurn = 'O' : playerTurn = 'X';
}

  render() {
    return (
      <div>
        <div className="row">
          <div onClick={this.takePlayerTurn} data-cell="0"></div>
          <div onClick={this.takePlayerTurn} data-cell="1"></div>
          <div onClick={this.takePlayerTurn} data-cell="2"></div>
        </div>
        <div className="row">
          <div onClick={this.takePlayerTurn} data-cell="3"></div>
          <div onClick={this.takePlayerTurn} data-cell="4"></div>
          <div onClick={this.takePlayerTurn} data-cell="5"></div>
        </div>
        <div className="row">
          <div onClick={this.takePlayerTurn} data-cell="6"></div>
          <div onClick={this.takePlayerTurn} data-cell="7"></div>
          <div onClick={this.takePlayerTurn} data-cell="8"></div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
