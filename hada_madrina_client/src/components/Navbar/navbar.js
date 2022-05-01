import React from "react";
import "./../../App.css";

const Navbar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">Hada Madrina</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" >
              <i className="bx bx-grid-alt"></i>
              <span className="links_name">User:</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-box"></i>
              <span className="links_name">Role:</span>
            </a>
          </li>          
          <li>
            <a href="#">
              <i className="bx bx-cog"></i>
              <span className="links_name">Setting</span>
            </a>
          </li>
          <li className="log_out">
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
