import React from 'react';

const GameInfo = ({ nextPlayerOrVictor }) => {
	let msg = '';
	if (nextPlayerOrVictor === 'X' || nextPlayerOrVictor === 'O') {
		msg = `Next player: ${nextPlayerOrVictor}`;
	} else {
		msg = nextPlayerOrVictor;
	}

	return <p>{msg}</p>;
};

export default GameInfo;
