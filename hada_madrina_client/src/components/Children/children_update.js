import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const Children_Update =() => {

  const [name, setName] = useState();
  const [surnames, setSurnames] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState("Niño");
  const [children_birth, setChildren_birth] = useState();
  const [father_name, setFather_name] = useState();

  const {id} = useParams();

 
  useEffect(() => {
    getChildrenById(id);
  }, [id]);

  const getChildrenById = async (id) => {
    await fetch(`http://localhost:3003/api/children/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setName(result.name)
        setSurnames(result.surnames)
        setAge(result.age)
        setGender(result.gender)
        setChildren_birth(result.children_birth)
        setFather_name(result.father_name)       
        
      });
  };


  

  const updateChildren = async(credentials) => {
      
    return await fetch(`http://localhost:3003/api/children/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    
    }).then((data) => console.log(data) 
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      await updateChildren({
        name,
        surnames,
        age,
        gender, 
        children_birth,
        father_name, 
        id
      }).then((data) => {    
         
        window.location.href = `/children/${data.id}`;        
      })
    } catch (error) {
      console.log(error);
    }
  };
  
 
  return (
    <div className="App">
      <div className="App-header">
        <div className="container w-75 ">
          <form className="baby-login form-signin container_color rounded shadow" onSubmit={handleSubmit}>
            <h1 className="title-register">Registro de Niños:</h1>
            <label>Nombre</label>
            <input
              type="text"
              id="Name"
              className="form-control"
              placeholder="Nombre"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              
            />
            <label>Apellidos</label>
            <input
              type="text"
              id="Surnames"
              className="form-control"
              placeholder="Apellidos"
              value={surnames}
              required
              onChange={(e) => setSurnames(e.target.value)}
              
            />
            <label>Edad:</label>
            <input
              type="text"
              id="age"
              className="form-control"
              placeholder="Edad"
              value={age}
              required
              onChange={(e) => setAge(e.target.value)}
              
            />
           <div className="form-group">
              <label htmlFor="state">Genero:</label>
              <select className="form-control" id="state" value={gender}  onChange={(e) => setGender(e.target.value)}  >             
                <option>Niño</option>
                <option>Niña</option>                                           
              </select>
            </div>    
            <label>Fecha de Nacimiento:</label>
            <input
              type="date"
              id="birth"
              className="form-control"             
              value={children_birth}
              required
              onChange={(e) => setChildren_birth(e.target.value)}
              
            />    
            <label>Padre:</label>
            <input
              type="text"
              id="father"
              className="form-control"
              placeholder="Padre"
              value={father_name}
              required
              onChange={(e) => setFather_name(e.target.value)}
              
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

export default Children_Update;
