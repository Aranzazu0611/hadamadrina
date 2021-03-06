import React, { useState } from "react";
import { Link} from "react-router-dom";
import { register_Furniture_Url, route_furniture } from "../../utils/url";
import useApiRegister from "../Custom/useApiRegister";
import ErrorNotRegister from "../Errors/error_not_register";

const Furniture_Register = () => {
  
  const {register,error} = useApiRegister(register_Furniture_Url, route_furniture);
  const [furniture_category, setFurniture_category] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("Nuevo");
  const [furniture_entry_date, setFurniture_entry_date] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({
        furniture_category,
        description,
        state,
        furniture_entry_date,
      })
    } catch (error) {
      return error.message;
    }
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
      <Link to={route_furniture}>
          <button className="btn btn-primary d-inline">Volver a Muebles</button>
        </Link>
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1 className="title">Ropa:</h1>
          {error && <ErrorNotRegister message={error}></ErrorNotRegister>}
          <div className="inputContainer">
            <input
              type="text"
              id="category"
              className="input"
              placeholder="a"
              value={furniture_category}
              required
              onChange={(e) => setFurniture_category(e.target.value)}
            />
            <label className="label">Categoria:</label>
          </div>

          <div className="inputContainer">
            <input
              type="text"
              id="description"
              className="input"
              placeholder="a"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="label">Descripci??n:</label>
          </div>

          <div className="inputContainer">
            <label htmlFor="state">Estado:</label>
            <select
              className="form-control"
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option>Nuevo</option>
              <option>Usado</option>
            </select>
          </div>
          <div className="inputContainer">
            <input
              type="date"
              className="input"
              placeholder="a"
              value={furniture_entry_date}
              required
              onChange={(e) => setFurniture_entry_date(e.target.value)}
            />
            <label className="label">Fecha de entrada:</label>
          </div>

          <input type="submit" className="submitBtn" value="Registrar" />
        </form>
       
      </div>
    </div>
  );
};

export default Furniture_Register;
