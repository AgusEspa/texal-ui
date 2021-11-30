import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import ContactList from './components/ContactList';
import personService from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [contactName, setContactName] = useState('');
  const [message, setMessage] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        setMessage("Can't retrive contacts from database");
        setTimeout(() => {
          setMessage(null)
        }, 5000);
      })
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
            .concat(returnedPerson))
      })
      .catch(error => {
        setMessage(`Error updating ${newName}`);
        setTimeout(() => {
          setMessage(null)
        }, 3000);
        setPersons(persons.filter(person => person.name !== newName));
      });
  }

  const addPerson = (event) => {
		event.preventDefault();
	
		if (persons.map(person => person.name).includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook. Do you want to change the number?`)) {
        updatePerson();
        setMessage(`${newName} was updated successfully`);
        setTimeout(() => {
          setMessage(null)
        }, 3000);
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
          setMessage(`${newName} was added successfully`);
          setTimeout(() => {
            setMessage(null)
          }, 3000);
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

      <Notification message={message} />

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
        setMessage={setMessage}
      />

    </div>
  );
}

export default App;