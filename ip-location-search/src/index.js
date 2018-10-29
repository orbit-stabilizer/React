import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'b6b77e811c529d0c1d594b9954eb3b5a';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			city: '',
			country: ''
		};
	}

	onFormSubmit(event) {
		event.preventDefault();

		fetch(`http://api.ipstack.com/${this.state.term}?access_key=${API_KEY}`)
			.then((res) => (res.ok ? res : Error(`Request rejected with status ${res.status}`)))
			.then((res) => res.json())
			.then((data) => this.setState({ city: data.city, country: data.country_name }))
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div className="container">
				<h2 className="mb-5">Search Location by IP Adddress</h2>
				<SearchBar
					onFormSubmit={(event) => this.onFormSubmit(event)}
					onTermChange={(term) => this.setState({ term })}
					term={this.state.term}
				/>
				<div className="results-div">
					<p>City: {this.state.city}</p>
					<p>Country: {this.state.country}</p>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
