import React, { useEffect, useState } from "react";
import "./../../App.css";
import Info_Deparuture_Dates from "./info_deparutere._dates";
import Info_Entry_Dates_Day from "./info_entry_dates_day";


const Mother_Dasboard = () => {
  const [mother_month, setMother_month] = useState();
  const [mother_day, setMother_day] = useState();
  const [mother_week, setMother_week] = useState();
    
 
  useEffect(() => {
    getMother_month();
    getMother_day();
    getMother_week();

  }, []);

  const getMother_month = async () => {
    await fetch("http://localhost:3003/api/mothers/month")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0])      
        setMother_month(data[0]);
      });
  };

  const getMother_day = async () => {
    await fetch("http://localhost:3003/api/mothers/day")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0])      
        setMother_day(data[0]);
      });
  };

  const getMother_week = async () => {
    await fetch("http://localhost:3003/api/mothers/week")
      .then((res) => res.json())
      .then((result) => {
        const data = Object.values(result[0])      
        setMother_week(data[0]);
      });
  };





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
