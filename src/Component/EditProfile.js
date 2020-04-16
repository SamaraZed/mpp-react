import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { editProfile, resetErrors } from "../redux/actions";

class EditProfile extends Component {
  state = {
    username: this.props.profile.user.username,
    first_name: "",
    last_name: "",
    email: "",
    phone: null,
    gender: null,
    age: null,
    image: null,
  };

  componentDidMount() {
    if (this.props.user) {
      const profile = this.props.profile;
      this.setState({
        first_name: profile.user.first_name,
        last_name: profile.user.last_name,
        email: profile.user.email,
        phone: profile.phone,
        gender: profile.gender,
        age: profile.age,
        image: profile.image,
      });
    }
  }

  genderStringSwap = (gender) => {
    if (gender === "Female") return "F";
    if (gender === "Male") return "M";
    return "";
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.props.editProfile(this.state, this.props.history);
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "gender") {
      this.setState({ gender: this.genderStringSwap(e.target.value) });
    }
  };

  render() {
    if (!this.props.user) return <Redirect to="/" />;

    return (
      <div
        id="update-profile"
        className="card col-6 mx-auto p-0"
        style={{ marginTop: "10%" }}
      >
        <form id="update-profile" onSubmit={this.submitHandler}>
          {!!this.props.errors.length && (
            <div className="alert alert-danger" role="alert">
              {this.props.errors.map((error) => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}

          <p>
            {" "}
            <b>First Name: </b> {this.props.profile.user.first_name}
          </p>
          <input
            className="form-control rounded-pill"
            placeholder={this.props.profile.user.first_name}
            onChange={this.changeHandler}
            name="first_name"
            value={this.state.first_name}
          />
          <br />
          <p>
            {" "}
            <b>Last Name: </b>
            {this.props.profile.user.last_name}
          </p>
          <input
            className="form-control rounded-pill"
            placeholder={this.props.profile.user.last_name}
            onChange={this.changeHandler}
            name="last_name"
            value={this.state.last_name}
          />
          <br />
          <p>
            {" "}
            <b>Email: </b> {this.props.profile.user.email}
          </p>
          <input
            className="form-control rounded-pill"
            placeholder={this.props.profile.user.email}
            onChange={this.changeHandler}
            name="email"
            type="email"
            value={this.state.email}
          />
          <br />
          <p>
            {" "}
            <b>Phone: </b> {this.props.profile.user.phone}
          </p>
          <input
            className="form-control rounded-pill"
            placeholder={this.props.profile.phone}
            onChange={this.changeHandler}
            name="phone"
            type="phone"
            value={this.state.phone}
          />
          <br />
          <div class="form-group rounded-pill">
            <label for="exampleFormControlSelect1">Gender:</label>
            <select
              name="gender"
              onChange={this.changeHandler}
              class="form-control"
              id="exampleFormControlSelect1"
            >
              <option>choose gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <br />
          <p>
            {" "}
            <b>Age: </b>
            {this.props.profile.age}
          </p>
          <input
            className="form-control rounded-pill"
            placeholder={this.props.profile.user.age}
            onChange={this.changeHandler}
            name="age"
            value={this.state.age}
          />
          <br />

          <input
            id="registerbtn"
            className="btn btn-primary btn-block"
            type="submit"
            value="Update Profile"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.profile.user,
  errors: state.errors.errors,
  profile: state.profile.profile,
});

const mapDispatchToProps = (dispatch) => {
  return {
    editProfile: (userDate, history) =>
      dispatch(editProfile(userDate, history)),
    resetErrors: () => dispatch(resetErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
