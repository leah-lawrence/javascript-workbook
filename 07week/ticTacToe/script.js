'use strict';

class TicTacToe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      turn: 'X',
      gameInPlay: true,
    }
  }

  gameWon = (newState) => {
    newState.gameInPlay = false;
    newState.winner = newState.turn;
    return newState;
  }

  resetBoard = () => {
    const brandNewState = {
      turn: 'X',
      gameInPlay: true,
      cell0: null,
      cell1: null,
      cell2: null,
      cell3: null,
      cell4: null,
      cell5: null,
      cell6: null,
      cell7: null,
      cell8: null,
      winner: null,
    };
    this.setState(brandNewState);
  }

  handleClick = (cell) => {
    let newState = {...this.state};
    if (!newState[cell] && newState.gameInPlay) {
      newState[cell] = newState.turn;
      switch (true) {
        case (newState.cell0 === newState.turn && newState.cell1 === newState.turn && newState.cell2 === newState.turn):
          newState = this.gameWon(newState);
          break;
        case (newState.cell3 === newState.turn && newState.cell4 === newState.turn && newState.cell5 === newState.turn):
          newState = this.gameWon(newState);
          break;
        case (newState.cell6 === newState.turn && newState.cell7 === newState.turn && newState.cell8 === newState.turn):
          newState = this.gameWon(newState);
          break;
        case (newState.cell0 === newState.turn && newState.cell3 === newState.turn && newState.cell6 === newState.turn):
          newState = this.gameWon(newState);
          break;
        case (newState.cell1 === newState.turn && newState.cell4 === newState.turn && newState.cell7 === newState.turn):
          newState = this.gameWon(newState);
          break;
        case (newState.cell2 === newState.turn && newState.cell5 === newState.turn && newState.cell8 === newState.turn):
          newState = this.gameWon(newState);
          break;
        case (newState.cell0 === newState.turn && newState.cell4 === newState.turn && newState.cell8 === newState.turn):
          newState = this.gameWon(newState);
          break;
        case (newState.cell2 === newState.turn && newState.cell4 === newState.turn && newState.cell6 === newState.turn):
          newState = this.gameWon(newState);
          break;
        default:
          newState.turn = newState.turn === 'X' ? 'O' : 'X';
      }
      this.setState(newState);
    }
  };

  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div data-cell="0" onClick={() => this.handleClick('cell0')}>{this.state.cell0}</div>
            <div data-cell="1" onClick={() => this.handleClick('cell1')}>{this.state.cell1}</div>
            <div data-cell="2" onClick={() => this.handleClick('cell2')}>{this.state.cell2}</div>
          </div>
          <div className="row">
            <div data-cell="3" onClick={() => this.handleClick('cell3')}>{this.state.cell3}</div>
            <div data-cell="4" onClick={() => this.handleClick('cell4')}>{this.state.cell4}</div>
            <div data-cell="5" onClick={() => this.handleClick('cell5')}>{this.state.cell5}</div>
          </div>
          <div className="row">
            <div data-cell="6" onClick={() => this.handleClick('cell6')}>{this.state.cell6}</div>
            <div data-cell="7" onClick={() => this.handleClick('cell7')}>{this.state.cell7}</div>
            <div data-cell="8" onClick={() => this.handleClick('cell8')}>{this.state.cell8}</div>
          </div>
          <div id="announce-winner">Winner: {this.state.winner}</div>
        </div>
        <button id="reset" onClick={() => this.resetBoard()}>Play Again?</button>
      </div>
    );
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
