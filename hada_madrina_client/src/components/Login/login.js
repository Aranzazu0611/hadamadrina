import React, { useState } from "react";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import useApiLogin from "../Custom/useApiLogin";
import { url_login } from "../../utils/url";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loginUser = useApiLogin(url_login); 

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({
        email,
        password,
      })
    } catch (error) {
      return error.message;
    }
  };

  return (
    <>
      <div className="signupFrm">
        <div className="wrapper">
          <form action="" className="form" onSubmit={handleSubmit}>
            <h1 className="title">Login</h1>

            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">Email</label>
            </div>

            <div className="inputContainer">
              <input
                type="password"
                className="input"
                placeholder="a"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">Password</label>
            </div>

            <input type="submit" className="submitBtn" value="Sign up" />
          </form>
          <input
            type="submit"
            className="submitBtn"
            value="Registrate"
            onClick={() => navigate("/register")}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
