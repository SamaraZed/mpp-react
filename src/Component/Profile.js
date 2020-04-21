import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

class Profile extends Component {
  genderString = (gender) => {
    if (gender === "F") return "Female";
    if (gender === "M") return "Male";
    return "";
  };

  render() {
    if (!this.props.user) return <Redirect to="/" />;

    return (
      <div className="card col-6 mx-auto p-0" style={{ marginTop: "10%" }}>
        <section id="overlay" className="single-section">
          <h1 id="my-cart" className="mt-5" style={{ fontSize: "3em" }}>
            My Profile
          </h1>
        </section>
        <div className="jumbotron">
          <img
            style={{ height: 100, width: 100 }}
            src={this.props.profile.image}
            alt={this.props.profile.user.first_name}
          />
          <p> Username: {this.props.profile.user.username}</p>
          <p> First Name: {this.props.profile.user.first_name} </p>
          <p> Last Name: {this.props.profile.user.last_name} </p>
          <p> Email: {this.props.profile.user.email} </p>
          <p> Gender: {this.genderString(this.props.profile.gender)} </p>
          <p> Age: {this.props.profile.age} </p>
          <p> Phone: {this.props.profile.phone} </p>
        </div>
        <br />
        <Link to="/editprofile">
          <button className="btn rounded-pill btn-outline-secondary">
            Edit Profile
          </button>
        </Link>
        <Link to="/order">
          <button className="btn rounded-pill btn-outline-secondary">
            prev orders
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.profile.user,
  profile: state.profile.profile,
});

export default connect(mapStateToProps)(Profile);
