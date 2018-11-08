import React from 'react';
import HistoryListItem from './history_list_item';

const HistoryList = ({ history, onHistoryListItemClick }) => {
	const historyList = history.map((history, index) => (
		<HistoryListItem key={index} onHistoryListItemClick={onHistoryListItemClick} index={index} />
	));
	return (
		<div>
			<ol>{historyList}</ol>
		</div>
	);
};

export default HistoryList;
