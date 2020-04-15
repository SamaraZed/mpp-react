import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import { Link, Redirect } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <div>
        <h3>
          <br />
          <br />
          <span>{this.props.user.username}</span>
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
