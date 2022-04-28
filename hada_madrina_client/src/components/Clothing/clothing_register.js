import React, {useState} from "react";

const Clothing_Register =() => {

  const [clothing_category, setClothing_category] = useState();
  const [description, setDescription] = useState();
  const [colour, setColour] = useState();
  const [size, setSize] = useState();  
  const [gender, setGender] = useState();
  const [age, setAge] = useState(); 
  const [clothing_entry_date, setClothing_entry_date] = useState();
  const [clothing_departure_date, setClothing_departure_date] = useState(); 
  

  const registerClothing = async(info) => {
    return  fetch("http://localhost:3003/api/clothing/register", {
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
       
      await registerClothing({
        clothing_category,
        description,
        colour,  
        size,  
        gender, 
        age,       
        clothing_entry_date,
        clothing_departure_date       
      }).then(() => {
        
         window.location.href = "/clothing";
        
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
            <h1 className="title-register">Registro Ropa</h1>
            <label>Categoria:</label>
            <input
              type="text"
              id="category"
              className="form-control"
              placeholder="Categoria"
              value={clothing_category}
              required
              onChange={(e) => setClothing_category(e.target.value)}
              
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
             <label>Color:</label>
            <input
              type="text"
              id="colour"
              className="form-control"
              placeholder="Color"
              value={colour}
              required
              onChange={(e) => setColour(e.target.value)}
              
            />
          
          <div className="form-group">
              <label htmlFor="state">Selecciona Talla:</label>
              <select className="form-control" id="state" value={size}  onChange={(e) => setSize(e.target.value)}  >             
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
            <div className="form-group">
              <label htmlFor="state">Genero:</label>
              <select className="form-control" id="state" value={gender}  onChange={(e) => setGender(e.target.value)}  >             
                <option>Niño</option>
                <option>Niña</option>                                           
              </select>
            </div> 
            <label>Age:</label>
            <input
              type="text"
              id="age"
              className="form-control"
              placeholder="Edad"
              value={age}
              required
              onChange={(e) => setAge(e.target.value)}              
              
            />                       
            
             <label>Fecha de entrada:</label>
            <input
              type="date"
              id="clothing_entry_date"
              className="form-control"             
              value={clothing_entry_date}
              required
              onChange={(e) => setClothing_entry_date(e.target.value)}
              
            />
             <label>Fecha de salida:</label>
            <input
              type="date"
              id="clothing_departure_date"
              className="form-control"                       
              value={clothing_departure_date}
              required
              onChange={(e) => setClothing_departure_date(e.target.value)}
              
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

export default Clothing_Register;
