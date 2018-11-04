import React, { Component } from 'react';

class Board extends Component {
	constructor(props) {
		super(props);

		this.state = { finished: false };
	}
	render() {
		return (
			<table className={`col-md-4 fixed finished-${this.state.finished}`}>
				<tbody>
					<tr>
						<td onClick={() => (!this.props.values[0] ? this.handleCellClick(0) : '')}>
							{this.props.values[0]}
						</td>
						<td onClick={() => (!this.props.values[1] ? this.handleCellClick(1) : '')}>
							{this.props.values[1]}
						</td>
						<td onClick={() => (!this.props.values[2] ? this.handleCellClick(2) : '')}>
							{this.props.values[2]}
						</td>
					</tr>
					<tr>
						<td onClick={() => (!this.props.values[3] ? this.handleCellClick(3) : '')}>
							{this.props.values[3]}
						</td>
						<td onClick={() => (!this.props.values[4] ? this.handleCellClick(4) : '')}>
							{this.props.values[4]}
						</td>
						<td onClick={() => (!this.props.values[5] ? this.handleCellClick(5) : '')}>
							{this.props.values[5]}
						</td>
					</tr>
					<tr>
						<td onClick={() => (!this.props.values[6] ? this.handleCellClick(6) : '')}>
							{this.props.values[6]}
						</td>
						<td onClick={() => (!this.props.values[7] ? this.handleCellClick(7) : '')}>
							{this.props.values[7]}
						</td>
						<td onClick={() => (!this.props.values[8] ? this.handleCellClick(8) : '')}>
							{this.props.values[8]}
						</td>
					</tr>
				</tbody>
			</table>
		);
	}

	handleCellClick(id) {
		if (!this.props.victor) {
			this.props.handleCellClick(id);
		} else {
			this.setState({ finished: !this.state.finished });
		}
	}
}

export default Board;
