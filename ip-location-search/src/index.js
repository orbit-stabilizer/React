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

	onFormSubmit(event) {
		event.preventDefault();

		fetch(`http://api.ipstack.com/${this.state.term}?access_key=${API_KEY}`)
			.then((res) => (res.ok ? res : Error(`Request rejected with status ${res.status}`)))
			.then((res) => res.json())
			.then((data) => this.setState({ city: data.city, country: data.country_name }))
			.catch((error) => this.setState({ error }));
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={(event) => this.onFormSubmit(event)}>
					<div className="form-group">
						<input
							className="form-control"
							onChange={(event) => this.setState({ term: event.target.value })}
							placeholder="Enter IP Address"
							value={this.state.term}
						/>
						<button className="btn btn-primary btn-block mt-3" type="submit">
							Submit
						</button>
					</div>
				</form>
				<div className="results-div">
					<p>City: {this.state.city}</p>
					<p>Country: {this.state.country}</p>
					<p>Error: {this.state.error}</p>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
