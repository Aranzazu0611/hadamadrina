import React, { useEffect, useState } from "react";


const  Children = () =>{
  const [childrens, setChildrens] = useState([]);
  useEffect(() => {
    getChildrens();
  }, []);
  

  const  getChildrens = async () => {
    await fetch("http://localhost:3003/api/childrens/")
      .then((res) => res.json())
      .then((result) => {
     
        setChildrens(result.reverse());
      });
  };
  
  const deleteChildren = async (id) => {
    await fetch("http://localhost:3003/api/childrens/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => getChildrens()) 
      
  };

 

  return (
    <div className="container">
      <h2 className="text-center">
          Childrens List</h2>
      <div className="row">
        <button className="col-2 btn btn-primary d-inline ">        
          Añadir Niño
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
              <th> Edad</th>
              <th> Genero</th>
              <th> Fecha de Nacimiento</th> 
              <th> Nombre del Padre</th>              
            </tr>
          </thead>
          <tbody>
            {childrens.map((children) => (
              <tr key={children.id}>
                <td>{children.id}</td>
                <td>{children.name}</td>
                <td>{children.surnames}</td>                
                <td> {children.age}</td>
                <td> {children.gender}</td>
                <td> {children.children_birth}</td>
                <td> {children.father_name}</td>
                

                <td>
                  <button className="btn btn-info">Update </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-danger"
                    onClick={() => deleteChildren(children.id)}
                  >
                    Borrar
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

export default Children;