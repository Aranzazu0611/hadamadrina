import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format_date } from "../../format_date";
import ErrorNotRegister from "../Errors/error_not_register";


const Furniture_Update = () => {
  const navigate = useNavigate()
  
  const [furniture_category, setFurniture_category] = useState();
  const [description, setDescription] = useState();
  const [state, setState] = useState("Nuevo");
  const [furniture_entry_date, setFurniture_entry_date] = useState();
  const [furniture_departure_date, setFurniture_departure_date] = useState();
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect(() => {
    getFurnitureByID(id);
  }, [id]);

  const getFurnitureByID = async (id) => {
    await fetch(`http://localhost:3003/api/furniture/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setFurniture_category(result[0].furniture_category);
        setDescription(result[0].description);
        setState(result[0].state);
        setFurniture_entry_date(format_date(result[0].furniture_entry_date));
        setFurniture_departure_date(format_date(result[0].furniture_departure_date));
      });
  };

  const updateFurniture = async (credentials) => {
    return await fetch(`http://localhost:3003/api/furniture/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((response) => {
      if (response.status === 200) {
        navigate("/hygiene");
      }
      return response.json();
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateFurniture({
        furniture_category,
        description,
        state,
        furniture_entry_date,
        furniture_departure_date,
      }).then((result) =>  setError(result.error))
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
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
            <label className="label">Descripción:</label>
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

          <div className="inputContainer">
            <input
              type="date"
              className="input"
              placeholder="a"
              value={furniture_departure_date}
              min={furniture_entry_date}
              required
              onChange={(e) => setFurniture_departure_date(e.target.value)}
            />
            <label className="label">Fecha de salida:</label>
          </div>

          <input type="submit" className="submitBtn" value="Registrar" />
        </form>
      </div>
    </div>
  );
};

export default Furniture_Update;
