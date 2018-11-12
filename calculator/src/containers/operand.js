import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateOperand } from '../actions/index';

class Operand extends Component {
	render() {
		const value = this.props.hidden ? '' : this.props.value;
		return <td onClick={() => this.props.onNumberSelect(this.props.value, this.props.operator)}>{value}</td>;
	}
}

function mapStateToProps(state) {
	return { operator: state.operator };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ onNumberSelect: updateOperand }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Operand);
