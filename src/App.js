import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

//Component
import Footer from "./Component/Footer";
import NavBar from "./Component/Navigation/NavBar";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import ItemsList from "./Component/ItemsList";
import Profile from "./Component/Profile";

function App() {
  return (
    <div style={{ background: "rgba(255, 255, 255, 0)" }}>
      <NavBar />
      <Switch>
        <Route path="/clotheslist" component={ItemsList} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route path="/profile" component={Profile} />

        <Redirect exact from="/" to="/clotheslist" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
