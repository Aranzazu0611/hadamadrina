import React, { useEffect, useState } from "react";
import "./../../App.css";

const Info_Departure_Dates_Month = () => {
  const [foodMonth, setFoodMonth] = useState();
  const [furnitureMonth, setFurnitureMonth] = useState();
  const [hygieneMonth, setHigieneMonth] = useState();
  const [clothingMonth, setClothingMonth] = useState();

  useEffect(() => {
    getFoodsWeek();
    getFurnitureWeek();
    getHygieneWeek();
    getClothingWeek();
  }, []);

  const getFoodsWeek = async () => {
    await fetch("http://localhost:3003/api/foods/departure/month")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0]);
        setFoodMonth(data[0]);
      });
  };

  const getFurnitureWeek = async () => {
    await fetch("http://localhost:3003/api/furniture/departure/month")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0]);
        setFurnitureMonth(data[0]);
      });
  };

  const getHygieneWeek = async () => {
    await fetch("http://localhost:3003/api/hygiene/departure/month")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0]);
        setHigieneMonth(data[0]);
      });
  };

  const getClothingWeek = async () => {
    await fetch("http://localhost:3003/api/clothing/departure/month")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0]);
        setClothingMonth(data[0]);
      });
  };

  return (
    <>
      <div className="top-sales box">
        <div className="title">Salidas por mes:</div>
        <ul className="top-sales-details">
          <li>
            <a href="#">
              <span className="product">Almacén - Comida</span>
            </a>
            <span className="price">{foodMonth}</span>
          </li>
          <li>
            <a href="#">
              <span className="product">Almacén - Muebles </span>
            </a>
            <span className="price">{furnitureMonth}</span>
          </li>
          <li>
            <a href="#">
              <span className="product">Almacén - Ropa</span>
            </a>
            <span className="price">{clothingMonth}</span>
          </li>
          <li>
            <a href="#">
              <span className="product">Almacén - Higiene</span>
            </a>
            <span className="price">{hygieneMonth}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Info_Departure_Dates_Month;
