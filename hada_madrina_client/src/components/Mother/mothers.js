import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error_Not_Register from "../Errors/error_not_register";
import Navbar from "../Navbar/navbar";

const Mother = () => {
  const navigate = useNavigate();
  const [mothers, setMothers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMothers();
  }, []);

  const getMothers = async () => {
    await fetch("http://localhost:3003/api/mothers/")
      .then((res) => res.json())
      .then((result) => {
        result.length > 0 ? setMothers(result.reverse()) : setError(true);
      });
  };

  const deleteMothers = async (id) => {
    await fetch("http://localhost:3003/api/mother/delete/" + id, {
      method: "DELETE",
    }).then((res) => navigate(0));
  };

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
            <Link to="/Register/Mother">
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
              {mothers.length > 0 && (
                <div className="sales-details">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th> Id</th>
                        <th> Categoria</th>
                        <th> Descripción</th>
                        <th> Fecha de entrada</th>
                        <th> Fecha de salida</th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mothers.map((mother) => (
                        <tr key={mother.id}>
                          <td>{mother.id}</td>
                          <td>{mother.name}</td>
                          <td>{mother.surnames}</td>
                          <td> {mother.age}</td>
                          <td> {mother.email}</td>
                          <td> {mother.phone}</td>
                          <td> {mother.address}</td>
                          <td> {mother.nationality}</td>
                          <td> {mother.mother_birth}</td>
                          <td> {mother.civil_status}</td>

                          <td>
                            <Link to={`/Update/Mother/${mother.id}`}>
                              <button className="btn btn-info">Edit</button>
                            </Link>

                            <button
                              style={{ marginLeft: "10px" }}
                              className="btn btn-danger"
                              onClick={() => deleteMothers(mother.id)}
                            >
                              Borrar
                            </button>
                            <Link to={`/children/${mother.id}`}>
                              <button
                                style={{ marginLeft: "10px" }}
                                className="btn btn-info"
                              >
                                View
                              </button>
                            </Link>
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

export default Mother;
