import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
	render() {
		return <td>{this.props.value}</td>;
	}
}

function mapStateToProps(state) {
	return { value: state.value };
}

export default connect(mapStateToProps)(Display);
