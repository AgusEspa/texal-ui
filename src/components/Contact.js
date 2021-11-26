import personService from '../services/persons';

const Contact = (props) => {

	const removePerson = () => {
		personService
			.remove(props.id)
	}

	return (
		<li>
			{props.name}: {props.number}
			<button
				onClick={removePerson}>
				delete
			</button>
		</li>
	);
}

export default Contact;