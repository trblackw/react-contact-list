import React, { Component } from "react";
import styled from "styled-components";
import ContactToEdit from "./ContactToEdit";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { editContact } from "../actions";

class EditContact extends Component {
  render() {
    const { contacts, editContact } = this.props;
    const selectedID = this.props.match.params.id;
    const contact = contacts.find(cont => cont.id === Number(selectedID));

    return (
      contact !== undefined && (
        <ContactContainer className="drop-shadow">
          <ContactToEdit
            {...contact}
            id={Number(selectedID)}
            edit={editContact}
            contacts={contacts}
          />
        </ContactContainer>
      )
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.reducer.contacts
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ editContact }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditContact);

const ContactContainer = styled.div`
  margin: 0 auto;
  padding: 1em;
  font-size: 1.5em;
  text-align: center;

  input {
    width: 90%;
  }
`;
