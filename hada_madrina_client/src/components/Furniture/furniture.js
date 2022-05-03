import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error_Not_Register from "../Errors/error_not_register";
import Navbar from "../Navbar/navbar";

const Funiture = () => {
  const navigate = useNavigate();
  const [furniture, setFurniture] = useState([]);
  const [error, setError] = useState(false);
 

  useEffect(() => {
    getFunitures();
  }, []);

  const getFunitures = async () => {
    await fetch("http://localhost:3003/api/furniture/")
      .then((res) => res.json())
      .then((result) => {
        result.length > 0 ? setFurniture(result.reverse()) : setError(true);
        
      });
  };

  const deleteFunitures = async (id) => {
    await fetch("http://localhost:3003/api/furniture/delete/" + id, {
      method: "DELETE",
    }).then(() => navigate(0));
  };

  const formatDate = (date) => {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString([], options);
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Artículos y Muebles:</span>
          </div>

          <div>
            <Link to="/Register/Furniture">
              <button className="btn btn-primary d-inline ">Añadir item</button>
            </Link>
          </div>
        </nav>

        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Artículos:</div>
              {furniture.length > 0 && (
                <div className="sales-details">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th> Id</th>
                        <th> Categoria</th>
                        <th> Descripción</th>
                        <th> Estado</th>
                        <th> Fecha de entrada</th>
                        <th> Fecha de salida</th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {furniture.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.furniture_category}</td>
                          <td>{item.description}</td>
                          <td> {item.state}</td>
                          <td> {formatDate(item.furniture_entry_date)}</td>
                          <td> {formatDate(item.furniture_departure_date)}</td>

                          <td>
                            <Link to={`/Update/Furniture/${item.id}`}>
                              <button className="btn btn-info">Editar </button>
                            </Link>
                            <button
                              style={{ marginLeft: "10px" }}
                              className="btn btn-danger"
                              onClick={() => deleteFunitures(item.id)}
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

export default Funiture;
