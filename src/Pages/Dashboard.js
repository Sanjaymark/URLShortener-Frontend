import React from "react";
import { Navbar } from "../Components/Navbar";

export const Dashboard = () =>{
    return <div>
        <Navbar/>
        <DashboardInfo/>
    </div>
};


function DashboardInfo ()
{
   return(
        <div>
            <h1>Welcome to URL Dashboard</h1>
        </div>
    ) 
}