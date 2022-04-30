import React, {useState} from "react";

const Hygiene_Register =() => {

  const [hygiene_category, setHygiene_category] = useState();
  const [description, setDescription] = useState();
  const [brand, setBrand] = useState();
  const [hygiene_entry_date, setHygiene_entry_date] = useState();
  const [hygiene_departure_date, setHygiene_departure_date] = useState();
  

  const registerHygiene = async(info) => {
    return  fetch("http://localhost:3003/api/hygiene/register", {
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
      
      await registerHygiene({
        hygiene_category,
        description,        
        brand,
        hygiene_entry_date,
        hygiene_departure_date       
      }).then(() => {
        
         window.location.href = "/hygiene";
        
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
            <h1 className="title-register">Register Hygiene</h1>
            <label>Categoria:</label>
            <input
              type="text"
              id="category"
              className="form-control"
              placeholder="Categoria"
              value={hygiene_category}
              required
              onChange={(e) => setHygiene_category(e.target.value)}
              
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
            <label>Marca:</label>
            <input
              type="text"
              id="brand"
              className="form-control"
              placeholder="Brand"
              value={brand}
              required
              onChange={(e) => setBrand(e.target.value)}
              
            />
             <label>Fecha de entrada:</label>
            <input
              type="date"
              id="hygiene_entry_date"
              className="form-control"
              placeholder="Fecha de entrada"
              value={hygiene_entry_date}
              required
              onChange={(e) => setHygiene_entry_date(e.target.value)}
              
            />
             <label>Fecha de salida:</label>
            <input
              type="date"
              id="hygiene_departure_date"
              className="form-control"
              placeholder="Dirección"             
              value={hygiene_departure_date}
              required
              onChange={(e) => setHygiene_departure_date(e.target.value)}
              
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

export default Hygiene_Register;
