import React from "react";
import "./../../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">Hada Madrina</span>
        </div>
        <ul className="nav-links">
          <Link to={`/user`}>
            <li>
              <a href="#">
                <i className="bx bx-cog"></i>
                <span className="links_name">Setting</span>
              </a>
            </li>
          </Link>

          <li className="nav-links">
            <a href="#">
              <i className="bx bx-log-out"></i>
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
