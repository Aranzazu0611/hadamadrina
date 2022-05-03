import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Error_Not_Register from "../Errors/error_not_register";
import Navbar from "../Navbar/navbar";

const User = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    await fetch("http://localhost:3003/api/user/")
      .then((res) => res.json())
      .then((result) => {
        result.length > 0 ?  setUsers(result.reverse()) : setError(true);
       
      });
  };

  const deleteUser = async (id) => {
    await fetch("http://localhost:3003/api/user/delete/" + id, {
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
            <span className="dashboard">Usuarios:</span>
          </div>
          
        </nav>

        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Usuarios:</div>
              {users.length > 0 && (
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
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.surnames}</td>
                          <td> {user.email}</td>
                          <td> {user.phone}</td>
                          <td> {user.address}</td>
                          <td> {user.volunteers_rol}</td>
                          <td>
                            <Link to={`/Update/User/${user.id}`}>
                              <button className="btn btn-info">Editar</button>
                            </Link>

                            <button
                              style={{ marginLeft: "10px" }}
                              className="btn btn-danger"
                              onClick={() => deleteUser(user.id)}
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

export default User;
