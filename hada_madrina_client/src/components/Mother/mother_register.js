import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error_Not_Register from "../Errors/error_not_register";

const Mother_Register = () => {
  
  const navigate = useNavigate();
  const tiempoActual = Date.now();
  const hoy = new Date(tiempoActual);
  const mother_entry_date = hoy.toISOString().slice(0, 10);

  const [name, setName] = useState();
  const [surnames, setSurnames] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [nationality, setNationality] = useState();
  const [mother_birth, setMother_birth] = useState();
  const [civil_status, setCivil_status] = useState("soltera");
  const [error, setError] = useState();


  const registerMother = async (credentials) => {
    return await fetch("http://localhost:3003/api/mother/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((response) => {
      if (response.status === 200) {
        navigate("/mother");
      }
      return response.json();
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerMother({
        name,
        surnames,
        age,
        email,
        phone,
        address,
        nationality,
        mother_birth,
        civil_status,
        mother_entry_date,
      }).then((result) =>  setError(result.error))
    } catch (error) {
     return error;
    }
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1 className="title">Madres:</h1>
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
              onChange={(e) => setAge(e.target.value)}
            />
            <label for="" className="label">
              Edad:
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
              type="text"
              className="input"
              placeholder="a"
              onChange={(e) => setNationality(e.target.value)}
            />
            <label for="" className="label">
              Nacionalidad:
            </label>
          </div>
          <div className="inputContainer">
            
            <input
              type="date"
              id="hygiene_departure_date"
              className="input"
              placeholder="a"
              value={mother_birth}
              required
              onChange={(e) => setMother_birth(e.target.value)}
            />
            <label className="label">Fecha de nacimiento:</label>
          </div>
          <div className="inputContainer">
            
          <select class="input" id="role" value={civil_status}  onChange={(e) => setCivil_status(e.target.value)}>
                <option>Soltera</option>
                <option>Casada</option>
                <option>Viuda</option>
                <option>Divorciada</option>                                
              </select>
            <label className="label">Estado civil:</label>
          </div>

          <input type="submit" className="submitBtn" value="Sign up" />
        </form>
      </div>
    </div>
  );
};

export default Mother_Register;
