import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import { format_date, message_not_register } from "../../utils/format_date";
import ErrorNotRegister from "../Errors/error_not_register";
import useApi from "../Custom/useApiGet";
import { delete_Hygiene_Url, get_Hygiene_Url, route_register_hygiene, route_update_hygiene_screen } from "../../utils/url";
import useApiDelete from "../Custom/useApiDelete";

const Hygiene = () => {
  const { data, loading, error } = useApi(get_Hygiene_Url);
  const deleteHygiene = useApiDelete();

  if (loading) return <h1>Loading</h1>;

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
            <Link to={route_register_hygiene}>
              <button className="btn btn-primary d-inline ">Añadir item</button>
            </Link>
          </div>
        </nav>

        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Productos de higiene:</div>
              {data.length > 0 && (
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
                      {data.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.hygiene_category}</td>
                          <td>{item.description}</td>
                          <td> {item.brand}</td>
                          <td> {format_date(item.hygiene_entry_date)}</td>
                          <td> {format_date(item.hygiene_departure_date)}</td>

                          <td>
                            <Link to={`${route_update_hygiene_screen}${item.id}`}>
                              <button className="btn btn-info">
                                Actualizar
                              </button>
                            </Link>

                            <button
                              style={{ marginLeft: "10px" }}
                              className="btn btn-danger"
                              onClick={() =>
                                deleteHygiene(delete_Hygiene_Url, item.id)
                              }
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
                <ErrorNotRegister
                  message={message_not_register}
                ></ErrorNotRegister>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hygiene;
