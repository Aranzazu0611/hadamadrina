import React from "react";
import NavbarDashboard from "../Navbar/navbarDashboard";

export const Message_denied = () => {
  return (
      <><NavbarDashboard></NavbarDashboard>
      <section className="home-section">
          <div className="home-content">
              <div className="sales-boxes">
                  <div className="recent-sales box">
                      <div className="title">No tienes permiso de Admin</div>
                  </div>
              </div>
          </div>
      </section></>
  );
};
