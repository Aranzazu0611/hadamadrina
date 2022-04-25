import React, { useEffect, useState } from "react";

const Hygiene = () => {
  const [hygiene, setHygiene] = useState([]);
  useEffect(() => {
    getHygiene();
  }, []);

  const getHygiene = async () => {
    await fetch("http://localhost:3003/api/hygiene/")
      .then((res) => res.json())
      .then((result) => {
          console.log(result)
        setHygiene(result.reverse());
      });
  };

  const deleteHygiene = async (id) => {
    await fetch("http://localhost:3003/api/hygiene/delete/" + id, {
      method: "DELETE",
    }).then((res) => getHygiene());
  };

  return (
    <div className="container">
      <h2 className="text-center">Hygiene List</h2>
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
                  <button className="btn btn-info">Update </button>
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
    </div>
  );
};

export default Hygiene;