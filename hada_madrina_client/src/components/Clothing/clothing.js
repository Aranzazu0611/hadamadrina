import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error_Not_Register from "../Errors/error_not_register";
import Navbar from "../Navbar/navbar";

const Clothing = () => {
  const navigate = useNavigate();
  const [clothing, setClothing] = useState([]);
  const [error, setError] = useState(false);
 

  useEffect(() => {
    getClothing();
  }, []);

  const getClothing = async () => {
    await fetch("http://localhost:3003/api/clothing/")
      .then((res) => res.json())
      .then((result) => {
        result.length > 0 ? setClothing(result.reverse()) : setError(true);
      });
  };

  const deleteClothing = async (id) => {
    await fetch("http://localhost:3003/api/clothing/delete/" + id, {
      method: "DELETE",
    }).then(() => navigate(0));
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Artículos de Ropa:</span>
          </div>

          <div>
            <Link to="/Register/Clothing">
              <button className="btn btn-primary d-inline ">Añadir item</button>
            </Link>
          </div>
        </nav>

        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Productos de Alimentación:</div>
              {clothing.length > 0 && (
                <div className="sales-details">
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
                      {clothing.map((item) =>  (
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
                        <Link to={`/Update/Clothing/${item.id}`}>
                          <button className="btn btn-info">Update </button>
                        </Link>
  
                        <button
                          style={{ marginLeft: "10px" }}
                          className="btn btn-danger"
                          onClick={() => deleteClothing(item.id)}
                        >
                          Borrar
                        </button>
                        
                      </td>
                    </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {error && <Error_Not_Register></Error_Not_Register>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clothing;
