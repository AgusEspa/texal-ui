const Contact = (props) => {

	return (
		<li key={props.id}>
			{props.name}: {props.number}
			<button>delete</button>
		</li>
	);
}

export default Contact;