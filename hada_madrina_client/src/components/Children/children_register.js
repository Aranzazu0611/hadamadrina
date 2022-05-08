
import React, {useState } from "react";
import { useParams } from "react-router-dom";



const Children_Register =() => {

  const [name, setName] = useState();
  const [surnames, setSurnames] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState("Niño");
  const [children_birth, setChildren_birth] = useState();
  const [father_name, setFather_name] = useState();
  const mother_id = useParams();
  const {id} = mother_id

  

  const registerChildren = async(credentials) => {
    return await fetch("http://localhost:3003/api/childrens/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    
    }).then((data) => data.json()
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      await registerChildren({
        name,
        surnames,
        age,
        gender, 
        children_birth,
        father_name,
        mother_id:id
        
      }).then(() => {     
       
         window.location.href = `/children/${id}`;        
      });
    } catch (error) {
      return error;
    }
  };
  
 
  return (
    <div className="signupFrm">
      <div className="wrapper">
        <form action="" className="form" onSubmit={handleSubmit}>
          <h1 className="title">Niños:</h1>

          <div className="inputContainer">
          
            <input
              type="text"              
              className="input"
              placeholder="a"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              
            />
            <label className="label">Nombre:</label>
          </div>

          <div className="inputContainer">
           
          <input
              type="text"
              id="Surnames"
              className="input"
              placeholder="a"
              value={surnames}
              required
              onChange={(e) => setSurnames(e.target.value)}
              
            />
            <label className="label">Apellidos:</label>
          </div>
          <div className="inputContainer">
            
          
            <input
              type="text"
              id="father"
              className="input"
              placeholder="a"
              value={father_name}
              required
              onChange={(e) => setFather_name(e.target.value)}
              
            />    
             <label className="label">Padre:</label>        
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
            <label className="label">Edad:</label>
          </div>

         
          <div className="inputContainer">
        
              <select className="input" id="state" value={gender}  onChange={(e) => setGender(e.target.value)}  >             
                <option>Niño</option>
                <option>Niña</option>                                           
              </select>
              <label htmlFor="state" className="label">Genero:</label>
           
          </div>
          <div className="inputContainer">
            
            <input
              type="date"
                           className="input"
              placeholder="a"
              value={children_birth}
              required
              onChange={(e) => setChildren_birth(e.target.value)}
            />
            <label className="label">Fecha de nacimiento:</label>
          </div>
         

          <input type="submit" className="submitBtn" value="Registrar" />
        </form>
      </div>
    </div>
  );
}

export default Children_Register;
