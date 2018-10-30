import React from 'react';

import TodoListItem from './todo_list_item';

const TodoList = ({ todos, handleDeleteTodo, handleToggleStatusTodo }) => {
	const todoItems = todos.map((todo) => (
		<TodoListItem
			handleDeleteTodo={handleDeleteTodo}
			handleToggleStatusTodo={handleToggleStatusTodo}
			key={todo.id}
			todo={todo}
		/>
	));
	return <ul className="list-group col-md-8 mx-auto">{todoItems}</ul>;
};

export default TodoList;
