import React, { Component } from "react";
import { Provider } from "./ContactsContext";

export default class ContactsContextProvider extends Component {
  state = {
    contacts: []
  };
  componentDidMount = () => {
    this.setState({
      contacts: this.dummyContacts
    });
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

  dummyContacts = [
    {
      id: 70219577,
      name: "Albert Einstein",
      image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKLxacs6mf33EYjU5tSXJJgx3byM7_Ut3UhED1mu7BNGOamBd3TTcToo",
      email: "aeinstein@example.com",
      phone_number: "15555555555"
    },
    {
      id: 21030349,
      name: "Alan Turing",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/220px-Alan_Turing_Aged_16.jpg",
      email: "turing@example.com",
      phone_number: "16666666666"
    },
    {
      id: 70384954,
      name: "Isaac Newton",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/220px-GodfreyKneller-IsaacNewton-1689.jpg",
      email: "newton@example.com",
      phone_number: "15588855555"
    },
    {
      id: 703832904,
      name: "Benjamin Franklin",
      image_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg/440px-Benjamin_Franklin_by_Joseph_Duplessis_1778.jpg",
      email: "franklin@example.com",
      phone_number: "15588855577"
    }
  ];

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
