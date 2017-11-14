'use strict';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0
        }
        // this.incrementCounter = this.incrementCounter.bind(this);
        // this.decrementCounter = this.decrementCounter.bind(this);
        this.changeCounter = this.changeCounter.bind(this);
    }


    changeCounter(event) {
      console.log("the event object", event);
      console.log("the element clicked", event.target);
      console.log("The value is ", event.target.getAttribute("data-name"));
      let task = event.target.getAttribute("data-name");
      let newCounter = this.state.counter;
      if (task === 'increment'){
        newCounter=newCounter+1
      } else if (task === 'decrement'){
        newCounter = newCounter-1
      }
      const newState = {
        counter: newCounter
      }
      this.setState(newState);
    }


    // incrementCounter(event) {
    //   const newState = {
    //     counter: this.state.counter+1
    //   }
    //   this.setState(newState);
    // }

    // decrementCounter(event){
    //   const newState = {
    //     counter: this.state.counter-1
    //   
    //   this.setState(newState);
    // }

    render() {
        return (
         <div>
         <h1 onClick={this.incrementCounter}> The counter is now {this.state.counter} </h1>
         <h2 data-name="increment" onClick={this.changeCounter}> Increment </h2>
         <h2 data-name="decrement" onClick={this.changeCounter}> Decrement </h2>
         </div>
         // <div>
         // <h1 data-name="increment" onClick={this.incrementCounter}> The counter is now {this.state.counter} </h1>
         // <h2 onClick={this.decrementCounter}> click me to decrement </h2>
         // <h2 onClick={this.changeCounter}> click me to change counter </h2>
         // </div>
        );
    }
}

ReactDOM.render( < List / > , document.getElementById('container'));