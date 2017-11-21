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
    };
    this.playerTurn = this.playerTurn.bind(this);
  }

  playerTurn(event){
      //console.log("playerTurn() ✓");

      const board = this.state.board; 
      const stack = event.target.getAttribute("data-stack"); 
      const selStack = board[stack]
      const store = [];

      // add disk to stack - onCli£ck
      if (!this.state.block) { // if the stack is not empty
        const move = selStack.pop(); // take last element in selected board's array
        store.push(move); // move to store

        // testing
        console.log(store); // item in store
        console.log(move); // item being moved
        console.log(this.state.board); // state of board
      }
      // } else if (store.length === 0 ||  this.state.block < this.state[stack][this.state[stack].length-1]) {
      //   store.push(this.state.block); //place the block on stack
      //   //store['block'] = null; //reset block value
      
      this.setState(store); 
  }

  render() {

  const board = this.state.board;

  const block1 = board[1].map((block) => { 
    return (<div data-block={block}></div>);
  });

  const block2 = board[2].map((block) => {
    return (<div data-block={block}></div>);
  });

  const block3 = board[3].map((block) => {
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
