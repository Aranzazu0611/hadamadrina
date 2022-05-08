import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const loginUser = async(credentials) => {
    return await fetch("http://localhost:3003/api/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser({
        email,
        password,
      }).then((data) => {       
       
        if (data.length !== 0) {
          localStorage.setItem("id", data[0].id);
          localStorage.setItem("role", data[0].volunteers_rol);                  
          isRole() 
          
        }else{
          alert("Credenciales incorrectas")
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  function isRole(){
    const role = localStorage.getItem("role")
    if (role === "Administrativo") {
      return navigate("/mother") 
    }
    if (role === "Admin") {
      return navigate("/dashboard") 
    }
    if (role === "Almacén-ropa") {
      return navigate("/clothing") 
    }
    if (role === "Almacén-muebles") {
      return navigate("/furniture") 
    }
    if (role === "Almacén-higiene y utensilios") {
      return navigate("/hygiene") 
    }
    if (role === "Almacén-comida") {
      return navigate("/foods") 
    }
    
  }
 
  
  return ( 
    <>   
    <div className="signupFrm">
    <div className="wrapper">
    <form action="" className="form"  onSubmit={handleSubmit}>
      <h1 className="title">Login</h1>

      <div className="inputContainer">
        <input type="text" className="input" placeholder="a"   onChange={(e) => setEmail(e.target.value)}/>
        <label  className="label">Email</label>
      </div>      

      <div className="inputContainer">
        <input type="password" className="input" placeholder="a"  onChange={(e) => setPassword(e.target.value)}/>
        <label  className="label">Password</label>
      </div>
     

      <input type="submit" className="submitBtn" value="Sign up"/>
     
      
    </form>
    <input type="submit" className="submitBtn" value="Registrate" onClick={() => navigate("/register")}/>
    </div>
  </div>
  </>
  );
};

export default Login;
