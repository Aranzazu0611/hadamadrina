import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const Food_Update =() => {

  const [food_category, setFood_category] = useState();
  const [description, setDescription] = useState();  
  const [food_entry_date, setFood_entry_date] = useState();
  const [food_departure_date, setFood_departure_date] = useState();  
  const {id} = useParams()

  useEffect(() => {
    getFoodByID(id);
  }, [id]);

  const getFoodByID = async (id) => {
    await fetch(`http://localhost:3003/api/foods/${id}`)
      .then((res) => res.json())
      .then((result) => {
         
          setFood_category(result[0].food_category)
          setDescription(result[0].description)        
          setFood_entry_date(result[0].food_entry_date)
          setFood_departure_date(result[0].food_departure_date)
      });
  };

  const updateClothing = async (credentials) => {
    return await fetch(`http://localhost:3003/api/foods/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => console.log(data));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateClothing({
        food_category,
        description,       
        food_entry_date,
        food_departure_date    
      }).then(() => {
        window.location.href = `/foods`;
      });
    } catch (error) {
      console.log(error);
    }
  };
  
 
  return (
    <div className="App">
      <div className="App-header">
        <div className="container w-75 ">
          <form className="baby-login form-signin container_color rounded shadow" onSubmit={handleSubmit}>
            <h1 className="title-register">Actualizar Food</h1>
            <label>Categoria:</label>
            <input
              type="text"
              id="category"
              className="form-control"
              placeholder="Categoria"
              value={food_category}
              required
              onChange={(e) => setFood_category(e.target.value)}
              
            />
            <label>Descripción:</label>
            <input
              type="text"
              id="description"
              className="form-control"
              placeholder="Descripción"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
              
            />            
            
             <label>Fecha de entrada:</label>
            <input
              type="date"
              id="hygiene_entry_date"
              className="form-control"
              placeholder="Fecha de entrada"
              value={food_entry_date}
              required
              onChange={(e) => setFood_entry_date(e.target.value)}
              
            />
             <label>Fecha de salida:</label>
            <input
              type="date"
              id="hygiene_departure_date"
              className="form-control"
              placeholder="Dirección"             
              value={food_departure_date}
              required
              onChange={(e) => setFood_departure_date(e.target.value)}
              
            />
            
            <button className="btn btn-primary" type="submit">
              Actualizar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Food_Update;
