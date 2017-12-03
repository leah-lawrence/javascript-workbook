'use strict';

class ListUsers extends React.Component {
    constructor(props) {
        super(props);
        this.initialDraw = this.initialDraw.bind(this);
        this.state = {
            users: []
        }
    }

    initialDraw(arr) {
        // Fetch the data object from this address
        fetch('https://reqres.in/api/users?page=2')
        // Return the data/content of the API
        .then(function(response) {
            console.log("the status of my response", response.status) // display status
            console.log("response object", response); // display full response
            return response.json();            
        })
        // Change state of ListUsers to API Data
        .then((data) => {
            console.log("the data is ", data);
            console.log("list of users", data.data);
            let newState = data.data;
            this.setState({
                users: newState 
            });
        });
    }

    render() {
        // If there is not a list, create a list from API
        if(this.state.users.length === 0){
            this.initialDraw();
        }

       // Container that holds the list 
       return (
            <div className="container-fluid">
                <h1>List of People</h1> // Container Title
                <div> // Build list in HTML
                    {
                      this.state.users.map((item, i) => { // Map each item in the array
                        return(
                          <div>
                            <p>{item.first_name} {item.last_name}</p> // Return first and last name
                            <img src={item.avatar}></img> // Return avatar
                          </div>
                        );
                      })
                    }
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ListUsers />, document.getElementById('fetch'));