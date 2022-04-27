import React from "react";

export default function Register() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="container w-75 ">
          <form className="baby-login form-signin container_color rounded shadow">
            <h1 className="title-register">Register</h1>
            <label>Nombre</label>
            <input
              type="text"
              id="Name"
              className="form-control"
              placeholder="Inserte su nombre"
              required
              
            />
            <label>Apellidos</label>
            <input
              type="text"
              id="Surnames"
              className="form-control"
              placeholder="Inserte sus apellidos"
              required
              
            />
            <label>Email</label>
            <input
              type="email"
              id="Email"
              className="form-control"
              placeholder="Email"
              required
              
            />
             <label>Email</label>
            <input
              type="email"
              id="Email"
              className="form-control"
              placeholder="Email"
              required
              
            />
            <label>Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Insert Password here"
              required=""
            />
            <div class="form-group">
              <label for="sel1">Select list:</label>
              <select class="form-control" id="sel1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <button className="btn btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
