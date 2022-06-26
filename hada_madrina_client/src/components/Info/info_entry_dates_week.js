import React, { useEffect, useState } from "react";
import { get_Info_Entry_Clothing_Week, get_Info_Entry_Food_Week, get_Info_Entry_Furniture_Week, get_Info_Entry_Hygiene_Week } from "../../utils/url";
import useApiInfoDates from "../Custom/useApiInfoDates";
import "./../../App.css";

const Info_Entry_Dates_Week = () => {
  
  const foodWeek = useApiInfoDates(get_Info_Entry_Food_Week)
  const furnitureWeek = useApiInfoDates(get_Info_Entry_Furniture_Week)
  const hygieneWeek = useApiInfoDates(get_Info_Entry_Hygiene_Week)
  const clothingWeek = useApiInfoDates(get_Info_Entry_Clothing_Week)
 

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
            <a href="">
              <span className="product">Almacén - Muebles </span>
            </a>
            <span className="price">{furnitureWeek}</span>
          </li>
          <li>
            <a href="">
              <span className="product">Almacén - Ropa</span>
            </a>
            <span className="price">{clothingWeek}</span>
          </li>
          <li>
            <a href="">
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
