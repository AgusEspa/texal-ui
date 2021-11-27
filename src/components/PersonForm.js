import React from 'react';

const PersonForm = (props) => {

	return (
		<form onSubmit={props.function}>
			<div>
			<span>Name: </span>
				<input 
					value={props.name} 
					onChange={props.nameHandler} />
			</div>
			<div>
			<span>Number: </span>
				<input
					value={props.number}
					onChange={props.numberHandler} />
				<button type="submit">add</button>
			</div>
      	</form>
	);

}

export default PersonForm;
