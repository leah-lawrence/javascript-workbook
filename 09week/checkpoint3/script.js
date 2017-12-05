'use strict';

// API Website https://blockchain.info/api/exchange_rates_api

class DataComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			apiData: []
		}
	}

	componentWillMount(){
		// Store Data
		const store = []
		// API Information
		const url = `https://blockchain.info/ticker`; 
			console.log("Fetch Object", URL); // test url in console
			const options = {
				method: 'GET',
				headers: {'content-type': 'application/json'}
			}
		// Call API and store information in DataComponent's state
		fetch(url, options).then((result) => {
		return result.json();
		}).then((response) => {			
			store.push(response); // send information to storage
			if(true){ 
				this.setState({ 
					apiData: store // set state
				})
			}
		});
	}

	render(){
		return(
			<div> 
				<h1> hello </h1>
			</div>
		)
	}
}

ReactDOM.render(<DataComponent />, document.getElementById('reactComponent'));