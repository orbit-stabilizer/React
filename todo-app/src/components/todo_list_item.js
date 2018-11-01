import React from 'react';

const TodoListItem = ({ todo, handleToggleStatusTodo, handleDeleteTodo }) => {
	let status = 'incomplete';
	if (todo.status === false) {
		status = 'complete';
	}

	return (
		<li className={`list-group-item d-flex justify-content-between align-items-center ${status}`}>
			<div className="d-flex justify-content-between align-items-center check-and-item-div">
				<i className="fas fa-check-circle fa-lg" onClick={() => handleToggleStatusTodo(todo.id)} />
				<input readOnly value={todo.value} />
			</div>
			<i className="fas fa-times remove-item fa-lg" onClick={() => handleDeleteTodo(todo.id)} />
		</li>
	);
};

export default TodoListItem;
