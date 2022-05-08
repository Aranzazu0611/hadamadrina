import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { format_date } from "../../format_date";
import ErrorNotRegister from "../Errors/error_not_register";


const Food_Update =() => {
  const navigate = useNavigate();
  const [food_category, setFood_category] = useState();
  const [description, setDescription] = useState();  
  const [food_entry_date, setFood_entry_date] = useState();
  const [food_departure_date, setFood_departure_date] = useState();  
  const {id} = useParams()
  const [error, setError] = useState();

  useEffect(() => {
    getFoodByID(id);
  }, [id]);

  const getFoodByID = async (id) => {
    await fetch(`http://localhost:3003/api/foods/${id}`)
      .then((res) => res.json())
      .then((result) => {
         
          setFood_category(result[0].food_category)
          setDescription(result[0].description)        
          setFood_entry_date(format_date(result[0].food_entry_date))
          setFood_departure_date(format_date(result[0].food_departure_date))
      });
  };

  const updateClothing = async (credentials) => {
    return await fetch(`http://localhost:3003/api/foods/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((response) => {
      if (response.status === 200) {
        navigate("/foods");
      }
      return response.json();
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateClothing({
        food_category,
        description,       
        food_entry_date,
        food_departure_date    
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

          <div className="inputContainer">
            
            <input
              type="date"
              id="hygiene_departure_date"
              className="input"
              placeholder="a"
              value={food_departure_date}
              min = {food_entry_date}
              required
              onChange={(e) => setFood_departure_date(e.target.value)}
            />
            <label className="label">Fecha de salida:</label>
          </div>

          <input type="submit" className="submitBtn" value="Registrar" />
        </form>
      </div>
    </div>
  );
}

export default Food_Update;
