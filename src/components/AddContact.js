import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "./Contacts";
import { Link } from "react-router-dom";
import { Consumer } from "./ContactsContext";
import Icon from "./elements/Icon";

export default class AddContact extends Component {
  state = {
    id: Math.round(Math.random() * 100000000),
    name: "",
    email: "",
    phone_number: "",
    image_url: "",
    contactAdded: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.contactForm.reset();
  };

  isValidEmail = email => {
    if (!/^[^@]+@[^@.]+\.[a-z]+$/i.test(email)) {
      alert("please enter a valid email");
    }
  };

  formatNumber = number => {
    const formattedNumber = number.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );
    this.number.value = formattedNumber;
  };

  addContact = () =>
    !this.state.contactAdded ? this.setState({ contactAdded: true }) : null;

  useDefaultImg = e => {
    e.preventDefault();
    //neil degrasse tyson
    this.setState(
      {
        image_url:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Neil_deGrasse_Tyson_in_June_2017_%28cropped%29.jpg/200px-Neil_deGrasse_Tyson_in_June_2017_%28cropped%29.jpg"
      },
      () => {
        console.log(this.state);
        this.image.defaultValue = this.state.image_url;
      }
    );
  };

  handleName = e => this.setState({ name: e.target.value });
  handleEmail = e => this.setState({ email: e.target.value });
  handleNumber = e => this.setState({ phone_number: e.target.value });
  handleImage = e => this.setState({ image_url: e.target.value });

  render() {
    return (
      <Consumer>
        {({ add }) => (
          <ContactForm
            onSubmit={e => this.handleSubmit(e)}
            ref={contactForm => (this.contactForm = contactForm)}
          >
            <h1>New Contact</h1>
            <Link to="/" style={{ position: "absolute", top: 40 }}>
              <Icon name="back" color="black" />
            </Link>
            <hr />
            <div id="form-add">
              <label htmlFor="name">Contact Name</label>
              <input
                type="text"
                placeholder="name"
                onChange={this.handleName}
              />
              <label htmlFor="email">Contact Email</label>
              <input
                type="email"
                placeholder="email"
                onChange={this.handleEmail}
                onBlur={() => this.isValidEmail(this.state.email)}
              />
              <label htmlFor="number">Contact Number</label>
              <input
                type="text"
                placeholder="number"
                onChange={this.handleNumber}
                ref={number => (this.number = number)}
                onBlur={() => this.formatNumber(this.number.value)}
              />
              <label htmlFor="image">Contact Image</label>
              <button id="default-img" onClick={this.useDefaultImg}>
                use default image
              </button>
              <input
                type="text"
                placeholder="image"
                onChange={this.handleImage}
                ref={image => (this.image = image)}
              />
            </div>
            <div className="button-group" style={{ textAlign: "center" }}>
              <ContactButton
                type="submit"
                color="lightblue"
                onClick={() => {
                  this.addContact();
                  add(this.state);
                }}
              >
                Add
              </ContactButton>
              {this.state.contactAdded && (
                <ContactButton color="lightgreen">
                  <Link to="/">Return to contacts</Link>
                </ContactButton>
              )}
            </div>
          </ContactForm>
        )}
      </Consumer>
    );
  }
}

export const ContactForm = styled.form`
  margin: 1.5em auto;
  padding: 1em;
  border: 2px solid black;
  border-radius: 5px;
  background: whitesmoke;
  color: black;
  width: 50%;
  justify-content: center;

  svg {
    margin-top: 10px;
    &:hover {
      cursor: default;
    }
  }

  h1 {
    text-align: center;
  }

  #form-add,
  #form-edit {
    margin: 0 auto;
    justify-content: center;
    padding: 0 1em;
  }

  #form-add label {
    margin-left: 1.8em;
  }

  input {
    display: block;
    margin: 1.5em auto;
    padding: 0.5em;
    width: 80%;
  }

  #default-img {
    width: auto;
    padding: 0.4em;
    background: lightgreen;
    border-radius: 4px;
    margin-left: 6px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const ContactButton = styled.button`
  width: 120px;
  display: inline-block;
  margin: 0 1em;
  background: ${props => props.color};
  padding: 0.5em;
  border-radius: 4px;
  a {
    color: black;
  }
`;
