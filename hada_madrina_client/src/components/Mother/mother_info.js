import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

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
      <div className="container">
      <div className="row">
        <Link to={`/Register/Children/${id}`}>
          <button className="col-2 btn btn-primary d-inline ">
            Añadir Niño
          </button>
        </Link>
      </div>
        <h1>Datos de la madre:</h1>
        <h2>Nombre:{name}</h2>
        <p>Apellido: {surnames}</p>
        <p>Direccion: {address}</p>
        <p>Edad: {age}</p>
        <p>Email: {email}</p>
        <p>Teléfono: {phone}</p>
        <p>Nacionalidad: {nationality}</p>
        <p>Fecha de nacimiento: {mother_birth}</p>
        <p>Estado Civil: {civil_status}</p>
      </div>
      
    </>
  );
};

export default Mother_info;
