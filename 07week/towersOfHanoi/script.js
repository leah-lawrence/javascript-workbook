'use strict';

class TowersOfHanoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedBlock: null,
        selectedDisk: null,
        board: [
          [],
          [],
          []
        ]
    }
    this.disk = this.disk.bind(this);
  }
  // onClick, select data-block
  disk(event){
      console.log("✓ disk()");
      // console.log(this.state.selectedBlock);
      // console.log(this.state.grid);


  }

   // onClick, put disk in a data-stack
  stack(event){
    console.log("✓ stack()");

  }

  render() {
    return (
      <div>
        <div data-stack="1" onClick={this.stack}>
          <div data-block="100" onClick={this.disk}></div>
          <div data-block="75"  onClick={this.disk}></div>
          <div data-block="50"  onClick={this.disk}></div>
          <div data-block="25"  onClick={this.disk}></div>
        </div>
        <div data-stack="2" onClick={this.stack}>
        </div>
        <div data-stack="3" onClick={this.stack}>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TowersOfHanoi />, document.getElementById('towers-of-hanoi'));
