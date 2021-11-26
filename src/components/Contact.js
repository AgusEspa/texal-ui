import personService from '../services/persons';

const Contact = (props) => {

	const removePerson = () => {
		personService
			.remove(props.id)
			.then(returnedPerson => {
				props.setPersons(props.persons.filter(person => person.id !== props.id))
			});
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