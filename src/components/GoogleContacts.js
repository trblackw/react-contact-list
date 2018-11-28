import React, { Component } from "react";
const API_KEY = "AIzaSyDZUuStMg8IGiJ2LJ0q4yDH2ytAkH-sdT0";
// react-contact-list-223918

export default class GoogleContacts extends Component {
  state = {
    gapiReady: false
  };
  loadGoogleContactsApi = () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
       const { client, load } = window.gapi;
      load("client", () => {
        client.setApiKey(API_KEY);
        load("youtube", "v3", () => {
          this.setState({ gapiReady: true }, () => console.log(this.state.gapiReady));
        });
      });
    };

    document.body.appendChild(script);
  };

  componentDidMount = () => {
    this.loadGoogleContactsApi();
  };

  render() {
     const { gapiReady } = this.state;
    return gapiReady && <h1>GAPI is loaded and ready to use.</h1>;
  }
}
