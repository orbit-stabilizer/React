import React from 'react';

const Board = ({ values, handleBoxClick }) => {
	return (
		<table className="col-md-4">
			<tbody>
				<tr>
					<td onClick={() => handleBoxClick(0)}>{values[0]}</td>
					<td onClick={() => handleBoxClick(1)}>{values[1]}</td>
					<td onClick={() => handleBoxClick(2)}>{values[2]}</td>
				</tr>
				<tr>
					<td onClick={() => handleBoxClick(3)}>{values[3]}</td>
					<td onClick={() => handleBoxClick(4)}>{values[4]}</td>
					<td onClick={() => handleBoxClick(5)}>{values[5]}</td>
				</tr>
				<tr>
					<td onClick={() => handleBoxClick(6)}>{values[6]}</td>
					<td onClick={() => handleBoxClick(7)}>{values[7]}</td>
					<td onClick={() => handleBoxClick(8)}>{values[8]}</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Board;
