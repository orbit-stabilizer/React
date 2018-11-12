export function updateOperand(operand, operator) {
	console.log('lol', operator);
	return {
		type: 'OPERAND',
		payload: { operand, operator }
	};
}

export function updateOperator(operator) {
	return {
		type: 'OPERATOR',
		payload: operator
	};
}
