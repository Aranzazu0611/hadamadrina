import React from "react";
import "./../../App.css";
import { Link } from "react-router-dom";

const Dasboard = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">Hada Madrina</span>
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
      <section className="home-section">
        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Madres:</div>
                <div className="number">40,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Hoy</span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Madres:</div>
                <div className="number">40,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Semana</span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Madres:</div>
                <div className="number">40,876</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Mes</span>
                </div>
              </div>
              <i className="bx bx-cart-alt cart"></i>
            </div>
          </div>

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

          <div className="sales-boxes">
            <div className="top-sales box">
              <div className="title">Salidas por día:</div>
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
            <div className="top-sales box">
              <div className="title">Salidas por semana:</div>
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
              <div className="title">Salidas por Mes:</div>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Dasboard;
