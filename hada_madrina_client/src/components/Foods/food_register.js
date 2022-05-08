import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorNotRegister from "../Errors/error_not_register";


const Food_Register = () => {
  const navigate = useNavigate()
  const [food_category, setFood_category] = useState();
  const [description, setDescription] = useState();
  const [food_entry_date, setFood_entry_date] = useState();
  const [error, setError] = useState(); 

  const registerFoods = async (info) => {
    return fetch("http://localhost:3003/api/foods/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    }).then((response) => {
      if (response.status === 200) {
        navigate("/foods");
      }
      return response.json();
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerFoods({
        food_category,
        description,
        food_entry_date,
     
      }).then((result) =>  setError(result.error))
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="signupFrm">
      <div className="wrapper">
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
            <label className="label">Descripción:</label>
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

          <input type="submit" className="submitBtn" value="Registrar" />
        </form>
      </div>
    </div>
  );
};

export default Food_Register;
