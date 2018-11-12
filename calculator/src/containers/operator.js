import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { updateOperator } from '../actions/index';

class Operator extends Component {
	render() {
		return <td onClick={() => this.props.updateOperator(this.props.value)}>{this.props.value}</td>;
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ updateOperator }, dispatch);
}

export default connect(null, mapDispatchToProps)(Operator);
