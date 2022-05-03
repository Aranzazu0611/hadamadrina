import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Error_Not_Register from "../Errors/error_not_register";
import Navbar from "../Navbar/navbar";

const Foods = () => {
  const navigate = useNavigate()
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    getFoods();
  }, []);

  const getFoods = async () => {
    await fetch("http://localhost:3003/api/foods/")
      .then((res) => res.json())
      .then((result) => {
        result.length > 0 ? setFoods(result.reverse()) : setError(true);

        
      });
  };

  const deleteFoods = async (id) => {
    await fetch("http://localhost:3003/api/foods/delete/" + id, {
      method: "DELETE",
    }).then(() =>  navigate(0));
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"></i>
            <span className="dashboard">Productos de Alimentación:</span>
          </div>

          <div>
            <Link to="/Register/Food">
              <button className="btn btn-primary d-inline ">Añadir item</button>
            </Link>
          </div>
        </nav>

        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Productos de Alimentación:</div>
              {foods.length > 0 && (
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
                      {foods.map((food) => (
                        <tr key={food.id}>
                          <td>{food.id}</td>
                          <td>{food.food_category}</td>
                          <td>{food.description}</td>
                          <td> {food.food_entry_date}</td>
                          <td> {food.food_departure_date}</td>

                          <td>
                            <Link to={`/Update/Food/${food.id}`}>
                              <button className="btn btn-info">
                                Actualizar{" "}
                              </button>
                            </Link>

                            <button
                              style={{ marginLeft: "10px" }}
                              className="btn btn-danger"
                              onClick={() => deleteFoods(food.id)}
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

export default Foods;
