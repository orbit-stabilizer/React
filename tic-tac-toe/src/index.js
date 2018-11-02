import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

class App extends Component {
	constructor(props) {
		super(props);

		let h_top = 0;
		let h_mid = 0;
		let h_bot = 0;
		let v_top = 0;
		let v_mid = 0;
		let v_bot = 0;
		let diag_top_down = 0;
		let diag_bottom_top = 0;

		this.state = {
			nextPlayer: 0,
			board: [],
			history: [ [] ],
			victory: false,
			victoryLanes: [ h_top, h_mid, h_bot, v_top, v_mid, v_bot, diag_top_down, diag_bottom_top ]
		};
	}

	render() {
		return (
			<div>
				<Board />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
