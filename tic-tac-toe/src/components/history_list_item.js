import React from 'react';

const HistoryListItem = ({ onHistoryListItemClick, index }) => {
	let msg = `Go to move: ${index}`;
	if (index === 0) {
		msg = 'Go to game start';
	}
	return (
		<li>
			<button className="btn btn-secondary mt-1 btn-sm" onClick={() => onHistoryListItemClick(index)}>
				{msg}
			</button>
		</li>
	);
};

export default HistoryListItem;
