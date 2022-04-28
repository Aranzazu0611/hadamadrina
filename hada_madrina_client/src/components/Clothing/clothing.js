import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


const  Clothing = () =>{
  const [clothing, setClothing] = useState([]);
  useEffect(() => {
    getClothing();
  }, []);
  

  const  getClothing = async () => {
    await fetch("http://localhost:3003/api/clothing/")
      .then((res) => res.json())
      .then((result) => {
     
        setClothing(result.reverse());
      });
  };
  
  const deleteClothing = async (id) => {
    await fetch("http://localhost:3003/api/clothing/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => getClothing()) 
      
  };

 

  return (
    <div className="container">
      <h2 className="text-center">
          Almacén de Ropa</h2>
      <div className="row">
      <Link to="/Register/Clothing">
        <button className="col-2 btn btn-primary d-inline ">           
          Añadir Ropa
        </button>
      </Link>   
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Id</th>
              <th> Categoria</th>
              <th> Descripción</th>
              <th> Color </th>
              <th> Talla </th>
              <th> Genero </th>
              <th> Edad</th>
              <th> Fecha de entrada</th>
              <th> Fecha de salida</th>
              <th> Action</th>              
            </tr>
          </thead>
          <tbody>
            {clothing.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.clothing_category}</td>
                <td>{item.description}</td>
                <td> {item.colour}</td>
                <td> {item.size}</td>
                <td> {item.gender}</td>
                <td> {item.age}</td>
                <td> {item.clothing_entry_date}</td>
                <td> {item.clothing_departure_date}</td>
                

                <td>
                  <button className="btn btn-info">Update </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-danger"
                    onClick={() => deleteClothing(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-info"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Clothing;