import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { message_not_register } from "../../utils/format_date";
import { get_User_Url, route_user, update_User_Url } from "../../utils/url";
import useApiUpdate from "../Custom/useApiUpdate";
import ErrorNotRegister from "../Errors/error_not_register";

const User_Update = () => {
  const { id } = useParams();
  const url_By_Id = get_User_Url + id;
  const url_update = update_User_Url + id;
  const updateUser = useApiUpdate(url_update, route_user);
  const [name, setName] = useState("");
  const [surnames, setSurnames] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [volunteers_rol, setVolunteers_rol] = useState("");
  const [error] = useState("");

  const info_user = {
    name,
    surnames,
    email,
    phone,
    address,
    password,
    volunteers_rol,
  }

  

  useEffect(() => {
    getUserByID();
  }, []);

  const getUserByID = async () => {
    await fetch(url_By_Id)
      .then((res) => res.json())
      .then((result) => {
        setName(result[0].name);
        setSurnames(result[0].surnames);
        setEmail(result[0].email);
        setPhone(result[0].phone);
        setPassword(result[0].password);
        setAddress(result[0].address);
        setVolunteers_rol(result[0].volunteers_rol);
      });
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(info_user)
    } catch (error) {
      return error.message;
    }
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1 className="title">Modificar</h1>
          {error && <ErrorNotRegister message={message_not_register}></ErrorNotRegister>}
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={name}
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
              value={surnames}
              onChange={(e) => setSurnames(e.target.value)}
            />
            <label className="label">
              Apellidos:
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label">
              Email:
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="tel"
              className="input"
              placeholder="a"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label className="label">
              Teléfono:
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label className="label">
              Dirección:
            </label>
          </div>
          <div className="inputContainer">
            <input
              type="password"
              className="input"
              placeholder="a"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">
              Password:
            </label>
          </div>
          <div className="inputContainer">
            <label htmlFor="role">Select Role:</label>
            <select
              className="form-control"
              id="role"
              value={volunteers_rol}
              onChange={(e) => setVolunteers_rol(e.target.value)}
            >
              <option>Administrativo</option>
              <option>Almacén-Ropa</option>
              <option>Almacén-Muebles</option>
              <option>Almacén-Higiene</option>
              <option>Almacén-Comida</option>
              <option>Admin</option>
            </select>
          </div>

          <input type="submit" className="submitBtn" value="Actualizar" />
        </form>
      </div>
    </div>
  );
};

export default User_Update;
