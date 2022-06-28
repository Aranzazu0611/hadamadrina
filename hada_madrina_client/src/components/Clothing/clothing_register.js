import React, { useState } from "react";
import { Link} from "react-router-dom";
import { register_Clothing_Url, route_clothing_info } from "../../utils/url";
import useApiRegister from "../Custom/useApiRegister";
import ErrorNotRegister from "../Errors/error_not_register";


const Clothing_Register = () => {
  const {register, error} = useApiRegister(register_Clothing_Url, route_clothing_info);
  const [clothing_category, setClothing_category] = useState("");
  const [description, setDescription] = useState("");
  const [colour, setColour] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [clothing_entry_date, setClothing_entry_date] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({
        clothing_category,
        description,
        colour,
        size,
        gender,
        age,
        clothing_entry_date
        
      });
    } catch (error) {
      return error.message;
    }
  };
 

  
  
  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
        <Link to={route_clothing_info}>
          <button className="btn btn-primary d-inline">Ir a Ropa</button>
        </Link>
          <h1 className="title">Ropa:</h1>
          {error && <ErrorNotRegister message={error}></ErrorNotRegister>}
          <div className="inputContainer">
            <input
              type="text"              
              className="input"
              placeholder="a"
              value={clothing_category}
              required
              onChange={(e) => setClothing_category(e.target.value)}
            />
            <label className="label">Categoria:</label>
          </div>

          <div className="inputContainer">
            
            <input
              type="text"
             
              className="input"
              placeholder="a"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="label">Descripción:</label>
          </div>

          <div className="inputContainer">
            <input
              type="text"
             
              className="input"
              placeholder="a"
              value={colour}
              required
              onChange={(e) => setColour(e.target.value)}
            />
            <label className="label">Color:</label>
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
            <label htmlFor="state">Genero:</label>
            <select
              className="form-control"
             
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Niño</option>
              <option>Niña</option>
            </select>
          </div>

          <div className="inputContainer">
            <label htmlFor="state">Selecciona Talla:</label>
            <select
              className="form-control"
             
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option>Bebe - 0 - 3 mes</option>
              <option>Bebe - 3 - 6 mes</option>
              <option>Bebe - 6 - 12 mes</option>
              <option>Bebe - 12 - 24 mes</option>
              <option>Niño - 2 - 3 años</option>
              <option>Niño - 3 - 4 años</option>
              <option>Niño - 5 - 6 años</option>
              <option>Niño - 6 - 8 años</option>
              <option>Niño - 8 - 12 años</option>
            </select>
          </div>
          <div className="inputContainer">
            <input
              type="date"             
              className="input"
              placeholder="a"
              value={clothing_entry_date}
              required
              onChange={(e) => setClothing_entry_date(e.target.value)}
            />
            <label className="label">Fecha de entrada:</label>
          </div>

          <input type="submit" className="submitBtn" value="Registrar" />
        </form>
       
      </div>
    </div>
  );
};

export default Clothing_Register;
