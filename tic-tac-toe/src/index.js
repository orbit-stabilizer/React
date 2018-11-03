import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';
import Detail from './components/detail';

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
			nextPlayer: 1,
			board: [ '', '', '', '', '', '', '', '', '' ],
			history: [ [] ],
			victory: false,
			victoryLanes: [ h_top, h_mid, h_bot, v_top, v_mid, v_bot, diag_top_down, diag_bottom_top ]
		};
	}

	render() {
		return (
			<div className="row">
				<Board values={this.state.board} handleBoxClick={(id) => this.handleBoxClick(id)} />
				<Detail nextPlayer={this.state.nextPlayer ? 'X' : 'O'} />
			</div>
		);
	}

	handleBoxClick(id) {
		const newBoard = this.state.board;
		newBoard[id] = this.state.nextPlayer ? 'X' : 'O';
		this.setState({ board: newBoard }, this.setState({ nextPlayer: !this.state.nextPlayer }));
	}

	checkVictory() {
		if (3 in this.state.victoryLanes) {
			this.setState({ victory: true });
		}
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
