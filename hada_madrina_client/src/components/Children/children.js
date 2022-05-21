import React from "react";
import { Link, useParams} from "react-router-dom";

import Navbar from "../Navbar/navbar";
import { format_date, message_not_register } from "../../utils/format_date";
import ErrorNotRegister from "../Errors/error_not_register";
import useApi from "../Custom/useApiGet";
import MotherInfo from "../Mother/mother_info";
import useApiDelete from "../Custom/useApiDelete";
import { delete_Children_Url, get_Children_Url, route_update_children, route_update_children_screen } from "../../utils/url";

const Children = () => {
 
  const { id } = useParams();
  const deleteChildren = useApiDelete();
  const url = get_Children_Url + id
  
  const {data, loading, error} = useApi(
    url
  ); 
  
    if(loading) return <h1>Loading</h1>  

  return (
    <>
      <Navbar></Navbar>
      <section className="home-section">
        <MotherInfo id={id}></MotherInfo>
      <div className="table-children">
        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Hijos:</div>
              {data.length > 0 &&  (
             
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
          {data.map(children => (
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
                    to={`${route_update_children_screen}${children.id}`}

                  >
                    <button className="btn btn-info">Update </button>
                  </Link>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-danger"
                    onClick={() => deleteChildren(delete_Children_Url,children.id)}
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
      {error && <ErrorNotRegister message={message_not_register}></ErrorNotRegister>}
        </div>
        </div>
        </div>
        </div>
      </section>
      
    </>
  );
};

export default Children;
