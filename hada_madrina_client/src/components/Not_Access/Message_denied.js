import React from "react";
import Navbar from "../Navbar/navbar";

export const Message_denied = () => {
  return (
      <><Navbar></Navbar><section className="home-section">
          <div className="home-content">
              <div className="sales-boxes">
                  <div className="recent-sales box">
                      <div className="title">No tiene permiso para estar aquí</div>
                  </div>
              </div>
          </div>
      </section></>
  );
};
