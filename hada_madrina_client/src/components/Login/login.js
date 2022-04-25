import React, { Component } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";

class Login extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <div className="container w-75 ">
          <form className="baby-login form-signin container_color rounded shadow">
            <h1 className="title-login">Login</h1>
            <label >Email</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email"
              required=""
              autoFocus=""
            />
            <label>Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required=""
            />
            <button className="btn btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
       </div>
     
    );
  }
}

export default Login;
