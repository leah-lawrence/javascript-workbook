'use strict';

class Hacker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}

	componentWillMount(){
		// store state changes
		const stories = []
		// create list 
		for (let i=1; i<11; i++) {
			const url = `https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty `; // Hacker News API
			console.log("Fetch Object", URL);
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
				stories.push(response); // send information to storage
				if(stories.length === 10){ 
					this.setState({ 
						list: stories // set state
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

ReactDOM.render(<Hacker />, document.getElementById('hacker-news'));
