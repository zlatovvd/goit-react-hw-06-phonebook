import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

const CONTACTS = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) || CONTACTS);
  const [filter, setFilter] = useState('');

  const onSubmit = ({ name, number }) => {
    let isSubmit = false;

    if (
      !contacts.some(value =>
        value.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevState => [contact, ...prevState]);
      isSubmit = true;
    } else {
      alert(`${name} is already in contacts.`);
    }
    return isSubmit;
  };


  const filterChange = event => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  useEffect(() => {
    if (contacts.length > 0) {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      window.localStorage.removeItem('contacts');
    }
  }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        paddingLeft: '40px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} filterChange={filterChange} />
      <ContactList />
    </div>
  );
};

export default App;
