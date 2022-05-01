import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";

const Funiture = () => {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    getFunitures();
  }, []);

  const getFunitures = async () => {
    await fetch("http://localhost:3003/api/furniture/")
      .then((res) => res.json())
      .then((result) => {
        setFurniture(result.reverse());
      });
  };

  const deleteFunitures = async (id) => {
    await fetch("http://localhost:3003/api/furniture/delete/" + id, {
      method: "DELETE",
    }).then(() => getFunitures());
  };

  const formatDate = (date) => {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString([], options);
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="home-section">
        <div className="container">
          <h2 className="text-center">Furniture List</h2>
          <div className="row">
            <Link to="/Register/Food">
              <button className="col-2 btn btn-primary d-inline ">
                Añadir item
              </button>
            </Link>
          </div>
          <br></br>
          <div className="row">
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
                        <button className="btn btn-info">Actualizar </button>
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
        </div>
      </section>
    </>
  );
};

export default Funiture;
