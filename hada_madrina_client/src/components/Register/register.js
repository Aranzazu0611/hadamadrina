import React from 'react'

export default function Register() {
    

   
        return ( 
        // <div className="register">
        // <div className="register__top">Register</div>
        //     <form className="register__form" >             
        //         <input className="register__input" type="text" name="name" placeholder="name" required  />
        //         <input className="register__input" type="text" name="surname" placeholder="surname" required />
        //         <input className="register__input" type="email" name="email" placeholder="e-mail" required />
        //         <input className="register__input" type="phone" name="phone" placeholder="phone" required />
        //         <input className="register__input" type="text" name="address" placeholder="address" required />
        //         <input className="register__input" type="password" name="password" placeholder="password" required maxLength="8" />
        //         <input className="register__input" type="text" name="rol" placeholder="rol" required />
        //         <button className="register__button" >Submit</button>
           
        //     </form>
        //     </div> 

        <div className="App">
        <div className="App-header">
        <div className="container w-75 ">
          <form className="baby-login form-signin container_color rounded shadow">
            <h1 className="title-register">Register</h1>
            <label >Name</label>
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Insert Name here"
              required=""
              autoFocus=""
            />
            <label >Surname</label>
            <input
              type="text"
              id="inputName"
              className="form-control"
              placeholder="Insert Name here"
              required=""
              autoFocus=""
            />
            <label >Email</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email"
              required=""
              autoFocus=""
            />
            <label>Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Insert Password here"
              required=""
            />
            <button className="btn btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
       </div>
            
            );
    
}
 
