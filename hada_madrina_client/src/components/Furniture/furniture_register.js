import React, {useState} from "react";



const Furniture_Register =() => {

  const [furniture_category, setFurniture_category] = useState();
  const [description, setDescription] = useState();
  const [state, setState] = useState("Nuevo");
  const [furniture_entry_date, setFurniture_entry_date] = useState();
  const [furniture_departure_date, setFurniture_departure_date] = useState();  
  

  const registerFurniture = async(info) => {
    return  fetch("http://localhost:3003/api/furniture/register", {
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
        console.log(state)
      
      await registerFurniture({
        furniture_category,
        description,        
        state,
        furniture_entry_date,
        furniture_departure_date       
      }).then(() => {
        
         window.location.href = "/furniture";
        
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
            <h1 className="title-register">Register Furniture</h1>
            <label>Categoria:</label>
            <input
              type="text"
              id="category"
              className="form-control"
              placeholder="Categoria"
              value={furniture_category}
              required
              onChange={(e) => setFurniture_category(e.target.value)}
              
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
             <div className="form-group">
              <label htmlFor="state">Selecciona Estado:</label>
              <select className="form-control" id="state" value={state}  onChange={(e) => setState(e.target.value)}  >             
                <option>Nuevo</option>
                <option>Usado</option>                          
              </select>
            </div>
            
             <label>Fecha de entrada:</label>
            <input
              type="date"
              id="hygiene_entry_date"
              className="form-control"
              placeholder="Fecha de entrada"
              value={furniture_entry_date}
              required
              onChange={(e) => setFurniture_entry_date(e.target.value)}
              
            />
             <label>Fecha de salida:</label>
            <input
              type="date"
              id="hygiene_departure_date"
              className="form-control"
              placeholder="Dirección"             
              value={furniture_departure_date}
              required
              onChange={(e) => setFurniture_departure_date(e.target.value)}
              
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

export default Furniture_Register;
