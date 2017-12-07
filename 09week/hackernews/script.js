'use strict';

class HackerNews extends React.Component {
  constructor(props) {
    super(props);
    this.set = this.thingthing.bind(this);
    this.state = {
      list: null,
      notUpdated: true
    }
  }

  thingthing(arr) {
    let p = fetch('https://hacker-news.firebaseio.com/v0/item/8870.json?print=pretty');
    let jsonPromise = p.then(function(response) {
      console.log("the status of my response: ", response.status);
      return response.json();
    });

    let x = jsonPromise.then((data) => {
      let arr = data;
      this.setState({
        list: arr,
        notUpdated: false
      });
    });
  }

  render() {
    if (this.state.notUpdated) {
      this.thingthing();
    };

    let list = this.state.list;

    return (
      <div className="container-fluid">
          <h1>Hello! I do work!</h1>
        <div className="row">{this.state.notUpdated ? "hello!" : list.by}</div>
      </div>
    );
  }
}

ReactDOM.render(<HackerNews />, document.getElementById('hacker-news'));
