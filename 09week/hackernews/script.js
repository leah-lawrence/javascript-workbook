'use strict';

class Hacker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}

	componentWillMount(){
		const stories = []
		for (let i=1; i<11; i++) {
			const url = 'https://hacker-news.firebaseio.com/v0/item/506.json?print=pretty';
			const options = {
				method: 'GET',
				headers: {
					'content-type': 'application/json'
				}
			}
			fetch(url, options).then((result) => {
			return result.json();
			}).then((response) => {			
				stories.push(response);
				if(stories.length === 10){
					this.setState({
						list: stories
					})
				}
			});
		}
	}

	render(){
		return(
			<ul>
			{
				this.state.list.map((item, index) => {
					return <li key={index}> {item.title} </li>
				})
			}
			</ul>
		)
	}
}

ReactDOM.render(<Hacker />, document.getElementById('hacker-news'));
