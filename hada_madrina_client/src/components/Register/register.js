import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error_Not_Register from "../Errors/error_not_register";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [surnames, setSurnames] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [volunteers_rol, setVolunteers_rol] = useState();
  const [error, setError] = useState();

  const registerUser = async (credentials) => {
    return await fetch("http://localhost:3003/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((response) => {
      if (response.status === 200) {
        navigate("/");
      }
      return response.json();
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({
        name,
        surnames,
        email,
        phone,
        address,
        password,
        volunteers_rol,
      })
        .then((result) => setError(result.message))
        
    } catch (error) {
      return error.message;
    }
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1 className="title">Registrate</h1>
          {error && <Error_Not_Register message={error}></Error_Not_Register>}
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              onChange={(e) => setName(e.target.value)}
            />
            <label for="" className="label">
              Nombre:
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              onChange={(e) => setSurnames(e.target.value)}
            />
            <label for="" className="label">
              Apellidos:
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="" className="label">
              Email:
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="tel"
              className="input"
              placeholder="a"
              onChange={(e) => setPhone(e.target.value)}
            />
            <label for="" className="label">
              Teléfono:
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              onChange={(e) => setAddress(e.target.value)}
            />
            <label for="" className="label">
              Dirección:
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="password"
              className="input"
              placeholder="a"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="" className="label">
              Password:
            </label>
          </div>
          <div className="inputContainer">
            <label for="role">Select Role:</label>
            <select
              class="form-control"
              id="role"
              value={volunteers_rol}
              onChange={(e) => setVolunteers_rol(e.target.value)}
            >
              <option>Administrativo</option>
              <option>Almacén-ropa</option>
              <option>Almacén-muebles</option>
              <option>Almacén-higiene y utensilios</option>
              <option>Almacén-comida</option>
            </select>
          </div>

          <input type="submit" className="submitBtn" value="Sign up" />
        </form>
      </div>
    </div>
  );
};

export default Register;
