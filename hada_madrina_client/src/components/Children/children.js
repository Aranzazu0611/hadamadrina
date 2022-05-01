import React, { useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import Mother_info from "../Mother/mother_info";
import Navbar from "../Navbar/navbar";

const Children = () => {
  const [childrens, setChildrens] = useState([]);

  
  const {id} = useParams();
  

  useEffect(() => {
    getChildrenById(id);
   
  }, [id]);

  const getChildrenById = async (id) => {
    
    await fetch(`http://localhost:3003/api/children/${id}`)
      .then((res) => res.json())
      .then((result) => {
      
        setChildrens(result)
      }).catch ((error)=>{
        console.log("Url mala");
      })
  };

  
  
  const deleteChildren = async (id) => {
    await fetch("http://localhost:3003/api/childrens/delete/" + id, {
      method: "DELETE",
    }).then((res) => getChildrenById(id));
  };

  return (
    <>
    <Navbar></Navbar>
    <Mother_info id={id}></Mother_info>
    <section className="home-section">
    <div className="container">  
     
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
           
          {childrens.length > 0 ? (
        <>
          {childrens.map(children => (
            <tr key={children.id}>
                <td>{children.id}</td>
                <td>{children.name}</td>
                <td>{children.surnames}</td>
                <td> {children.age}</td>
                <td> {children.gender}</td>
                <td> {children.children_birth}</td>
                <td> {children.father_name}</td>

                <td>
                  <Link
                    to={`/Update/Children/${children.id}`}

                  >
                    <button className="btn btn-info">Update </button>
                  </Link>
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
        </>
      ) : (
          <h4 className="text-center">No hay niños registrados</h4>
        )}
          </tbody>
        </table>
      </div>
    </div>
    </section>
    </>
    
  );
};

export default Children;
