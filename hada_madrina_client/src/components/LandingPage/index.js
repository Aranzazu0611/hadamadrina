import React, { Component } from "react";
import { Link } from 'react-router-dom'

import "./style.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="text-center align-items-center info">
          <div className="row">
            <div className="col-sm-12">
              <h1>Bienvenido a la ONG-Hada Madrina</h1>
              <h5>
                Registrate y colabora con nosotros, si ya eres voluntario haz
                login
              </h5>
              <Link to="/register">
                <button type="button" class="btn btn-danger ">
                  Registrar
                </button>
              </Link>
              <Link to="/login">
                <button type="button" class="btn btn-danger ">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
