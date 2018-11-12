import { combineReducers } from 'redux';

import OperandReducer from './reducer_operand';
import OperatorReducer from './reducer_operator';

const rootReducer = combineReducers({
	value: OperandReducer,
	operator: OperatorReducer
});

export default rootReducer;
