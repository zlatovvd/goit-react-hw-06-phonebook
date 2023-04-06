import { combineReducers } from 'redux';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
//filter: '',

export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/deleteContacts':
      return state.filter(contact => contact.id !== action.payload);
    default:
      return state;
  }
};

const filterReducer = (state = '', action) => {
  return '';
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});