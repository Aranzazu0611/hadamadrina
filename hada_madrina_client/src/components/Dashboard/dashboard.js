import React, { useEffect, useState } from "react";
import "./../../App.css";
import { Link } from "react-router-dom";
import NavbarDashboard from "../Navbar/navbarDashboard";
import Mother_Dasboard from "../Mother/mother_dashboard";
import Info_Entry_Dates from "./info_entry_dates";
import Info_Deparuture_Dates from "./info_deparutere._dates";

const Dasboard = () => {
 

  return (
    <>
     <NavbarDashboard></NavbarDashboard>
     <Mother_Dasboard></Mother_Dasboard>
     <Info_Entry_Dates></Info_Entry_Dates>
     <Info_Deparuture_Dates></Info_Deparuture_Dates>
      
    </>
  );
};

export default Dasboard;
