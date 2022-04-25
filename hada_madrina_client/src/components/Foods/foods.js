import React, { useEffect, useState } from "react";


const  Foods = () =>{
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    getFoods();
  }, []);
  

  const  getFoods = async () => {
    await fetch("http://localhost:3003/api/foods/")
      .then((res) => res.json())
      .then((result) => {
     
        setFoods(result.reverse());
      });
  };
  
  const deleteFoods = async (id) => {
    await fetch("http://localhost:3003/api/foods/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => getFoods()) 
      
  };

 

  return (
    <div className="container">
      <h2 className="text-center">
          Foods List</h2>
      <div className="row">
        <button className="col-2 btn btn-primary d-inline ">        
          Añadir Alimento
        </button>
      </div>
      <br></br>
      <div className="row">
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
                  <button className="btn btn-info">Update </button>
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
    </div>
  );
}

export default Foods;