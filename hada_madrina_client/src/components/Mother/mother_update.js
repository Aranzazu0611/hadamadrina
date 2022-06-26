import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { format_date } from "../../utils/format_date";
import {
  get_By_Id_Mother_Url,
  route_mother_screen,
  update_Mother_Url,
} from "../../utils/url";
import useApiUpdate from "../Custom/useApiUpdate";
import ErrorNotRegister from "../Errors/error_not_register";

const Mother_Update = () => {
  const { id } = useParams();
  const url_By_Id = get_By_Id_Mother_Url + id;
  const url_update = update_Mother_Url + id;
  const{update, error} = useApiUpdate(url_update, route_mother_screen);
  const [name, setName] = useState("");
  const [surnames, setSurnames] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [mother_birth, setMother_birth] = useState("");
  const [civil_status, setCivil_status] = useState("");
  

  useEffect(() => {
    getMotherByID();
  }, []);

  const getMotherByID = async () => {
    await fetch(url_By_Id)
      .then((res) => res.json())
      .then((result) => {
        setName(result[0].name);
        setSurnames(result[0].surnames);
        setAge(result[0].age);
        setEmail(result[0].email);
        setPhone(result[0].phone);
        setAddress(result[0].address);
        setNationality(result[0].nationality);
        setMother_birth(format_date(result[0].mother_birth));
        setCivil_status(result[0].civil_status);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      await update( {
        name,
        surnames,
        age,
        email,
        phone,
        address,
        nationality,
        mother_birth,
        civil_status,
      });
    } catch (error) {
      return error.message;
    }
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="title-register">Madre</h1>
          {error && <ErrorNotRegister message={error}></ErrorNotRegister>}
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label className="label">Nombre</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              id="Surnames"
              className="input"
              placeholder="Apellidos"
              value={surnames}
              required
              onChange={(e) => setSurnames(e.target.value)}
            />
            <label className="label">Apellidos</label>
          </div>

          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={age}
              required
              onChange={(e) => setAge(e.target.value)}
            />
            <label className="label">Edad:</label>
          </div>
          <div className="inputContainer">
            <input
              type="email"
              className="input"
              placeholder="a"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label">Email</label>
          </div>

          <div className="inputContainer">
            <input
              type="tel"
              className="input"
              placeholder="Teléfono"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <label className="label">Teléfono</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="Dirección"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <label className="label">Dirección</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              value={nationality}
              placeholder="a"
              onChange={(e) => setNationality(e.target.value)}
            />
            <label className="label">Nacionalidad:</label>
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
            <select
              className="input"
              id="role"
              value={civil_status}
              onChange={(e) => setCivil_status(e.target.value)}
            >
              <option>Soltera</option>
              <option>Casada</option>
              <option>Viuda</option>
              <option>Divorciada</option>
            </select>
            <label className="label">Estado civil:</label>
          </div>

          <button className="btn btn-primary" type="Modificar">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mother_Update;
