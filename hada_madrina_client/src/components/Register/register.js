import React, {useState} from "react";

const Register =() => {

  const [name, setName] = useState();
  const [surnames, setSurnames] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [volunteers_rol, setVolunteers_rol] = useState();

  const registerUser = async(credentials) => {
    return await fetch("http://localhost:3003/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    
    }).then((data) => data.json()
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await registerUser({
        name,
        surnames,
        email,
        phone,
        address,
        password,
        volunteers_rol
      }).then((data) => {
        console.log(data)
        window.location.href = "/";
        
      });
    } catch (error) {
      console.log(error);
    }
  };
  
 
  return (
    <div className="App">
      <div className="App-header">
        <div className="container w-75 ">
          <form className="baby-login form-signin container_color rounded shadow" onSubmit={handleSubmit}>
            <h1 className="title-register">Register</h1>
            <label>Nombre</label>
            <input
              type="text"
              id="Name"
              className="form-control"
              placeholder="Nombre"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              
            />
            <label>Apellidos</label>
            <input
              type="text"
              id="Surnames"
              className="form-control"
              placeholder="Apellidos"
              value={surnames}
              required
              onChange={(e) => setSurnames(e.target.value)}
              
            />
            <label>Email</label>
            <input
              type="email"
              id="Email"
              className="form-control"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              
            />
             <label>Teléfono</label>
            <input
              type="tel"
              id="phone"
              className="form-control"
              placeholder="Teléfono"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
              
            />
             <label>Dirección</label>
            <input
              type="text"
              id="Address"
              className="form-control"
              placeholder="Dirección"             
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
              
            />
            <label>Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div class="form-group">
              <label for="role">Select Role:</label>
              <select class="form-control" id="role" value={volunteers_rol}  onChange={(e) => setVolunteers_rol(e.target.value)}>
                <option>Administrativo</option>
                <option>Almacén-ropa</option>
                <option>Almacén-muebles</option>
                <option>Almacén-higiene y utensilios</option>
                <option>Almacén-comida</option>                
              </select>
            </div>
            <button className="btn btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
