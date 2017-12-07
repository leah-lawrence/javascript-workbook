'use strict';

// API Website https://blockchain.info/api/exchange_rates_api

class BitcoinComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			apiData: []
		}
	}

	componentWillMount(){
		// Data Storage Array
		//const store = []
		// API Information
		const url = `https://blockchain.info/ticker`; 
			// show the url in the console
			console.log("FETCH OBJECT: ", URL); 
			// define options
			const options = {
				method: 'GET',
				headers: {'content-type': 'application/json'}
			}
		// Call API data
		fetch(url, options)
		.then((response) => {
			// show the response in the console
            console.log("RESPONSE: ", response); 
            // return the api data
			return response.json();
		})
		// Store data
		.then((data) => {		
			// show the data in console
            console.log("DATA: ", data); 
            // store data
			//store.push(data); 
			this.setState({apiData:data})
			// console check object state
			const objectLog = this.state.apiData;
			const propertyLog = this.state.apiData['USD']['buy'];
			console.log("NEW STATE: ", objectLog);
			console.log("PROPERTY: " + propertyLog);
		});
	}

	render(){

		// const USDbuy = this.state.apiData.USD.buy; // reference property
		// const USD = this.state.apiData.USD; // reference USD and all its properties
		// const allCurrencies = this.state.apiData // list all currencies

		if (Object.keys(this.state.apiData).length) {
			// const exchangeData = this.state.apiData.map((item, index) => {
			// 	return <p>{value}</p> 
			// });
		}

		return(
			<div> 
				<h1> hello </h1>
			</div>
		)
	}
}

ReactDOM.render(<BitcoinComponent />, document.getElementById('bitcoin'));