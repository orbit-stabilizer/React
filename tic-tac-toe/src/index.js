import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';
import Detail from './components/detail';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nextPlayer: 1,
			board: [ '', '', '', '', '', '', '', '', '' ],
			history: [ [] ],
			victor: '',
			victoryLanes: {
				h_top: 0,
				h_mid: 0,
				h_bot: 0,
				v_left: 0,
				v_mid: 0,
				v_right: 0,
				diag_top_down: 0,
				diag_bottom_top: 0
			}
		};
	}

	render() {
		return (
			<div className="row">
				<Board
					values={this.state.board}
					handleCellClick={(id) => this.handleCellClick(id)}
					victor={this.state.victor}
				/>
				<Detail nextPlayer={this.state.nextPlayer ? 'X' : 'O'} victor={this.state.victor} />
			</div>
		);
	}

	handleCellClick(id) {
		const newBoard = this.state.board;
		newBoard[id] = this.state.nextPlayer ? 'X' : 'O';

		this.setState({ board: newBoard }, () => {
			this.updateVictoryLanes(id);
			this.checkVictory();
		});

		this.setState({ nextPlayer: !this.state.nextPlayer });
	}

	updateVictoryLanes(id) {
		const val = this.state.nextPlayer ? 1 : -1;
		const victoryLanes = this.state.victoryLanes;
		switch (id) {
			case 0:
				victoryLanes.h_top += val;
				victoryLanes.v_left += val;
				victoryLanes.diag_top_down += val;
				break;
			case 1:
				victoryLanes.h_top += val;
				victoryLanes.v_mid += val;
				break;
			case 2:
				victoryLanes.h_top += val;
				victoryLanes.v_right += val;
				victoryLanes.diag_bottom_top += val;
				break;
			case 3:
				victoryLanes.h_mid += val;
				victoryLanes.v_left += val;
				break;
			case 4:
				victoryLanes.h_mid += val;
				victoryLanes.v_mid += val;
				victoryLanes.diag_top_down += val;
				victoryLanes.diag_bottom_top += val;
				break;
			case 5:
				victoryLanes.h_mid += val;
				victoryLanes.v_right += val;
				break;
			case 6:
				victoryLanes.h_bot += val;
				victoryLanes.v_left += val;
				victoryLanes.diag_bottom_top += val;
				break;
			case 7:
				victoryLanes.h_bot += val;
				victoryLanes.v_mid += val;
				break;
			case 8:
				victoryLanes.h_bot += val;
				victoryLanes.v_right += val;
				victoryLanes.diag_top_down += val;
				break;
		}
	}

	checkVictory() {
		const victoryLanes = this.state.victoryLanes;
		if (Object.values(victoryLanes).includes(3)) {
			this.setState({ victor: 'O' });
		} else if (Object.values(victoryLanes).includes(-3)) {
			this.setState({ victor: 'X' });
		}
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
