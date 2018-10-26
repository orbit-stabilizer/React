import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'b6b77e811c529d0c1d594b9954eb3b5a';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			city: '',
			country: '',
			error: null
		};
	}

	onButtonClick() {
		fetch(`http://api.ipstack.com/${this.state.term}?access_key=${API_KEY}`)
			.then((res) => {
				if (res.ok) {
					return res;
				} else {
					throw Error(`Request rejected with status ${res.status}`);
				}
			})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				console.log(data.city);
				console.log(data.country_name);
				console.log(this);
				return this.setState({ city: data.city, country: data.country_name });
			})
			.catch((error) => this.setState({ error }));
	}

	render() {
		return (
			<div>
				<input value={this.state.term} onChange={(event) => this.setState({ term: event.target.value })} />
				<button onClick={() => this.onButtonClick()}>Submit</button>
				<p>City: {this.state.city}</p>
				<p>Country: {this.state.country}</p>
				<p>error: {this.state.error}</p>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
