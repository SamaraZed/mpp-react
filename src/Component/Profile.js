import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div>
        <h3>
          <span>{this.props.user.username}</span>
          <span>{this.props.user.email}</span>
        </h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Profile);
