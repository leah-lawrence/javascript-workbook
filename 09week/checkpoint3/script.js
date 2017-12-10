'use strict';

// API Website https://blockchain.info/api/exchange_rates_api

class BitcoinComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			apiData: [],
			selectedCurrency: ["Click a currency to see the current value in Bitcoin"]
		}
		this.displayData = this.displayData.bind(this);
	}

	componentWillMount(){
		// Fetch Call
		const url = `https://blockchain.info/ticker`; 
			// show the url in the console
			console.log("Fetch: ", URL); 
			// define options
			const options = {
				method: 'GET',
				headers: {'content-type': 'application/json'}
			}
		// Call data
		fetch(url, options)
		.then((response) => {
			// show the response in the console
            console.log("Response: ", response); 
            // return the api data
			return response.json();
		})
		// Store data
		.then((data) => {		
			// console log data
            console.log("Data: ", data); 
            // store data
			this.setState({apiData:data})
			// console log object state
			// const objectLog = this.state.apiData;
			// const propertyLog = this.state.apiData['USD']['buy'];
			// console.log("New apiData State: ", objectLog);
			// console.log("Property USD Buy: ", propertyLog);
		});
	}

	// Display data on button click
	displayData(event) {
		if (Object.keys(this.state.apiData).length) {
			const USD = ["Currency " + this.state.apiData.USD.symbol, 
						 "Buy: " + this.state.apiData.USD.buy, 
						 "Sell: " + this.state.apiData.USD.sell,
						 "Last: " + this.state.apiData.USD.last];
			const JPY = ["Currency " + this.state.apiData.JPY.symbol, 
						 "Buy: " + this.state.apiData.JPY.buy, 
						 "Sell: " + this.state.apiData.JPY.sell,
						 "Last: " + this.state.apiData.JPY.last];
			const EUR = ["Currency " + this.state.apiData.EUR.symbol, 
						 "Buy: " + this.state.apiData.EUR.buy, 
						 "Sell: " + this.state.apiData.EUR.sell,
						 "Last: " + this.state.apiData.EUR.last];
			const NZD = ["Currency " + this.state.apiData.NZD.symbol, 
						 "Buy: " + this.state.apiData.NZD.buy, 
						 "Sell: " + this.state.apiData.NZD.sell,
						 "Last: " + this.state.apiData.NZD.last];
	        // display selected currency data
			const selCurrency = event.target.getAttribute("data-name");
			if (selCurrency === 'USD' ){
				this.setState({selectedCurrency:null});
				this.setState({selectedCurrency:USD});
			} else if (selCurrency === 'JPY' ){
				this.setState({selectedCurrency:null});
				this.setState({selectedCurrency:JPY});
			} else if (selCurrency === 'EUR' ){
				this.setState({selectedCurrency:null});
				this.setState({selectedCurrency:EUR});
			} else if (selCurrency === 'NZD' ){
				this.setState({selectedCurrency:null});
				this.setState({selectedCurrency:NZD});
			};
		
			// console log clicked event
			console.log("vvvvvv ONCLICK EVENT vvvvvv");
	        console.log("Element Value: ", event.target.getAttribute("data-name"));
			console.log("New selectedCurrency State: ", this.state.selectedCurrency);
		}	
	}

	render(){

		// Selected Currency Values
		const displayAPIDataCUR = this.state.selectedCurrency[0];
		const displayAPIDataBUY = this.state.selectedCurrency[1];
		const displayAPIDataSELL = this.state.selectedCurrency[2];
		const displayAPIDataLAST = this.state.selectedCurrency[3];

		return(
			<div className="container">
				<nav> 
					<h1> Current Bitcoin Values by Currency </h1>
					<button data-name="USD" type="button" className="btn btn-primary" onClick={this.displayData} >USD</button>
					<button data-name="JPY" type="button" className="btn btn-primary" onClick={this.displayData} >JPY</button>
					<button data-name="EUR" type="button" className="btn btn-primary" onClick={this.displayData} >EUR</button>
					<button data-name="NZD" type="button" className="btn btn-primary" onClick={this.displayData} >NZD</button>
				</nav>
				<div className="displayAPIdata">
					<p>{displayAPIDataCUR}</p>
					<p>{displayAPIDataBUY}</p>
					<p>{displayAPIDataSELL}</p>
					<p>{displayAPIDataLAST}</p>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<BitcoinComponent />, document.getElementById('bitcoin'));

// const USDbuy = this.state.apiData.USD.buy; // reference property
// const USD = this.state.apiData.USD; // reference USD and all its properties
// const allCurrencies = this.state.apiData // list all currencies

// if (Object.keys(this.state.apiData).length) {
	// 	// const exchangeData = this.state.apiData.map((item, index) => {
	// 	// 	return <p>{value}</p> 
	// 	// });
// }