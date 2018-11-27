import React, { Component } from "react";
import { Consumer } from "./ContactsContext";
import styled from "styled-components";
import ContactToEdit from "./ContactToEdit";

export default class EditContact extends Component {
  render() {
    const selectedID = this.props.match.params.id;
    return (
      <Consumer>
        {({ contacts, update }) => {
          const contact = contacts.find(cont => cont.id === Number(selectedID));
          return (
            contact !== undefined && (
              <ContactContainer className="drop-shadow">
                <ContactToEdit
                  id={Number(selectedID)}
                  name={contact.name}
                  email={contact.email}
                  image_url={contact.image_url}
                  phone_number={contact.phone_number}
                  update={update}
                />
              </ContactContainer>
            )
          );
        }}
      </Consumer>
    );
  }
}

const ContactContainer = styled.div`
  margin: 0 auto;
  padding: 1em;
  font-size: 1.5em;
  text-align: center;

  input {
    width: 90%;
  }
`;
