import React, { useEffect, useState } from "react";
import "./../../App.css";

const Info_Entry_Dates = () => {
  

  return (
    <section className="home-section">
      <div className="home-content">
        <div className="sales-boxes">
          <div className="top-sales box">
            <div className="title">Entradas por día:</div>
            <ul className="top-sales-details">
              <li>
                <a href="#">
                  <span className="product">Almacén - Comida</span>
                </a>
                <span className="price">$1107</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén - Muebles </span>
                </a>
                <span className="price">$1567</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén - Ropa</span>
                </a>
                <span className="price">$1234</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén Higiene</span>
                </a>
                <span className="price">$2312</span>
              </li>
            </ul>
          </div>
          <div className="top-sales box">
            <div className="title">Entradas por semana:</div>
            <ul className="top-sales-details">
              <li>
                <a href="#">
                  <span className="product">Almacén - Comida</span>
                </a>
                <span className="price">$1107</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén - Muebles </span>
                </a>
                <span className="price">$1567</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén - Ropa</span>
                </a>
                <span className="price">$1234</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén Higiene</span>
                </a>
                <span className="price">$2312</span>
              </li>
            </ul>
          </div>
          <div className="top-sales box">
            <div className="title">Entradas por Mes:</div>
            <ul className="top-sales-details">
              <li>
                <a href="#">
                  <span className="product">Almacén - Comida</span>
                </a>
                <span className="price">$1107</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén - Muebles </span>
                </a>
                <span className="price">$1567</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén - Ropa</span>
                </a>
                <span className="price">$1234</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén - Higiene</span>
                </a>
                <span className="price">$2312</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info_Entry_Dates;
