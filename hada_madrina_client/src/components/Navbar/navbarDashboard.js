import React from "react";
import "./../../App.css";
import { Link, useNavigate } from "react-router-dom";
import {
  route_clothing_info,
  route_dashboard,
  route_foods_info,
  route_furniture,
  route_mother_screen,
  route_user,
} from "../../utils/url";

const NavbarDashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <Link to={route_dashboard}>
            <span className="logo_name">Hada Madrina</span>
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to={route_mother_screen}>
              <i className="bx bx-grid-alt"></i>

              <span className="links_name">Madres</span>
            </Link>
          </li>
          <li>
            <Link to={route_clothing_info}>
              <i className="bx bx-box"></i>
              <span className="links_name">Ropa</span>
            </Link>
          </li>
          <li>
            <Link to={route_foods_info}>
              <i className="bx bx-list-ul"></i>
              <span className="links_name">Comida</span>
            </Link>
          </li>
          <li>
            <Link to={route_furniture}>
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
            <Link to={route_user}>
              <i className="bx bx-book-alt"></i>
              <span className="links_name">Voluntarios</span>
            </Link>
          </li>
          <li></li>
          <li className="log_out">
            <a href="#">
              <i className="bx bx-log-out"></i>
              <span className="links_name" onClick={() => logout()}>
                Log out
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarDashboard;
