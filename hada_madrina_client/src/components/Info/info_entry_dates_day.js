import React from "react";
import { get_Info_Entry_Clothing, get_Info_Entry_Clothing_day, get_Info_Entry_Food, get_Info_Entry_Food_day, get_Info_Entry_Furniture, get_Info_Entry_Furniture_day, get_Info_Entry_Hygiene, get_Info_Entry_Hygiene_day } from "../../utils/url";
import useApiInfoDates from "../Custom/useApiInfoDates";
import "./../../App.css";
import Info_Entry_Dates_Month from "./info_entry_dates_month";
import Info_Entry_Dates_Week from "./info_entry_dates_week";

const Info_Entry_Dates_Day = () => {

  const foodDay = useApiInfoDates(get_Info_Entry_Food_day)
  const furnitureDay = useApiInfoDates(get_Info_Entry_Furniture_day)
  const HygieneDay = useApiInfoDates(get_Info_Entry_Hygiene_day)
  const clothingDay = useApiInfoDates(get_Info_Entry_Clothing_day)

  
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
