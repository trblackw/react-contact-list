import React, { Component } from "react";
import { Provider } from "./ContactsContext";
import { formatter } from "../helpers";

export default class ContactsContextProvider extends Component {
  state = {
    contacts: []
  };
  componentDidMount = async () => {
    const randomPeopleRes = await fetch(
      "https://randomuser.me/api/?page=5&results=21&seed=abc"
    ).then(data => data.json());
    const { results: randomPeople } = randomPeopleRes;
    //format contacts received from api to fit structure of components (implemented after components were made)
    this.setState({ contacts: formatter(randomPeople) });
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  addContact = contact => {
    this.setState(
      prevState => ({
        contacts: prevState.contacts.concat(contact)
      }),
      () => console.log(this.state.contacts)
    );
  };
  updateContact = editedContact => {
    const { contacts } = this.state;
    const contactToUpdate = contacts.find(
      contact => contact.id === Number(editedContact.id)
    );
    const updatedContacts = contacts.map(contact => {
      if (contact.id === contactToUpdate.id) {
        contact = editedContact;
        return contact;
      } else {
        return contact;
      }
    });

    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <Provider
        value={{
          contacts: this.state.contacts,
          remove: this.removeContact,
          add: this.addContact,
          update: this.updateContact
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
