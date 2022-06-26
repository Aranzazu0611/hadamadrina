import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format_date } from "../../utils/format_date";
import { get_By_Id_Mother_Url, route_register_children_screen } from "../../utils/url";

const MotherInfo = (madre) => {
  const [name, setName] = useState("");
  const [surnames, setSurnames] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [mother_birth, setMother_birth] = useState("");
  const [civil_status, setCivil_status] = useState("soltera");
  const id = madre.id;
  const url_By_Id = get_By_Id_Mother_Url + id;

  useEffect(() => {
    getMotherById();
  });

  const getMotherById = async () => {
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

  return (
    <>
      <nav>
        <div className="sidebar-button">
          <i className="bx bx-menu sidebarBtn"></i>
          <span className="dashboard">Info Madre</span>
        </div>

        <div>
          <Link to={`${route_register_children_screen}${id}`}>
            <button className="btn btn-primary d-inline ">Añadir Niño</button>
          </Link>
        </div>
      </nav>

      <div className="home-content">
        <div className="sales-boxes">
          <div className="recent-sales box">
            <h1>Datos de la madre:</h1>

            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={name}
                readOnly
              />
              <label className="label">Nombre:</label>
            </div>
            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={surnames}
                readOnly
              />
              <label className="label">Apellidos:</label>
            </div>
            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={age}
                readOnly
              />
              <label className="label">Edad:</label>
            </div>
            <div className="inputContainer">
              <input
                type="email"
                className="input"
                placeholder="a"
                value={email}
                readOnly
                
              />
              <label className="label">Email</label>
            </div>

            <div className="inputContainer">
              <input
                type="tel"
                className="input"
                placeholder="Teléfono"
                value={phone}
                readOnly
              />
              <label className="label">Teléfono</label>
            </div>
            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="Dirección"
                value={address}
                readOnly
              
              />
              <label className="label">Dirección</label>
            </div>
            <div className="inputContainer">
              <input
                type="text"
                className="input"
                value={nationality}
                placeholder="a"
                readOnly
              />
              <label className="label">Nacionalidad:</label>
            </div>
            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={mother_birth}
                readOnly
              />
              <label className="label">Fecha de nacimiento:</label>
            </div>

            <div className="inputContainer">
              <input
                type="text"
                className="input"
                placeholder="a"
                value={civil_status}
                readOnly
              />
              <label className="label">Estado civil:</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MotherInfo;
