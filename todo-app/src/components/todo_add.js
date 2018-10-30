import React, { Component } from 'react';

class TodoAdd extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
	}
	render() {
		return (
			<form
				className="col-md-8 mx-auto"
				onSubmit={(event) => {
					event.preventDefault();
					this.props.handleAddTodo(this.state.term);
					this.setState({ term: '' });
				}}
			>
				<input
					className="form-control"
					onChange={(event) => this.setState({ term: event.target.value })}
					placeholder="What would you like to do..?"
					type="text"
					value={this.state.term}
				/>
			</form>
		);
	}
}

export default TodoAdd;
