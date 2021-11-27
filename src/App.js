import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import ContactList from './components/ContactList';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [contactName, setContactName] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      });
  }, []);

  const updatePerson = () => {
    const personId = persons[persons.findIndex(person => person.name === newName)].id;
    const personObject = {
      name: newName,
      number: newNumber,
    }
    personService
      .change(personId, personObject)
      .then((returnedPerson) => {
        setPersons(
          persons
            .filter(person => 
              persons.indexOf(person) !== persons.findIndex(person => person.name === newName && person.number !== newNumber))
            .concat(returnedPerson));
      });
  }

  const addPerson = (event) => {
		event.preventDefault();
	
		if (persons.map(person => person.name).includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook. Do you want to change the number?`)) {
        updatePerson(newName);
        setNewName('');
        setNewNumber('');
      } else {
        setNewName('');
      }
		} else {
		  const personObject = {
			  name: newName,
			  number: newNumber,
		  }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson));
          setNewName('');
          setNewNumber('');
      });
		}
	}

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleContactNameChange = (event) => {
    setContactName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>

      <h2>Phonebook</h2>

      <h3>Add new contact</h3>
      <PersonForm 
        function={addPerson} 
        name={newName} 
        nameHandler={handleNameChange}
        number={newNumber}
        numberHandler={handleNumberChange}
      />
      
      <h3>Contacts</h3>
      <ContactList 
        action={setContactName}
        name={contactName}
        nameHandler={handleContactNameChange}
        persons={persons}
        setPersons={setPersons}
      />

    </div>
  );
}

export default App;