
const Contact = (props) => {

	return (
		<li>
			{props.name}: {props.number}
			<button
				onClick={props.function}>
				delete
			</button>
		</li>
	);
}

export default Contact;