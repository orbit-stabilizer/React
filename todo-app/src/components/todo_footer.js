import React from 'react';

const TodoFooter = ({ numTodos, showStatus, handleShowStatusChange, handleClearCompletedTodos }) => {
	let activeTodoMsg = '';
	if (numTodos === 1) {
		activeTodoMsg = '1 todo left';
	} else if (numTodos > 1) {
		activeTodoMsg = `${numTodos} todos left`;
	}

	return (
		<div className="row mt-3">
			<div className="d-flex justify-content-between col-md-8 mx-auto footer mx-3 align-items-center py-3">
				<span>{activeTodoMsg}</span>
				<div>
					<button
						className={`btn btn-outline-primary mr-3 ${showStatus}-items`}
						id="show-all-btn"
						onClick={() => handleShowStatusChange('all')}
					>
						All
					</button>
					<button
						className={`btn btn-outline-success mr-3 ${showStatus}-items`}
						id="show-active-btn"
						onClick={() => handleShowStatusChange('active')}
					>
						Active
					</button>
					<button
						className={`btn btn-outline-secondary ${showStatus}-items`}
						id="show-completed-btn"
						onClick={() => handleShowStatusChange('completed')}
					>
						Completed
					</button>
				</div>
				<button className="btn btn-outline-danger" onClick={() => handleClearCompletedTodos()}>
					Clear completed todos
				</button>
			</div>
		</div>
	);
};

export default TodoFooter;
