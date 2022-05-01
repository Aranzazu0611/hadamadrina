
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom'

const User_Info = () => {
  const [name, setName] = useState();
  const [surnames, setSurnames] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState(); 
  const [address, setAddress] = useState();
  const [role, setRole] = useState();
  
  
  
 
  const id_params = useParams()
  const {id} = id_params
  

  useEffect(() => {
    getUserById(id);
  }, [id]);

  const getUserById = async (id) => {
    await fetch(`http://localhost:3003/api/user/${id}`)
      .then((res) => res.json())
      .then((result) => {
        
        setName(result[0].name);
        setSurnames(result[0].surnames);    
        setEmail(result[0].email);
        setPhone(result[0].phone);
        setAddress(result[0].address);
        setRole(result[0].volunteers_rol)
        
       
      });
  };

  return (
    <>
      <div className="container">
      <div className="row">
        <Link to={`/Update/User/${id}`}>
          <button className="col-2 btn btn-primary d-inline ">
            Actualizar Usuario
          </button>
        </Link>
      </div>
        <h1>Datos de la madre:</h1>
        <h2>Nombre:{name}</h2>
        <p>Apellido: {surnames}</p>
        <p>Email: {email}</p>
        <p>Teléfono: {phone}</p>
        <p>Direccion: {address}</p>
        <p>Role: {role}</p>  
        </div>
       
        
        
        
      
      
    </>
  );
};

export default User_Info;
