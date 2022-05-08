import React, {useState} from "react";
import { useNavigate  } from 'react-router-dom';
import ErrorNotRegister from "../Errors/error_not_register";


const Hygiene_Register =() => {
  
  const navigate = useNavigate()
  const [hygiene_category, setHygiene_category] = useState();
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [hygiene_entry_date, setHygiene_entry_date] = useState("");  
  const [error, setError] = useState("");

  const registerHygiene = async(info) => {
    return  fetch("http://localhost:3003/api/hygiene/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    
    }).then((response) => {
      if (response.status === 200) {
        navigate("/hygiene");
      }
      return response.json();
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await registerHygiene({
        hygiene_category,
        description,        
        brand,
        hygiene_entry_date
             
      }).then((result) =>  setError(result.error))
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
              id="brand"
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
              id="hygiene_departure_date"
              className="input"
              placeholder="a"
              value={hygiene_entry_date}
              required
              onChange={(e) => setHygiene_entry_date(e.target.value)}
            />
            <label className="label">Fecha de entrada:</label>
          </div>        

          <input type="submit" className="submitBtn" value="Registrar" />
        </form>
      </div>
    </div>
  );
}

export default Hygiene_Register;
