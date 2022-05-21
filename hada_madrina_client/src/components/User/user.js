import React from "react";
import { Link } from "react-router-dom";
import { message_not_register } from "../../utils/format_date";
import useApiGet from "../../components/Custom/useApiGet";
import ErrorNotRegister from "../Errors/error_not_register";
import Navbar from "../Navbar/navbar";
import useApiDelete from "../../components/Custom/useApiDelete";
import { delete_User_Url, get_User_Url,route_user_update_sreen } from "../../utils/url";


const User = () => {
  const { data, loading, error } = useApiGet(get_User_Url);
  const deleteUser = useApiDelete();

  if (loading) return <h1>Loading</h1>;

  return (
    <>
      <Navbar></Navbar>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Usuarios</span>
          </div>
        </nav>

        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Lista de Usuarios:</div>
              {data.length > 0 && (
                <div className="sales-details">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th> Id</th>
                        <th> Nombre</th>
                        <th> Apellido</th>
                        <th> Email </th>
                        <th> Teléfono </th>
                        <th> Dirección </th>
                        <th> Role</th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.surnames}</td>
                          <td> {user.email}</td>
                          <td> {user.phone}</td>
                          <td> {user.address}</td>
                          <td> {user.volunteers_rol}</td>
                          <td>
                            <Link to={`${route_user_update_sreen}${user.id}`}>
                              <button className="btn btn-info">Editar</button>
                            </Link>

                            <button
                              style={{ marginLeft: "10px" }}
                              className="btn btn-danger"
                              onClick={() =>
                                deleteUser(
                                  delete_User_Url,
                                  user.id
                                )
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

export default User;
