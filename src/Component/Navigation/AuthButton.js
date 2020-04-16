import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logout from "../Logout";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUserPlus,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const AuthButton = ({ user }) => {
  let buttons = [
    <li key="loginButton" className="nav-item">
      <Link to="/login" className="nav-link">
        <FontAwesomeIcon icon={faSignInAlt} /> Login
      </Link>
    </li>,
    <li key="registerButton" className="nav-item">
      <Link to="/register" className="nav-link">
        <FontAwesomeIcon icon={faUserPlus} /> Signup
      </Link>
    </li>,
  ];

  if (user) {
    buttons = (
      <>
        <span className="navbar-text">{user.username}</span>

        <Link to="/profile" className="nav-link">
          <button className="btn btn-sm ">
            <FontAwesomeIcon icon={faUser} />
          </button>
        </Link>

        <Link to="/cart" className="nav-link">
          <button className="btn btn-sm ">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </Link>

        <Logout />
      </>
    );
  }

  return <ul className="navbar-nav ml-auto">{buttons}</ul>;
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(AuthButton);
