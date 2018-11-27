import React, { Component } from "react";
import { ContactForm } from "./AddContact";
import { ContactImageContainer } from "./Contact";
import { Button } from "./Contacts";
import { Link } from "react-router-dom";
import { reducer } from "../helpers";
import PropTypes from "prop-types";
import Icon from "./elements/Icon";

export default class ContactToEdit extends Component {
  state = {
    name: "",
    email: "",
    phone_number: "",
    image_url: ""
  };

  //maintain id
  static getDerivedStateFromProps = ({ id }) => ({ id });

  collectState = () => {
    const inputs = [...this.contactForm.querySelectorAll("input")];
    const { name, email, phone_number, image_url } = reducer(inputs);
    //reducer function returns update { key-value pairs } for edit contact form
    this.setState({ name, email, phone_number, image_url }, () =>
      this.props.update(this.state)
    );
  };

  render() {
    const { name, email, phone_number, image_url } = this.props;
    return (
      <ContactForm
        onSubmit={e => e.preventDefault()}
        ref={contactForm => (this.contactForm = contactForm)}
      >
        <h4>Editting {name}'s contact</h4>
        <ContactImageContainer>
          <img src={image_url} alt="contact" />
        </ContactImageContainer>
        <Icon name="edit" color="teal" />

        <div id="form-edit">
          <input type="text" name="name" defaultValue={name} autoFocus />
          <input type="email" name="email" defaultValue={email} />
          <input type="text" name="phone_number" defaultValue={phone_number} />
          <input type="text" name="image_url" defaultValue={image_url} />
          <Button
            style={{ width: "auto" }}
            type="button"
            onClick={this.collectState}
          >
            Finish editing
          </Button>
        </div>
        <Link to="/">
          <Button style={{ background: "teal", width: "auto" }}>
            Return to contacts
          </Button>
        </Link>
      </ContactForm>
    );
  }
}

ContactToEdit.propTypes = {
  name: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
