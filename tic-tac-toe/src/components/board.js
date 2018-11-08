import React from 'react';

const Board = ({ board, onCellClick }) => {
	return (
		<table className="col-md-4 fixed">
			<tbody>
				<tr>
					<td onClick={() => onCellClick(0)}>{board[0]}</td>
					<td onClick={() => onCellClick(1)}>{board[1]}</td>
					<td onClick={() => onCellClick(2)}>{board[2]}</td>
				</tr>
				<tr>
					<td onClick={() => onCellClick(3)}>{board[3]}</td>
					<td onClick={() => onCellClick(4)}>{board[4]}</td>
					<td onClick={() => onCellClick(5)}>{board[5]}</td>
				</tr>
				<tr>
					<td onClick={() => onCellClick(6)}>{board[6]}</td>
					<td onClick={() => onCellClick(7)}>{board[7]}</td>
					<td onClick={() => onCellClick(8)}>{board[8]}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Board;
