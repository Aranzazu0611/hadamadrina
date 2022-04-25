import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const  User = () =>{
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  

  const getUsers = async () => {
    await fetch("http://localhost:3003/api/user/")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result.reverse());
      });
  };
  
  const deleteUser = async (id) => {
    await fetch("http://localhost:3003/api/user/delete/" + id, {
      method: "DELETE",
    })
      .then((res) => getUsers()) 
      
  };

 

  return (
    <div className="container">
      <h2 className="text-center">User List</h2>
      <div className="row">
      <Link to="/register">

        <button className="col-1 btn btn-primary d-inline ">        
          Añadir User
        </button></Link>
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Id</th>
              <th> Nombre</th>
              <th> Apellido</th>
              <th> Email </th>
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
                <td> {user.volunteers_rol}</td>

                <td>
                  <button className="btn btn-info">Update </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
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

export default User;
