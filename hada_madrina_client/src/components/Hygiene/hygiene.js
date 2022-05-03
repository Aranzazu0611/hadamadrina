import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error_Not_Register from "../Errors/error_not_register";
import Navbar from "../Navbar/navbar";

const Hygiene = () => {
  const navigate = useNavigate()
  const [hygiene, setHygiene] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getHygiene();
  }, []);

  const getHygiene = async () => {
    await fetch("http://localhost:3003/api/hygiene/")
      .then((res) => res.json())
      .then((result) => {
        result.length > 0 ? setHygiene(result) : setError(true);
      });
  };

  const deleteHygiene = async (id) => {
    await fetch("http://localhost:3003/api/hygiene/delete/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate(0)
     
    });
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Productos de baño:</span>
          </div>

          <div>
            <Link to="/Register/hygiene">
              <button className="btn btn-primary d-inline ">Añadir item</button>
            </Link>
          </div>
        </nav>

        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Productos de higiene:</div>
              {hygiene.length > 0 && (
                <div className="sales-details">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th> Id</th>
                        <th> Categoria</th>
                        <th> Descripción</th>
                        <th> Marca</th>
                        <th> Fecha de entrada</th>
                        <th> Fecha de salida</th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hygiene.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.hygiene_category}</td>
                          <td>{item.description}</td>
                          <td> {item.brand}</td>
                          <td> {item.hygiene_entry_date}</td>
                          <td> {item.hygiene_departure_date}</td>

                          <td>
                            <Link to={`/Update/hygiene/${item.id}`}>
                              <button className="btn btn-info">
                                Actualizar{" "}
                              </button>
                            </Link>

                            <button
                              style={{ marginLeft: "10px" }}
                              className="btn btn-danger"
                              onClick={() => deleteHygiene(item.id)}
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
              {error && (
                <Error_Not_Register></Error_Not_Register>
               
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hygiene;
