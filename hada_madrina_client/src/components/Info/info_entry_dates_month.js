import React, { useEffect, useState } from "react";
import {
  get_Info_Entry_Clothing_Month,
  get_Info_Entry_Food_Month,
  get_Info_Entry_Furniture_Month,
  get_Info_Entry_Hygiene_Month,
} from "../../utils/url";
import useApiInfoDates from "../Custom/useApiInfoDates";
import "./../../App.css";

const Info_Entry_Dates_Month = () => {
  const foodMonth = useApiInfoDates(get_Info_Entry_Food_Month);
  const furnitureMonth = useApiInfoDates(get_Info_Entry_Furniture_Month);
  const hygieneMonth = useApiInfoDates(get_Info_Entry_Hygiene_Month);
  const clothingMonth = useApiInfoDates(get_Info_Entry_Clothing_Month);

  return (
    <>
      <div className="top-sales box">
        <div className="title">Entradas por mes:</div>
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

export default Info_Entry_Dates_Month;
