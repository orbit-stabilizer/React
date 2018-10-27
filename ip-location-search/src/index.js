import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'b6b77e811c529d0c1d594b9954eb3b5a';
const MAPBOX_API_KEY = 'sk.eyJ1Ijoia2Rlb3dyYSIsImEiOiJjam5xenBmM3EwMzFwM3Bxend6bWFuamc5In0.GGMg0SpiXVELreGJ6PJCxw';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: '',
			longitude: '',
			latitude: '',
			map: '',
			error: null
		};
	}

	onFormSubmit(event) {
		event.preventDefault();

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
				return this.setState({ longitude: data.longitude, latitude: data.latitude }, () =>
					fetch(
						`http://api.mapbox.com/v4/mapbox.mapbox-streets-v7/zoomwheel,zoompan.html?access_token=${MAPBOX_API_KEY}#zoom/${this
							.state.latitude}/${this.state.longitude}`
					)
						.then((res) => res.text())
						.then((map) => this.setState({ map }))
				);
			})
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
				<iframe
					src={`http://api.mapbox.com/v4/mapbox.mapbox-streets-v7/zoomwheel,zoompan.html?access_token=${MAPBOX_API_KEY}#zoom/${this
						.state.latitude}/${this.state.longitude}`}
				/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
