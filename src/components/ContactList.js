import React from 'react';
import Contact from "./Contact";

const ContactList = (props) => {

	const sortFuncion = (a, b) => {
		let fa = a.name.toLowerCase(),
		fb = b.name.toLowerCase();
		if (fa < fb) return -1;
		if (fa > fb) return 1;
		return 0;
	}

	const search = (nameToSearch, persons) => {
		if (nameToSearch === '') {
		  return (
			persons
				.sort(sortFuncion)
				.map(person =>
					<Contact key={person.id} id={person.id} name={person.name} number={person.number} persons={props.persons} setPersons={props.setPersons} setMessage={props.setMessage} />)
		  );
		} else {
		  return (
			persons
				.filter(person => person.name.toLowerCase().startsWith(nameToSearch.toLowerCase()))
				.sort(sortFuncion)
				.map(person =>
					<Contact key={person.id} id={person.id} name={person.name} number={person.number} persons={props.persons} setPersons={props.setPersons} setMessage={props.setMessage} />)
		  );
		}
	  }

	return (
		<div>
			<form onSubmit={props.action}> 
				<div>
				<span>Search by name: </span>
					<input 
						value={props.name}
						onChange={props.nameHandler} />
				</div>
			</form>

			<ul>
				{props.name !== '' ? search(props.name, props.persons) : search('', props.persons)}
			</ul>
		</div>
	)
}

export default ContactList;