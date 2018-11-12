export default function(state = 0, action) {
	switch (action.type) {
		case 'OPERAND':
			const operator = action.payload.operator;
			if (operator) {
				if (operator === '+') return state + action.payload.operand;
				else if (operator === '-') return state - action.payload.operand;
				else if (operator === 'x') return state * action.payload.operand;
				else if (operator === '/') return state / action.payload.operand;
			} else {
				return action.payload.operand;
			}
	}
	return state;
}
