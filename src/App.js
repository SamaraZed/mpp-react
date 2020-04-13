import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

//Component
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import ItemsList from "./Component/ItemsList";
import ItemDetail from "./Component/ItemDetail";

function App() {
  return (
    <Switch>
      <Route exact path="/items/:itemID" component={ItemDetail} />
      <Route path="/items" component={ItemsList} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Signup} />
      <Redirect exact from="/" to="/items" />
    </Switch>
  );
}

export default App;
