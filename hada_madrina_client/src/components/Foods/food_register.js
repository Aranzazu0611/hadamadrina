import React, {useState} from "react";

const Food_Register =() => {

  const [food_category, setFood_category] = useState();
  const [description, setDescription] = useState();  
  const [food_entry_date, setFood_entry_date] = useState();
  const [food_departure_date, setFood_departure_date] = useState();  
  

  const registerFoods = async(info) => {
    return  fetch("http://localhost:3003/api/foods/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    
    }).then((data) => data.json()
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       
      await registerFoods({
        food_category,
        description,            
        food_entry_date,
        food_departure_date       
      }).then(() => {
        
         window.location.href = "/foods";
        
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
            <h1 className="title-register">Register Food</h1>
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
              Regitrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Food_Register;
