import search from '../services/search';

const ContactList = (props) => {

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