
const search = (nameToSearch, persons) => {
    if (nameToSearch === '') {
      return (
        persons.map(person =>
          <li key={person.id}>{person.name}: {person.number}</li>)
      );
    } else {
      return (
        persons
        .filter(person => person.name.toLowerCase().startsWith(nameToSearch.toLowerCase()))
        .map(person =>
          <li key={person.id}>{person.name}: {person.number}</li>)
      );
    }
  }

  export default search;