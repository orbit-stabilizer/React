import React, { Component } from 'react';

class TodoListItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let status = 'incomplete';
		if (this.props.todo.status === false) {
			status = 'complete';
		}
		return (
			<li className={`list-group-item d-flex justify-content-between align-items-center ${status}`}>
				<div className="d-flex justify-content-between align-items-center check-and-item-div">
					<i
						className="fas fa-check-circle"
						onClick={() => this.props.handleToggleStatusTodo(this.props.todo.id)}
					/>
					<input readOnly value={this.props.todo.value} />
				</div>
				<i
					className="fas fa-times remove-item"
					onClick={() => this.props.handleDeleteTodo(this.props.todo.id)}
				/>
			</li>
		);
	}
}

export default TodoListItem;
