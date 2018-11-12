export default function(state = null, action) {
	console.log(action.payload);
	console.log(action.type);
	switch (action.type) {
		case 'OPERATOR':
			return action.payload;
		case 'OPERAND':
			return null;
	}

	return state;
}
