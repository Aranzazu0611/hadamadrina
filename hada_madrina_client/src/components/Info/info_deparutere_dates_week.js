import React, { useEffect, useState } from "react";
import { get_Info_Departure_Clothing_week, get_Info_Departure_Food_week, get_Info_Departure_Furniture_week, get_Info_Departure_Hygiene_week } from "../../utils/url";
import useApiInfoDates from "../Custom/useApiInfoDates";
import "./../../App.css";

const Info_Departure_Dates_Week = () => {
  const foodWeek = useApiInfoDates(get_Info_Departure_Food_week)
  const furnitureWeek = useApiInfoDates(get_Info_Departure_Furniture_week)
  const hygieneWeek = useApiInfoDates(get_Info_Departure_Hygiene_week)
  const clothingWeek = useApiInfoDates(get_Info_Departure_Clothing_week)

  return (
    <>
      <div className="top-sales box">
        <div className="title">Salidas por semana:</div>
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

export default Info_Departure_Dates_Week;
