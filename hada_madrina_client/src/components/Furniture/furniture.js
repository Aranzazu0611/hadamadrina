import React from "react";
import { Link } from "react-router-dom";
import { format_date, message_not_register } from "../../utils/format_date";
import useApi from "../Custom/useApiGet";
import ErrorNotRegister from "../Errors/error_not_register";
import { delete_Furniture_Url, get_Furniture_Url, route_register_furniture, route_update_furniture_screen } from "../../utils/url";
import useApiDelete from "../Custom/useApiDelete";
import NavbarDashboard from "../Navbar/navbarDashboard";

const Funiture = () => {
  
  const { data, loading, error } = useApi(get_Furniture_Url);
  const deleteFunitures = useApiDelete();

  if (loading) return <h1>Loading</h1>;

 

  return (
    <>
      <NavbarDashboard></NavbarDashboard>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Artículos y Muebles:</span>
          </div>

          <div>
            <Link to={route_register_furniture}>
              <button className="btn btn-primary d-inline ">Añadir item</button>
            </Link>
          </div>
        </nav>

        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Artículos:</div>
              {data.length > 0 && (
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
                      {data.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.furniture_category}</td>
                          <td>{item.description}</td>
                          <td> {item.state}</td>
                          <td> {format_date(item.furniture_entry_date)}</td>
                          <td> {format_date(item.furniture_departure_date)}</td>

                          <td>
                            <Link to={`${route_update_furniture_screen}${item.id}`}>
                              <button className="badge rounded-pill bg-success">Editar </button>
                            </Link>
                            <button
                              style={{ marginLeft: "10px" }}
                              className="badge rounded-pill bg-danger"
                              onClick={() => deleteFunitures(`${delete_Furniture_Url}${item.id}`)}
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

export default Funiture;
