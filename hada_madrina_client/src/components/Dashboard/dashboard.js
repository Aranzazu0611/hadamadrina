import React, { useEffect, useState } from "react";
import "./../../App.css";
import { Link } from "react-router-dom";
import NavbarDashboard from "../Navbar/navbarDashboard";
import Mother_Dasboard from "../Mother/mother_dashboard";

const Dasboard = () => {
  const [mother_month, setMother_month] = useState();
  const [mother_day, setMother_day] = useState();
  const [mother_week, setMother_week] = useState();
    
 
  useEffect(() => {
    getMother_month();
    getMother_day();
    getMother_week();

  }, []);

  const getMother_month = async () => {
    await fetch("http://localhost:3003/api/mothers/month")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0])      
        setMother_month(data[0]);
      });
  };

  const getMother_day = async () => {
    await fetch("http://localhost:3003/api/mothers/day")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0])      
        setMother_day(data[0]);
      });
  };

  const getMother_week = async () => {
    await fetch("http://localhost:3003/api/mothers/week")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0])      
        setMother_week(data[0]);
      });
  };





  return (
    <>
     <NavbarDashboard></NavbarDashboard>
     <Mother_Dasboard></Mother_Dasboard>
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
