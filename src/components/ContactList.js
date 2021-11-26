import Contact from "./Contact";

const ContactList = (props) => {

	const search = (nameToSearch, persons) => {
		if (nameToSearch === '') {
		  return (
			persons.map(person =>
				<Contact id={person.id} name={person.name} number={person.number} />)
		  );
		} else {
		  return (
			persons
			.filter(person => person.name.toLowerCase().startsWith(nameToSearch.toLowerCase()))
			.map(person =>
				<Contact id={person.id} name={person.name} number={person.number} />)
		  );
		}
	  }

	return (
		<div>
			<form onSubmit={props.action}> 
				<div>Search by name: <input 
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