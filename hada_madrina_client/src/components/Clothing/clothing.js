import React from "react";
import { Link } from "react-router-dom";
import { format_date, message_not_register } from "../../utils/format_date";
import ErrorNotRegister from "../Errors/error_not_register";
import useApi from "../Custom/useApiGet";
import { delete_Clothing_Url, get_Clothing_Url, route_register_clothing, route_update_clothing_screen } from "../../utils/url";
import useApiDelete from "../Custom/useApiDelete";
import NavbarDashboard from "../Navbar/navbarDashboard";

const Clothing = () => {
  const { data, loading, error } = useApi(
    get_Clothing_Url
  );

  const deleteInfo = useApiDelete();
  if (loading) return <h1>Loading</h1>;

 

  return (
    <>
     <NavbarDashboard></NavbarDashboard>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Artículos de Ropa:</span>
          </div>

          <div>
            <Link to={`${route_register_clothing}`}>
              <button className="btn btn-primary d-inline ">Añadir item</button>
            </Link>
          </div>
        </nav>

        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Ropa:</div>
              {data.length > 0 && (
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
                      {data.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.clothing_category}</td>
                          <td>{item.description}</td>
                          <td> {item.colour}</td>
                          <td> {item.size}</td>
                          <td> {item.gender}</td>
                          <td> {item.age}</td>
                          <td> {format_date(item.clothing_entry_date)}</td>
                          <td> {format_date(item.clothing_departure_date)}</td>

                          <td>
                            <Link to={`${route_update_clothing_screen}${item.id}`}>
                              <button className="badge rounded-pill bg-success">Editar</button>
                            </Link>

                            <button
                              style={{ marginLeft: "10px" }}
                              className="badge rounded-pill bg-danger"
                              onClick={() => deleteInfo(`${delete_Clothing_Url}${item.id}`)}
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

export default Clothing;
