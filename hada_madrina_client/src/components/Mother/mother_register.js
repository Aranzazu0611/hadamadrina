import React, { useState } from "react";
import { register_Mother_Url, route_mother_screen } from "../../utils/url";
import useApiRegister from "../Custom/useApiRegister";
import Error_Not_Register from "../Errors/error_not_register";

const Mother_Register = () => {    
  const registerMother = useApiRegister(register_Mother_Url, route_mother_screen)
  const tiempoActual = Date.now();
  const hoy = new Date(tiempoActual);
  const mother_entry_date = hoy.toISOString().slice(0, 10);

  const [name, setName] = useState("");
  const [surnames, setSurnames] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [mother_birth, setMother_birth] = useState("");
  const [civil_status, setCivil_status] = useState("soltera");
  const [error] = useState("");

  const info_register = {
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
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {     
      await registerMother(info_register)
    } catch (error) {
     return error.message;
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
            <label  className="label">
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
            <label  className="label">
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
            <label  className="label">
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
            <label  className="label">
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
            <label  className="label">
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
            <label  className="label">
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
            <label  className="label">
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
            
          <select className="input" id="role" value={civil_status}  onChange={(e) => setCivil_status(e.target.value)}>
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
