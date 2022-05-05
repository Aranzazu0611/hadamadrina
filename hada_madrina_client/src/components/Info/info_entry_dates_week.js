import React, { useEffect, useState } from "react";
import "./../../App.css";

const Info_Entry_Dates_Week = () => {
  const [foodWeek, setFoodWeek] = useState();
  const [furnitureWeek, setFurnitureWeek] = useState();
  const [hygieneWeek, setHigieneWeek] = useState();
  const [clothingWeek, setClothingWeek] = useState();

  useEffect(() => {
    getFoodsWeek();
    getFurnitureWeek();
    getHygieneWeek();
    getClothingWeek();
  }, []);

  const getFoodsWeek = async () => {
    await fetch("http://localhost:3003/api/foods/entry/week")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0]);
        setFoodWeek(data[0]);
      });
  };

  const getFurnitureWeek = async () => {
    await fetch("http://localhost:3003/api/furniture/entry/week")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0]);
        setFurnitureWeek(data[0]);
      });
  };

  const getHygieneWeek = async () => {
    await fetch("http://localhost:3003/api/hygiene/entry/week")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0]);
        setHigieneWeek(data[0]);
      });
  };

  const getClothingWeek = async () => {
    await fetch("http://localhost:3003/api/clothing/entry/week")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0]);
        setClothingWeek(data[0]);
      });
  };

  return (
    <>
      <div className="top-sales box">
        <div className="title">Entradas por semana:</div>
        <ul className="top-sales-details">
          <li>
            <a href="#">
              <span className="product">Almacén - Comida</span>
            </a>
            <span className="price">{foodWeek}</span>
          </li>
          <li>
            <a href="#">
              <span className="product">Almacén - Muebles </span>
            </a>
            <span className="price">{furnitureWeek}</span>
          </li>
          <li>
            <a href="#">
              <span className="product">Almacén - Ropa</span>
            </a>
            <span className="price">{clothingWeek}</span>
          </li>
          <li>
            <a href="#">
              <span className="product">Almacén - Higiene</span>
            </a>
            <span className="price">{hygieneWeek}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Info_Entry_Dates_Week;
