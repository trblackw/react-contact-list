import { formatter } from "./helpers";
export const FETCH_CONTACTS = "FETCH_CONTACTS";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const ADD_CONTACT = "ADD_CONTACT";

export const fetchContacts = () => {
  return async dispatch => {
    try {
      const randomPeopleRes = await fetch(
        "https://randomuser.me/api/?page=5&results=21&seed=abc"
      ).then(data => data.json());
      const { results: randomPeople } = randomPeopleRes;
      //format contacts received from api to fit structure of components (implemented after components were made)
      return dispatch({
        type: FETCH_CONTACTS,
        contacts: formatter(randomPeople)
      });
    } catch (error) {
      console.error(`ERROR IN ACTIONS ${error}`);
    }
  };
};

export const addContact = (contacts, contactToAdd) => ({
  type: ADD_CONTACT,
  contacts: contacts.concat(contactToAdd)
});

export const editContact = (contacts, id) => {
  return dispatch => {
    const contactToEdit = contacts.find(contact => contact.id === Number(id));
    const updatedContacts = contacts.map(contact => {
      if (contact.id === contactToEdit.id) {
        contact = contactToEdit;
        return contact;
      } else {
        return contact;
      }
    });

    return dispatch({
      type: EDIT_CONTACT,
      contacts: updatedContacts
    });
  };
};

export const deleteContact = (contacts, id) => ({
  type: DELETE_CONTACT,
  contacts: contacts.filter(contact => contact.id !== id)
});
