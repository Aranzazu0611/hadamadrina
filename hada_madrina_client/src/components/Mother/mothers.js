import React, { useEffect, useState } from "react";


const  Mother = () =>{
  const [mothers, setMothers] = useState([]);
  useEffect(() => {
    getMothers();
  }, []);
  

  const getMothers = async () => {
    await fetch("http://localhost:3003/api/mothers/")
      .then((res) => res.json())
      .then((result) => {
        
        setMothers(result.reverse());
      });
  };
  
  const deleteMothers = async (id) => {
    await fetch("http://localhost:3003/api/mother/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => getMothers()) 
      
  };

 

  return (
    <div className="container">
      <h2 className="text-center">Mother List</h2>
      <div className="row">
        <button className="col-2 btn btn-primary d-inline ">
        
          Añadir Madre
        </button>
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Id</th>
              <th> Nombre</th>
              <th> Apellido</th>
              <th> Edad </th>
              <th> Email </th>
              <th> Teléfono </th>
              <th> Dirección</th>
              <th> Nacionalidad</th>
              <th> Fecha de nacimiento</th>
              <th> Estado civil</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {mothers.map((mother) => (
              <tr key={mother.id}>
                <td>{mother.id}</td>
                <td>{mother.name}</td>
                <td>{mother.surnames}</td>
                <td> {mother.age}</td>
                <td> {mother.email}</td>
                <td> {mother.phone}</td>
                <td> {mother.address}</td>
                <td> {mother.nationality}</td>
                <td> {mother.mother_bith}</td>
                <td> {mother.civil_status}</td>

                <td>
                  <button className="btn btn-info">Update </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-danger"
                    onClick={() => deleteMothers(mother.id)}
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

export default Mother;
