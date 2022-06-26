import React from "react";
import { Link} from "react-router-dom";
import Navbar from "../Navbar/navbar";
import { format_date, message_not_register } from "../../utils/format_date";
import useApi from "../Custom/useApiGet";
import ErrorNotRegister from "../Errors/error_not_register";
import { delete_Foods_Url, get_Foods_Url, route_register_food, route_update_food_screen } from "../../utils/url";
import useApiDelete from "../Custom/useApiDelete";

const Foods = () => {
 
  
  const { data, loading, error } = useApi(get_Foods_Url);
  const deleteFoods = useApiDelete();

  if (loading) return <h1>Loading</h1>;

  

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
            <Link to={route_register_food}>
              <button className="btn btn-primary d-inline ">Añadir item</button>
            </Link>
          </div>
        </nav>

        <div className="home-content">
          <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">Productos de Alimentación:</div>
              {data.length > 0 && (
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
                      {data.map((food) => (
                        <tr key={food.id}>
                          <td>{food.id}</td>
                          <td>{food.food_category}</td>
                          <td>{food.description}</td>
                          <td> {format_date(food.food_entry_date)}</td>
                          <td> {format_date(food.food_departure_date)}</td>

                          <td>
                            <Link to={`${route_update_food_screen}${food.id}`}>
                              <button className="badge rounded-pill bg-success">
                               Editar
                              </button>
                            </Link>

                            <button
                              style={{ marginLeft: "10px" }}
                              className="badge rounded-pill bg-danger"
                              onClick={() => deleteFoods(`${delete_Foods_Url}${food.id}`)}
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

export default Foods;
