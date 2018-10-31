import React, { Component } from 'react';

export default class TodoFooter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="row mt-3">
				<div className="d-flex justify-content-between col-md-8 mx-auto footer mx-3 align-items-center py-3">
					<span>{this.props.numTodos} todo(s) left</span>
					<div>
						<button
							className={`btn btn-outline-primary mr-3 ${this.props.showStatus}-items`}
							id="show-all-btn"
							onClick={() => this.props.handleShowStatusChange('all')}
						>
							All
						</button>
						<button
							className={`btn btn-outline-success mr-3 ${this.props.showStatus}-items`}
							id="show-active-btn"
							onClick={() => this.props.handleShowStatusChange('active')}
						>
							Active
						</button>
						<button
							className={`btn btn-outline-secondary ${this.props.showStatus}-items`}
							id="show-completed-btn"
							onClick={() => this.props.handleShowStatusChange('completed')}
						>
							Completed
						</button>
					</div>
					<button className="btn btn-outline-danger" onClick={() => this.props.handleClearCompletedTodos()}>
						Clear completed todos
					</button>
				</div>
			</div>
		);
	}
}
