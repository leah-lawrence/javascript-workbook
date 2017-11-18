'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        block: null, 
        board: {
         1: [100,75,50,25],
         2: [],
         3: []
        }
    }
    this.playerTurn = this.playerTurn.bind(this);
  }
  // onClick, select data-block and put playerTurn in a data-stack
  playerTurn(event){
      console.log("✓ playerTurn()");

      const stack = event.target.getAttribute("data-stack"); 
      const disk = event.target.getAttribute("data-block");
      const board = this.state.board;
      // console.log(stack);
      // console.log(disk);
      // console.log(board);

      // adds disk to this.state.board - onClick
      
  }


  render() {

    const block1 = this.state.board[1].map((block) => { 
      return (<div data-block={block}></div>);
    });

    const block2 = this.state.board[2].map((block) => {
      return (<div data-block={block}></div>);
    });

    const block3 = this.state.board[3].map((block) => {
      return (<div data-block={block}></div>);
    });

    return (
      <div>
        <div data-stack="1" onClick={this.playerTurn}>{block1}</div>
        <div data-stack="2" onClick={this.playerTurn}>{block2}</div>
        <div data-stack="3" onClick={this.playerTurn}>{block3}</div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
