import React from 'react';

const SearchBar = ({ onFormSubmit, onTermChange, term }) => {
	return (
		<form onSubmit={(event) => onFormSubmit(event)}>
			<div className="form-group">
				<input
					className="form-control"
					onChange={(event) => onTermChange(event.target.value)}
					placeholder="Enter IP Address"
					value={term}
				/>
				<button className="btn btn-primary btn-block mt-3" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
