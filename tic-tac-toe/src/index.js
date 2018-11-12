import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';
import HistoryList from './components/history_list';
import GameInfo from './components/game_info';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			board: [ '', '', '', '', '', '', '', '', '' ],
			nextPlayerOrVictor: 'X',
			history: {
				boards: [ [] ],
				nextPlayerOrVictors: [ 'X' ]
			},
			clearHistory: [ false, 0 ]
		};
	}

	render() {
		return (
			<div className="row">
				<Board board={this.state.board} onCellClick={(id) => this.updateBoardCell(id)} />
				<div>
					<GameInfo nextPlayerOrVictor={this.state.nextPlayerOrVictor} />
					<HistoryList
						history={this.state.history.boards}
						onHistoryListItemClick={(index) => {
							this.updateBoard(index);
						}}
					/>
				</div>
			</div>
		);
	}

	updateBoard(index) {
		console.log(this.state.history.nextPlayerOrVictors);
		this.setState({ board: this.state.history.boards[index] }, () =>
			this.setState({ nextPlayerOrVictor: this.state.history.nextPlayerOrVictors[index] })
		);
		this.setState({ clearHistory: [ true, index ] });
	}

	updateBoardCell(id) {
		const { nextPlayerOrVictor } = this.state;
		if (this.state.clearHistory[0] === true) {
			this.clearHistory(id);
		} else if (nextPlayerOrVictor === 'X' || nextPlayerOrVictor === 'O') {
			let newBoard = this.state.board.slice(); // need to copy array, not have a reference to the same this.state.board array
			if (newBoard[id] !== 'X' && newBoard[id] !== 'O') {
				newBoard[id] = nextPlayerOrVictor;
				this.setState({ board: newBoard }, () => this.updateNextPlayerOrVictor());
			}
		}
	}

	clearHistory(id) {
		let { history } = this.state;
		let boards = history.boards.slice(0, this.state.clearHistory[1] + 1);
		let nextPlayerOrVictors = history.nextPlayerOrVictors.slice(0, this.state.clearHistory[1] + 1);
		history = { boards: boards, nextPlayerOrVictors: nextPlayerOrVictors };
		this.setState({ history }, () => this.setState({ clearHistory: [ false, 0 ] }, () => this.updateBoardCell(id)));
	}

	updateHistory() {
		let board = this.state.board;
		let nextPlayerOrVictor = this.state.nextPlayerOrVictor;
		console.log(nextPlayerOrVictor);
		let history = this.state.history;
		history.boards.push(board);
		history.nextPlayerOrVictors.push(nextPlayerOrVictor);
		this.setState({ history });
	}

	updateNextPlayerOrVictor() {
		const victoryLanes = this.returnVictoryLanes();
		if (Object.values(victoryLanes).includes(3)) {
			console.log('lol');
			this.setState({ nextPlayerOrVictor: 'Winner: O' }, () => this.updateHistory());
		} else if (Object.values(victoryLanes).includes(-3)) {
			this.setState({ nextPlayerOrVictor: 'Winner: X' }, () => this.updateHistory());
		} else {
			if (this.state.nextPlayerOrVictor === 'X') {
				this.setState({ nextPlayerOrVictor: 'O' }, () => this.updateHistory());
			} else if (this.state.nextPlayerOrVictor === 'O') {
				this.setState({ nextPlayerOrVictor: 'X' }, () => this.updateHistory());
			}
		}
	}

	returnVictoryLanes() {
		let victoryLanes = {
			h_top: 0,
			h_mid: 0,
			h_bot: 0,
			v_left: 0,
			v_mid: 0,
			v_right: 0,
			diag_top_down: 0,
			diag_bottom_top: 0
		};

		for (let i = 0; i < this.state.board.length; i++) {
			let val;
			if (this.state.board[i] === 'O') {
				val = 1;
			} else if (this.state.board[i] === 'X') {
				val = -1;
			} else {
				val = 0;
			}
			if (i === 0) {
				victoryLanes.h_top += val;
				victoryLanes.v_left += val;
				victoryLanes.diag_top_down += val;
			}
			if (i === 1) {
				victoryLanes.h_top += val;
				victoryLanes.v_mid += val;
			}
			if (i === 2) {
				victoryLanes.h_top += val;
				victoryLanes.v_right += val;
				victoryLanes.diag_bottom_top += val;
			}
			if (i === 3) {
				victoryLanes.h_mid += val;
				victoryLanes.v_left += val;
			}
			if (i === 4) {
				victoryLanes.h_mid += val;
				victoryLanes.v_mid += val;
				victoryLanes.diag_top_down += val;
				victoryLanes.diag_bottom_top += val;
			}
			if (i === 5) {
				victoryLanes.h_mid += val;
				victoryLanes.v_right += val;
			}
			if (i === 6) {
				victoryLanes.h_bot += val;
				victoryLanes.v_left += val;
				victoryLanes.diag_bottom_top += val;
			}
			if (i === 7) {
				victoryLanes.h_bot += val;
				victoryLanes.v_mid += val;
			}
			if (i === 8) {
				victoryLanes.h_bot += val;
				victoryLanes.v_right += val;
				victoryLanes.diag_top_down += val;
			}
		}
		return victoryLanes;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
