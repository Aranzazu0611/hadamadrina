import React, { useEffect, useState } from "react";
import "./../../App.css";
import Info_Entry_Dates_Month from "./info_entry_dates_month";
import Info_Entry_Dates_Week from "./info_entry_dates_week";

const Info_Entry_Dates_Day = () => {
  const [foodDay, setFoodDay] = useState();
  const [furnitureDay, setFurnitureDay] = useState();
  const [HygieneDay, setHigieneDay] = useState();
  const [clothingDay, setClothingDay] = useState();
  

  useEffect(() => {
    getFoodsDay();
    getFurnitureDay();
    getHygieneDay();
    getClothingDay();

  }, []);

  const getFoodsDay = async () => {
    await fetch("http://localhost:3003/api/foods/entry/day")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0]);
        setFoodDay(data[0]);
      });
  };

    const getFurnitureDay = async () => {
      await fetch("http://localhost:3003/api/furniture/entry/day")
        .then((res) => res.json())
        .then((result) => {
          const data = Object.values(result[0]);
          setFurnitureDay(data[0]);
        });
    };

    const getHygieneDay = async () => {
      await fetch("http://localhost:3003/api/hygiene/entry/day")
        .then((res) => res.json())
        .then((result) => {
          const data = Object.values(result[0]);
          setHigieneDay(data[0]);
        });
    };

    const getClothingDay = async () => {
        await fetch("http://localhost:3003/api/clothing/entry/day")
          .then((res) => res.json())
          .then((result) => {
            const data = Object.values(result[0]);
            setClothingDay(data[0]);
          });
      };

  return (
    <>
    
      <div className="home-content">
        <div className="sales-boxes">
          <div className="top-sales box">
            <div className="title">Entradas por día:</div>
            <ul className="top-sales-details">
              <li>
                <a href="#">
                  <span className="product">Almacén - Comida</span>
                </a>
                <span className="price">{foodDay}</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén - Muebles </span>
                </a>
                <span className="price">{furnitureDay}</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén - Ropa</span>
                </a>
                <span className="price">{clothingDay}</span>
              </li>
              <li>
                <a href="#">
                  <span className="product">Almacén - Higiene</span>
                </a>
                <span className="price">{HygieneDay}</span>
              </li>
            </ul>
          </div>
          
          <Info_Entry_Dates_Week></Info_Entry_Dates_Week>
         <Info_Entry_Dates_Month></Info_Entry_Dates_Month>
        </div>
      </div>
    
    </>
  );
};

export default Info_Entry_Dates_Day;
