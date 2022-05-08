import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format_date } from "../../format_date";
import ErrorNotRegister from "../Errors/error_not_register";

const Hygiene_Update = () => {
  const navigate = useNavigate();
  const [hygiene_category, setHygiene_category] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [hygiene_entry_date, setHygiene_entry_date] = useState("");
  const [hygiene_departure_date, setHygiene_departure_date] = useState("");
  const [error, setError] = useState("");
  const { id } = useParams();

  const getHygieneByID = async (id) => {
    await fetch(`http://localhost:3003/api/hygiene/${id}`)
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
    getHygieneByID(id);
  });

  const updateHygiene = async (credentials) => {
    return await fetch(`http://localhost:3003/api/hygiene/edit/${id}`, {
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
      await updateHygiene({
        hygiene_category,
        description,
        brand,
        hygiene_entry_date,
        hygiene_departure_date,
      }).then((result) => setError(result.error));
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
