import React from "react";
import { Link} from "react-router-dom";
import Navbar from "../Navbar/navbar";
import { format_date, message_not_register } from "../../utils/format_date";
import useApi from "../Custom/useApiGet";
import ErrorNotRegister from "../Errors/error_not_register";
import { delete_Mother_Url, get_Mother_Url,route_mother_info_screen, route_register_mother, route_update_mother_screen } from "../../utils/url";
import useApiDelete from "../Custom/useApiDelete";

const Mother = () => {
  const { data, loading, error } = useApi(get_Mother_Url);

  const deleteMothers = useApiDelete();
  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <Navbar></Navbar>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Madres:</span>
          </div>

          <div>
            <Link to={route_register_mother}>
              <button className="btn btn-primary d-inline ">
                Añadir Madre
              </button>
            </Link>
          </div>
        </nav>

        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Madres Registradas:</div>
              {data.length > 0 && (
                <div className="sales-details">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th> Id</th>
                        <th> Nombre</th>
                        <th> Apellidos</th>
                        <th> Edad</th>
                        <th> Email</th>
                        <th> Teléfono</th>
                        <th> Dirección</th>
                        <th> Nacionalidad</th>
                        <th> Fecha de Nacimiento</th>
                        <th> Estado civil</th>
                        <th> Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((mother) => (
                        <tr key={mother.id}>
                          <td>{mother.id}</td>
                          <td>{mother.name}</td>
                          <td>{mother.surnames}</td>
                          <td> {mother.age}</td>
                          <td> {mother.email}</td>
                          <td> {mother.phone}</td>
                          <td> {mother.address}</td>
                          <td> {mother.nationality}</td>
                          <td> {format_date(mother.mother_birth)}</td>
                          <td> {mother.civil_status}</td>

                          <td>
                          <Link to={`${route_mother_info_screen}${mother.id}`}>
                              <button
                                style={{ marginLeft: "10px" }}
                                className="badge rounded-pill bg-success"
                              >
                                Vista
                              </button>
                            </Link>
                            <Link to={`${route_update_mother_screen}${mother.id}`}>
                              <button style={{ marginLeft: "10px" }} className="badge rounded-pill bg-primary">Editar</button>
                            </Link>

                            <button
                              style={{ marginLeft: "10px" }}
                              className="badge rounded-pill bg-danger"
                              onClick={() =>
                                deleteMothers(`${delete_Mother_Url}${mother.id}`)
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

export default Mother;
