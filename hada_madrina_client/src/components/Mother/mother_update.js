import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format_date } from "../../format_date";
import Error_Not_Register from "../Errors/error_not_register";

const Mother_Update = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surnames, setSurnames] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [mother_birth, setMother_birth] = useState("");
  const [civil_status, setCivil_status] = useState("");
  const [error, setError] = useState();

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
        setMother_birth(format_date(result[0].mother_birth));
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
    }).then((response) => {
      if (response.status === 200) {
        navigate("/mother");
      }
      return response.json();
    })
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
        civil_status,
      }).then((result) =>  setError(result.error))
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="title-register">Actualizar</h1>
          {error && <Error_Not_Register message={error}></Error_Not_Register>}
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
            <label  className="label">
              Edad:
            </label>
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

          <button className="btn btn-primary" type="submit">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mother_Update;
