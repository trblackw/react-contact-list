import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Contact from "./Contact";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchContacts } from "../actions";

class Contacts extends Component {
  componentDidMount = () => {
    const { fetchContacts } = this.props;
    fetchContacts();
  };

  render() {
    const { contacts } = this.props;
    return (
      <ContactsContainer>
        <ContactsHeader>
          <h1>Contacts</h1>
        </ContactsHeader>

        <Link to="/add">
          <Button>Add contact</Button>
        </Link>

        <div id="contacts">
          {contacts.map(contact => (
            <Contact
              key={contact.id}
              name={contact.name}
              email={contact.email}
              img={contact.image_url}
              number={contact.phone_number}
              id={contact.id}
              location={contact.location}
            />
          ))}
        </div>
      </ContactsContainer>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.reducer.contacts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchContacts }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);

const ContactsContainer = styled.div`
  margin: 0 auto;
  color: whitesmoke;
  padding: 1.5em;
  background: #282c34;
  #contacts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactsHeader = styled.div`
  margin: 1.5em auto;
  text-align: center;
`;

export const Button = styled.button`
  background: lightslategray;
  color: whitesmoke;
  padding: 0.7em;
  width: 15%;
  border: none;
  border-radius: 2px;
  display: block;
  margin: 1em auto;
  &:hover {
    background: hsl(0, 100%, 71%);
    color: whitesmoke;
    cursor: pointer;
  }
`;
