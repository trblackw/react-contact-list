import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Contacts} />
        <Route path="/add" component={AddContact} />
        <Route path="/:id" component={EditContact} />
      </Switch>
    </Router>
);

export default App;
