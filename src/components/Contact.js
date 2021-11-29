import React from 'react';
import personService from '../services/persons';

const Contact = (props) => {

	const removePerson = () => {
		personService
			.remove(props.id)
			.then(() => {
				props.setPersons(props.persons.filter(person => person.id !== props.id));
				props.setMessage(`${props.name} was removed successfully`);
				setTimeout(() => {
					props.setMessage(null)
				}, 3000);
			})
			.catch (error => {
				props.setMessage(`${props.name} is already deleted`);
				setTimeout(() => {
          			props.setMessage(null)
        			}, 3000);
				props.setPersons(props.persons.filter(person => person.id !== props.id));
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