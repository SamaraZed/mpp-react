import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import { signup } from "../redux/actions";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  render() {
    if (this.props.user) return <Redirect to="/" />;
    const errors = this.props.errors;
    const { username, first_name, last_name, email, password } = this.state;

    return (
      <div id="loginCard" className="card col-6 mx-auto p-0 mt-5">
        <div className="card-body">
          <h5 className="card-title mb-4">Register an account</h5>
          <form onSubmit={this.handleSubmit}>
            {!!errors.length && (
              <div className="alert alert-danger" role="alert">
                {errors.map((error) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            )}

            <div className="col-6 mx-auto">
              <div className="card my-5">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      name="username"
                      placeholder="Username"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      value={first_name}
                      name="first_name"
                      placeholder="Name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      value={last_name}
                      name="last_name"
                      placeholder="Surename"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      name="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Signup
                  </button>
                  <Link to="/login" className="btn btn-link my-2 my-sm-0">
                    I already have an account
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (userData, history) => dispatch(signup(userData, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
