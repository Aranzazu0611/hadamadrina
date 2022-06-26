import React, { useEffect, useState } from "react";
import { get_Info_Departure_Clothing_day, get_Info_Departure_Food_day, get_Info_Departure_Furniture_day, get_Info_Departure_Hygiene_day } from "../../utils/url";
import useApiInfoDates from "../Custom/useApiInfoDates";
import "./../../App.css";
import Info_Departure_Dates_Month from "./info_deparutere_dates_month";
import Info_Departure_Dates_Week from "./info_deparutere_dates_week";

const Info_Deparuture_Dates = () => {
  const foodDay = useApiInfoDates(get_Info_Departure_Food_day)
  const furnitureDay = useApiInfoDates(get_Info_Departure_Furniture_day)
  const hygieneDay = useApiInfoDates(get_Info_Departure_Hygiene_day)
  const clothingDay = useApiInfoDates(get_Info_Departure_Clothing_day)

  return (
    <div className="home-content">
      <div className="sales-boxes">
        <div className="top-sales box">
          <div className="title">Salidas por día:</div>
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
              <span className="price">{hygieneDay}</span>
            </li>
          </ul>
        </div>
        <Info_Departure_Dates_Week></Info_Departure_Dates_Week>
        <Info_Departure_Dates_Month></Info_Departure_Dates_Month>
      </div>
    </div>
  );
};

export default Info_Deparuture_Dates;
