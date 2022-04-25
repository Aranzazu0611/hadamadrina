import React, { useEffect, useState } from "react";

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
    }).then((res) => getFunitures());
  };

  return (
    <div className="container">
      <h2 className="text-center">Childrens List</h2>
      <div className="row">
        <button className="col-2 btn btn-primary d-inline ">Añadir Niño</button>
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
                <td> {item.furniture_entry_date}</td>
                <td> {item.furniture_departure_date}</td>

                <td>
                  <button className="btn btn-info">Update </button>
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
  );
};

export default Funiture;
