import React, { Component } from 'react';

class TodoListItem extends Component {
	constructor(props) {
		super(props);

		this.state = { completed: false };
	}
	render() {
		let status = 'incomplete';
		if (this.state.completed) {
			status = 'complete';
		}
		return (
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<div className="d-flex justify-content-between align-items-center" style={{ minWidth: '4rem' }}>
					<i className={`fas fa-check ${status}`} onClick={this.toggleClass} />
					{this.props.todo.value}
				</div>
				<i
					className="fas fa-times remove-item"
					onClick={() => this.props.handleDeleteTodo(this.props.todo.id)}
				/>
			</li>
		);
	}

	toggleClass = () => {
		this.setState({ completed: !this.state.completed });
		this.props.handleToggleStatusTodo(this.props.todo.id);
	};
}

export default TodoListItem;
