'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedplayerTurn: null,
        board: [
          [],
          [],
          []
        ]
    }
    this.playerTurn = this.playerTurn.bind(this);
  }
  // onClick, select data-block and put playerTurn in a data-stack
  playerTurn(event){
      console.log("✓ playerTurn()");
      // console.log(this.state.selectedBlock);
      // console.log(this.state.grid);


  }


  render() {
    return (
      <div>
        <div data-stack="1" onClick={this.playerTurn}>
          <div data-block="100"></div>
          <div data-block="75" ></div>
          <div data-block="50" ></div>
          <div data-block="25" ></div>
        </div>
        <div data-stack="2" onClick={this.playerTurn}>
        </div>
        <div data-stack="3" onClick={this.playerTurn}>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
