import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Mother_Update = () => {
  const [name, setName] = useState();
  const [surnames, setSurnames] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [nationality, setNationality] = useState();
  const [mother_birth, setMother_birth] = useState();
  const [civil_status, setCivil_status] = useState("soltera");

  const { id } = useParams();

  useEffect(() => {
    getMotherByID(id);
  }, [id]);

  const getMotherByID = async (id) => {
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

  const updateHygiene = async (credentials) => {
    return await fetch(`http://localhost:3003/api/mother/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => console.log(data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateHygiene({
        name,
        surnames,
        age,
        email,
        phone,
        address,
        nationality,
        mother_birth,
        civil_status
       
      }).then(() => {
        window.location.href = `/mother`;
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
            <h1 className="title-register">Actualizar</h1>
            <label>Nombre</label>
            <input
              type="text"
              id="Name"
              className="form-control"
              placeholder="Nombre"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label>Apellidos</label>
            <input
              type="text"
              id="Surnames"
              className="form-control"
              placeholder="Apellidos"
              value={surnames}
              required
              onChange={(e) => setSurnames(e.target.value)}
            />
            <input
              type="text"
              id="age"
              className="form-control"
              placeholder="Edad"
              value={age}
              required
              onChange={(e) => setAge(e.target.value)}
            />
            <label>Email</label>
            <input
              type="email"
              id="Email"
              className="form-control"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Teléfono</label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Teléfono"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Dirección</label>
            <input
              type="text"
              id="Address"
              className="form-control"
              placeholder="Dirección"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <label>Nacionalidad:</label>
            <input
              type="text"
              id="nationality"
              className="form-control"
              placeholder="Nacionalidad"
              value={nationality}
              required
              onChange={(e) => setNationality(e.target.value)}
            />
            <label>Fecha de Nacimiento:</label>
            <input
              type="date"
              id="birth"
              className="form-control"
              value={mother_birth}
              required
              onChange={(e) => setMother_birth(e.target.value)}
            />
            <div class="form-group">
              <label for="role">Seleccina estado civil:</label>
              <select
                class="form-control"
                id="role"
                value={civil_status}
                onChange={(e) => setCivil_status(e.target.value)}
              >
                <option>Soltera</option>
                <option>Casada</option>
                <option>Viuda</option>
                <option>Divorciada</option>
              </select>
            </div>

            <button className="btn btn-primary" type="submit">
              Actualizar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mother_Update;
