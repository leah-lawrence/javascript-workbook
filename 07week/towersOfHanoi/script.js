'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      block: null, 
      board: {
        1: [100,75, 50,25],
        2: [],
        3: []
      }
    };
    this.playerTurn = this.playerTurn.bind(this);
  }
  // move disks on board
  playerTurn(event){
      const board = this.state.board; 
      const block = this.state.block;
      const stack = event.target.getAttribute("data-stack"); 
      const selStack = board[stack] // selected stack ie this.state.board[1]
      const store = {};

      // add disk to stack - onClick
      if (!block) { // if the stack has a block
        const move = selStack.pop(); // take last element in selected board's array
        this.state.block = move; // move to this.state.block
        store['move'] = move; // move to store
        // console.log(this.state); // print the state of the object in console
        // console.log("if runs"); // console test
      } else if (selStack.length === 0 || selStack[selStack.length-1] > block) { // if nothing in stack, or last item in stack is less than stored block
        selStack.push(this.state.block); // place the block on stack
        this.state.block = null; // reset
        // console.log("else if runs") // console test
      }
      this.setState(store); // change 
      console.log(this.state);
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
