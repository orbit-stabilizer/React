import React from 'react';

const Detail = ({ nextPlayer, victor }) => {
	if (victor) {
		return <div>Victor: {victor}</div>;
	} else {
		return <div className="detail-div col-md-6">Next Player: {nextPlayer}</div>;
	}
};

export default Detail;
