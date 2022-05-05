import React from "react";
import "./../../App.css";

import NavbarDashboard from "../Navbar/navbarDashboard";
import Mother_Dasboard from "../Info/mother_dashboard";

import Info_Deparuture_Dates from "../Info/info_deparutere._dates";
import Info_Entry_Dates_Day from "../Info/info_entry_dates_day";
import Info_Entry_Dates_Week from "../Info/info_entry_dates_week";

const Dasboard = () => {
 

  return (
    <>
     <NavbarDashboard></NavbarDashboard>
     <section className="home-section">

     <Mother_Dasboard></Mother_Dasboard>
    
     <Info_Entry_Dates_Day></Info_Entry_Dates_Day>
     
    
     <Info_Deparuture_Dates></Info_Deparuture_Dates>
          
   
     
     </section>
    </>
  );
};

export default Dasboard;
