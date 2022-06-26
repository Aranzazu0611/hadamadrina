import React from "react";
import { get_Info_Day_Mother, get_Info_Month_Mother, get_Info_Week_Mother } from "../../utils/url";
import useApiInfoDates from "../Custom/useApiInfoDates";
import "./../../App.css";
import Info_Deparuture_Dates from "./info_deparutere._dates";
import Info_Entry_Dates_Day from "./info_entry_dates_day";


const Mother_Dasboard = () => {
    
  const mother_month = useApiInfoDates(get_Info_Month_Mother)
  const mother_week = useApiInfoDates(get_Info_Week_Mother)
  const mother_day = useApiInfoDates(get_Info_Day_Mother)
  

  return (
    <>
     <section className="home-section">
        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Madres:</div>
                <div className="number">{mother_day}</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Hoy</span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Madres:</div>
                <div className="number">{mother_week}</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Semana</span>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Madres:</div>
                <div className="number">{mother_month}</div>
                <div className="indicator">
                  <i className="bx bx-up-arrow-alt"></i>
                  <span className="text">Mes</span>
                </div>
              </div>
              
            </div>
          </div>

          </div>
          <Info_Entry_Dates_Day></Info_Entry_Dates_Day>
          <Info_Deparuture_Dates></Info_Deparuture_Dates>
          </section>

          
            
     
    </>
  );
};

export default Mother_Dasboard;
