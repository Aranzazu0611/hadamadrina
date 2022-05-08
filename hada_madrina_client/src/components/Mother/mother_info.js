import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Mother_info = (madre) => {
  const [name, setName] = useState();
  const [surnames, setSurnames] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [nationality, setNationality] = useState();
  const [mother_birth, setMother_birth] = useState();
  const [civil_status, setCivil_status] = useState("soltera");
  const id = madre.id;

  useEffect(() => {
    getMotherById(id);
  }, [id]);

  const getMotherById = async (id) => {
    await fetch(`http://localhost:3003/api/mother/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setName(result[0].name);
        setSurnames(result[0].surnames);
        setAge(result[0].age);
        setEmail(result[0].email);
        setPhone(result[0].phone);
        setAddress(result[0].address);
        setNationality(result[0].nationality);
        setMother_birth(result[0].mother_birth);
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
          <Link to={`/Register/Children/${id}`}>
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
              value={surnames}
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
              value={age}
            />
            <label for="" className="label">
              Edad:
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="email"
              className="input"
              placeholder="a"
              value={email}
            
              
            />
            <label className="label">Email</label>
          </div>

          <div className="inputContainer">
            <input
              type="tel"
              className="input"
              placeholder="Teléfono"
              value={phone}
              
              
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
             
            />
            <label className="label">Dirección</label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              value={nationality}
              placeholder="a"
              
            />
            <label for="" className="label">
              Nacionalidad:
            </label>
          </div>
          <div className="inputContainer">
            
            <input
              type="text"              
              className="input"
              placeholder="a"
              value={mother_birth}
             
            />
            <label className="label">Fecha de nacimiento:</label>
          </div>
          
          <div className="inputContainer">
            
          <input
              type="text"              
              className="input"
              placeholder="a"
              value={civil_status}
             
            />
              <label className="label">Estado civil:</label>
            </div>


          
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Mother_info;
