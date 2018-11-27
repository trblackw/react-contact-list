import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import ContactsContextProvider from "./components/ContactsContextProvider";

const App = () => (
  <ContactsContextProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route path="/add" component={AddContact} />
        <Route path="/:id" component={EditContact} />
      </Switch>
    </Router>
  </ContactsContextProvider>
);

export default App;
