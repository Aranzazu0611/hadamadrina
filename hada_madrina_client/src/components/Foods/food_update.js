import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import { format_date } from "../../utils/format_date";
import {
  get_Foods_Url,
  route_foods_info,
  update_Foods_Url,
} from "../../utils/url";
import useApiUpdate from "../Custom/useApiUpdate";
import ErrorNotRegister from "../Errors/error_not_register";

const Food_Update = () => {
  const { id } = useParams();
  const url__food_By_Id = `${get_Foods_Url}${id}`
  const url_food_update = `${update_Foods_Url}${id}`
  const {update, error} = useApiUpdate(url_food_update, route_foods_info);
  const [food_category, setFood_category] = useState("");
  const [description, setDescription] = useState("");
  const [food_entry_date, setFood_entry_date] = useState("");
  const [food_departure_date, setFood_departure_date] = useState("");
 

  useEffect(() => {
    const getFoodByID = async () => {
      await fetch(url__food_By_Id)
        .then((res) => res.json())
        .then((result) => {
          setFood_category(result[0].food_category);
          setDescription(result[0].description);
          setFood_entry_date(format_date(result[0].food_entry_date));
          setFood_departure_date(format_date(result[0].food_departure_date));
        });
    };
    getFoodByID();
  }, [url__food_By_Id]);

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await update({
        food_category,
        description,
        food_entry_date,
        food_departure_date,
      });
    } catch (error) {
      return error.message;
    }
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
      <Link to={route_foods_info}>
          <button className="btn btn-primary d-inline">Volver a Comida</button>
        </Link>
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1 className="title">Alimentos</h1>
          {error && <ErrorNotRegister message={error}></ErrorNotRegister>}
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={food_category}
              required
              onChange={(e) => setFood_category(e.target.value)}
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
            <input
              type="date"
              id="hygiene_entry_date"
              className="input"
              placeholder="a"
              value={food_entry_date}
              required
              onChange={(e) => setFood_entry_date(e.target.value)}
            />
            <label className="label">Fecha de entrada:</label>
          </div>

          <div className="inputContainer">
            <input
              type="date"
              id="hygiene_departure_date"
              className="input"
              placeholder="a"
              value={food_departure_date}
              min={food_entry_date}
              required
              onChange={(e) => setFood_departure_date(e.target.value)}
            />
            <label className="label">Fecha de salida:</label>
          </div>

          <input type="submit" className="submitBtn" value="Actualizar" />
        </form>
      
      </div>
    </div>
  );
};

export default Food_Update;
