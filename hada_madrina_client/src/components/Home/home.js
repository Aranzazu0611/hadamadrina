import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <>

<div className="App">
        <div className="App-header">
        <div className="container-home">
         
            <h1 className="title-home">Bienvenido a la ONG-Hada Madrina</h1>
            <div className="container-button">
              <button type="button" class="btn btn-light margin-boton ">
                Register
              </button>
              <button type="button" class="btn btn-light ">
                Login
              </button>
              </div>
            
         
        </div>
      </div>
       </div>
        {/* <div className="App">
          <header className="App-header">
            <div className=""></div>
            <h1>ONG-Hada Madrina</h1>
            <div className="row">
              <button type="button" class="btn btn-light trans">
                Register
              </button>
              <button type="button" class="btn btn-light">
                Login
              </button>
            </div>
          </header>
        </div> */}
      </>
    );
  }
}

export default Home;
