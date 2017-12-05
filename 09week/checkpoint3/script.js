'use strict';

// 
class DataComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}

	componentWillMount(){
		// store state changes
		const store = []
		// create list 
		for (let i=1; i<11; i++) {
			const url = `https://blockchain.info/unconfirmed-transactions?format=json`; // Hacker News API
			console.log("Fetch Object", URL); // test url in console
			const options = {
				method: 'GET',
				headers: {
					'content-type': 'application/json'
				}
			}
			// call API
			fetch(url, options).then((result) => {
			return result.json();
			}).then((response) => {			
				store.push(response); // send information to storage
				if(store.length === 10){ 
					this.setState({ 
						list: store // set state
					})
				}
			});
		}
	}

	render(){
		return(
			<ol>
			{
				// display list in the browser
				this.state.list.map((item, index) => {
					console.log(item.title); // show titles in console
					console.log(item.url); // show urls in console

					return <li key={index}> {item.title} <br /> 	
					By: {item.by} <br />							
					<a href={item.url} target="_blank"> Go to article</a>
					<br /><br />
					</li>	
				})
			}
			</ol>
		)
	}
}

ReactDOM.render(<DataComponent />, document.getElementById('reactComponent'));