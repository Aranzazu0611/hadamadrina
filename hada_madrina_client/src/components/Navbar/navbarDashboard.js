import React from "react";
import "./../../App.css";
import { Link, useNavigate } from "react-router-dom";

const NavbarDashboard = () => {

  const navigate = useNavigate();
 

  const logout = () => {
    localStorage.clear()
    navigate("/")
  }
  return (
    <>
       <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <Link to={`/dasboard`}>
          <span className="logo_name">Hada Madrina</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to={`/mother`}>
              <i className="bx bx-grid-alt"></i>

              <span className="links_name">Madres</span>
            </Link>
          </li>
          <li>
            <Link to={`/clothing`}>
              <i className="bx bx-box"></i>
              <span className="links_name">Ropa</span>
            </Link>
          </li>
          <li>
            <Link to={`/foods`}>
              <i className="bx bx-list-ul"></i>
              <span className="links_name">Comida</span>
            </Link>
          </li>
          <li>
            <Link to={`/furniture`}>
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Muebles</span>
            </Link>
          </li>
          <li>
            <Link to={`/hygiene`}>
              <i className="bx bx-coin-stack"></i>
              <span className="links_name">Higiene</span>
            </Link>
          </li>
          <li>
            <Link to={`/user`}>
              <i className="bx bx-book-alt"></i>
              <span className="links_name">Voluntarios</span>
            </Link>
          </li>
          <li>
          
          </li>
          <li className="log_out">
            <a href="#">
              <i className="bx bx-log-out"></i>
              <span className="links_name" onClick={() =>logout()}>Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarDashboard;
