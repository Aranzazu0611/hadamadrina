import React, {useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { format_date } from "../../format_date";



const Children_Update =() => {
  const navigate = useNavigate()

  const [name, setName] = useState();
  const [surnames, setSurnames] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState("Niño");
  const [children_birth, setChildren_birth] = useState();
  const [father_name, setFather_name] = useState();
  const [mother_id, setMother_id] = useState();

  const {id} = useParams();

 
  useEffect(() => {
    getChildrenById(id);
  }, [id]);

  const getChildrenById = async (id) => {
    await fetch(`http://localhost:3003/api/children/${id}`)
      .then((res) => res.json())
      .then((result) => {
       
        setName(result[0].name)       
        setSurnames(result[0].surnames)
        setAge(result[0].age)
        setGender(result[0].gender)
        setChildren_birth(format_date(result[0].children_birth))
        setFather_name(result[0].father_name)
        setMother_id(result[0].mother_id)
               
        
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
      }).then(() => {    
      
        navigate(`/children/${mother_id}`)
               
      })
    } catch (error) {
      console.log(error);
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
          <label htmlFor="state">Genero:</label>
              <select className="form-control" id="state" value={gender}  onChange={(e) => setGender(e.target.value)}  >             
                <option>Niño</option>
                <option>Niña</option>                                           
              </select>
            
           
          </div>
          <div className="inputContainer">
            
            <input
              type="date"
              id="hygiene_departure_date"
              className="input"
              placeholder="a"
              value={children_birth}
              required
              onChange={(e) => setChildren_birth(e.target.value)}
            />
            <label className="label">Fecha de nacimiento:</label>
          </div>
         

          <input type="submit" className="submitBtn" value="Actualizar" />
        </form>
      </div>
    </div>
  );
}

export default Children_Update;
