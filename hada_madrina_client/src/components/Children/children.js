import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Mother_info from "../Mother/mother_info";
import Error_Not_Register from "../Errors/error_not_register";
import Navbar from "../Navbar/navbar";
import { format_date, message_not_register } from "../../format_date";

const Children = () => {
  const navigate = useNavigate()
  const [childrens, setChildrens] = useState([]);
  const [error, setError] = useState(false);


  const { id } = useParams();

  useEffect(() => {
    getChildrenById(id);
  }, [id]);

  const getChildrenById = async (id) => {
    await fetch(`http://localhost:3003/api/children/mother/${id}`)
      .then((res) => res.json())
      .then((result) => {
       
        result.length > 0 ? setChildrens(result.reverse()) : setError(true);
      })
     
  };

  const deleteChildren = async (id) => {
    await fetch("http://localhost:3003/api/childrens/delete/" + id, {
      method: "DELETE",
    }).then(() =>  navigate(0));
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="home-section">
        <Mother_info id={id}></Mother_info>
      <div className="table-children">
        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Hijos:</div>
              {childrens.length > 0 &&  (
             
                <div className="sales-details">
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
                   
        <>
          {childrens.map(children => (
            <tr key={children.id}>
                <td>{children.id}</td>
                <td>{children.name}</td>
                <td>{children.surnames}</td>
                <td> {children.age}</td>
                <td> {children.gender}</td>
                <td> {format_date(children.children_birth)}</td>
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
                   
          </tbody>
        </table>
      </div>
              )}
      {error && <Error_Not_Register message={message_not_register}></Error_Not_Register>}
        </div>
        </div>
        </div>
        </div>
      </section>
      
    </>
  );
};

export default Children;
