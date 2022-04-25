import React from "react";

export default function Register() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="container w-75 ">
          <form className="baby-login form-signin container_color rounded shadow">
            <h1 className="title-register">Register</h1>
            <label>Name</label>
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Insert Name here"
              required=""
              autoFocus=""
            />
            <label>Surname</label>
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Insert Name here"
              required=""
              autoFocus=""
            />
            <label>Email</label>
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
              placeholder="Insert Password here"
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
