import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format_date } from "../../utils/format_date";
import { get_Hygiene_Url, route_hygiene, update_Hygiene_Url } from "../../utils/url";
import useApiUpdate from "../Custom/useApiUpdate";
import ErrorNotRegister from "../Errors/error_not_register";

const Hygiene_Update = () => {
  const { id } = useParams();
  const url_By_Id = get_Hygiene_Url + id;
  const url_update = update_Hygiene_Url + id;
  const updateHygiene = useApiUpdate(url_update, route_hygiene);
  const [hygiene_category, setHygiene_category] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [hygiene_entry_date, setHygiene_entry_date] = useState("");
  const [hygiene_departure_date, setHygiene_departure_date] = useState("");
  const [error] = useState("");
  const info_hygiene = {
    hygiene_category,
    description,
    brand,
    hygiene_entry_date,
    hygiene_departure_date,
  }
  

  const getHygieneByID = async () => {
    await fetch(url_By_Id)
      .then((res) => res.json())
      .then((result) => {
        setHygiene_category(result[0].hygiene_category);
        setDescription(result[0].description);
        setBrand(result[0].brand);
        setHygiene_entry_date(format_date(result[0].hygiene_entry_date));
        setHygiene_departure_date(
          format_date(result[0].hygiene_departure_date)
        );
      });
  };

  useEffect(() => {
    getHygieneByID();
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateHygiene(info_hygiene)
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1 className="title">Higiene</h1>
          {error && <ErrorNotRegister message={error}></ErrorNotRegister>}
          <div className="inputContainer">
            <input
              type="text"
              className="input"
              placeholder="a"
              value={hygiene_category}
              required
              onChange={(e) => setHygiene_category(e.target.value)}
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
              placeholder="Brand"
              value={brand}
              required
              onChange={(e) => setBrand(e.target.value)}
            />
            <label className="label">Marca:</label>
          </div>

          <div className="inputContainer">
            <input
              type="date"
              className="input"
              placeholder="a"
              value={hygiene_entry_date}
              required
              onChange={(e) => setHygiene_entry_date(e.target.value)}
            />
            <label className="label">Fecha de entrada:</label>
          </div>
          <div className="inputContainer">
            <input
              type="date"
              className="input"
              placeholder="a"
              value={hygiene_departure_date}
              min={hygiene_entry_date}
              required
              onChange={(e) => setHygiene_departure_date(e.target.value)}
            />
            <label className="label">Fecha de salida:</label>
          </div>

          <input type="submit" className="submitBtn" value="Actualizar" />
        </form>
      </div>
    </div>
  );
};

export default Hygiene_Update;
