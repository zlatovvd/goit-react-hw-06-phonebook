export const deleteContacts = contactsId => {
  return {
    type: 'contacts/deleteContacts',
    payload: contactsId,
  };
};
