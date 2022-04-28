import React, { useState } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loginUser = async(credentials) => {
    return await fetch("http://localhost:3003/api/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({
        email,
        password,
      }).then((data) => {
       
        if (data.length !== 0) {
          localStorage.setItem("name", JSON.stringify(data[0].name));
          localStorage.setItem("email", JSON.stringify(data[0].email));
          localStorage.setItem("volunteer", JSON.stringify(data[0].volunteer_role));
          window.location.href = "/user";
          
        }else{
          alert("Credenciales incorrectas")
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (    
    <div className="App">
      <div className="App-header">
        <div className="container w-75 ">
          <form
            className="baby-login form-signin container_color rounded shadow"
            onSubmit={handleSubmit}
          >
            <h1 className="title-login">ONG Hada Madrina - Login</h1>

            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </div>
        <a href="/register">Si no estas regisrado, haz click</a>
      </div>
    </div>
  );
};

export default Login;
