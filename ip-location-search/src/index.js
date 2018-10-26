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
		}

	}

	render() {
		return (
			<div>
				<input value={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
				<p>City: {this.city}</p>
				<p>Country: {this.country}</p>
				<p>error: {this.error}</p>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});

		fetch(`http://api.ipstack.com/${term}?${API_KEY}`)
			.then(response => response.json())
			.then(data => this.setState({city: data.city, country: data.country}))
			.catch(error => this.setState({error}));
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));