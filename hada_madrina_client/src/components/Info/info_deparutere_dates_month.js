import React, { useEffect, useState } from "react";
import { get_Info_Departure_Clothing_month, get_Info_Departure_Food_month, get_Info_Departure_Furniture_month, get_Info_Departure_Hygiene_month } from "../../utils/url";
import useApiInfoDates from "../Custom/useApiInfoDates";
import "./../../App.css";

const Info_Departure_Dates_Month = () => {
  
  const foodMonth = useApiInfoDates(get_Info_Departure_Food_month)
  const furnitureMonth = useApiInfoDates(get_Info_Departure_Furniture_month)
  const hygieneMonth = useApiInfoDates(get_Info_Departure_Hygiene_month)
  const clothingMonth = useApiInfoDates(get_Info_Departure_Clothing_month)
  
  return (
    <>
      <div className="top-sales box">
        <div className="title">Salidas por mes:</div>
        <ul className="top-sales-details">
          <li>
           
              <span className="product">Almacén - Comida</span>
          
            <span className="price">{foodMonth}</span>
          </li>
          <li>
           
              <span className="product">Almacén - Muebles </span>
          
            <span className="price">{furnitureMonth}</span>
          </li>
          <li>
          
              <span className="product">Almacén - Ropa</span>
           
            <span className="price">{clothingMonth}</span>
          </li>
          <li>
           
              <span className="product">Almacén - Higiene</span>
           
            <span className="price">{hygieneMonth}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Info_Departure_Dates_Month;
