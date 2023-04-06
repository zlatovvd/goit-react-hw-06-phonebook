import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContacts } from 'redux/actions';

const getFilteredContacts = (contacts, filter = '') => {
  console.log('contacts', contacts);
  console.log('filter', filter);
  return contacts.filter(elem =>
    elem.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);
  const dispatch = useDispatch();

  const handleDelete = contactsId => {
    dispatch(deleteContacts(contactsId));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
