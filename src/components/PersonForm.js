const PersonForm = (props) => {

	return (
		<form onSubmit={props.function}>
			<div>
			Name: <input 
				value={props.name} 
				onChange={props.nameHandler} />
			</div>
			<div>
			Number: <input
				value={props.number}
				onChange={props.numberHandler} />
			</div>
			<div>
			<button type="submit">add</button>
			</div>
      </form>
	);
}

export default PersonForm;
