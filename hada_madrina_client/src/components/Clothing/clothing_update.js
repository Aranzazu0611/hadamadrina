import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import { format_date } from "../../utils/format_date";
import {  
  get_Clothing_Url,
  route_clothing_info,
  update_Clothing_Url,
} from "../../utils/url";
import useApiUpdate from "../Custom/useApiUpdate";

const Clothing_Update = () => {
  const { id } = useParams();
  const url_By_Id = get_Clothing_Url + id;
  const url_update = update_Clothing_Url + id;
  const updateClothing = useApiUpdate(url_update, route_clothing_info);
  const [clothing_category, setClothing_category] = useState("");
  const [description, setDescription] = useState("");
  const [colour, setColour] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [clothing_entry_date, setClothing_entry_date] = useState("");
  const [clothing_departure_date, setClothing_departure_date] = useState("");

  const info = {
    clothing_category,
    description,
    colour,
    size,
    gender,
    age,
    clothing_entry_date,
    clothing_departure_date,
  };

  useEffect(() => {
    getClothingByID();
  }, []);

  const getClothingByID = async () => {
    await fetch(url_By_Id)
      .then((res) => res.json())
      .then((result) => {
        setClothing_category(result[0].clothing_category);
        setDescription(result[0].description);
        setColour(result[0].colour);
        setSize(result[0].size);
        setGender(result[0].gender);
        setAge(result[0].age);
        setClothing_entry_date(format_date(result[0].clothing_entry_date));
        setClothing_departure_date(
          format_date(result[0].clothing_departure_date)
        );
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateClothing(url_update, info);
    } catch (error) {
      return error.message;
    }
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1 className="title">Ropa:</h1>

          <div className="inputContainer">
            <input
              type="text"
              id="category"
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
            <input
              type="text"
              id="colour"
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
              id="age"
              className="input"
              placeholder="a"
              value={age}
              required
              onChange={(e) => setAge(e.target.value)}
            />
            <label className="label">Age:</label>
          </div>
          <div className="inputContainer">
            <label htmlFor="state">Genero:</label>
            <select
              className="form-control"
              id="state"
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
              id="state"
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
              id="clothing_departure_date"
              className="input"
              placeholder="a"
              value={clothing_entry_date}
              required
              onChange={(e) => setClothing_entry_date(e.target.value)}
            />
            <label className="label">Fecha de salida:</label>
          </div>

          <div className="inputContainer">
            <input
              type="date"
              id="clothing_departure_date"
              className="input"
              placeholder="a"
              value={clothing_departure_date}
              required
              min={clothing_entry_date}
              onChange={(e) => setClothing_departure_date(e.target.value)}
            />
            <label className="label">Fecha de salida:</label>
          </div>

          <input type="submit" className="submitBtn" value="Actualizar" />
        </form>
      </div>
    </div>
  );
};

export default Clothing_Update;
