import React from "react";
//import Customcalendar from "./Calendar";




const DashboardItem = ()=>{
return(
<div id="Dashboard-item">
    <h4>Title</h4>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ducimus consequuntur quas adipisci et nesciunt explicabo 
        atque minima aliquam labore ut?</p>
</div>
)

}



const Dashboard = ()=>{

    return(
        <section id="Dashboard">
            <DashboardItem></DashboardItem>
            <DashboardItem></DashboardItem>
            <DashboardItem></DashboardItem>
            <DashboardItem></DashboardItem>
            <DashboardItem></DashboardItem>
            <DashboardItem></DashboardItem>
            <DashboardItem></DashboardItem>
            <DashboardItem></DashboardItem>
            <DashboardItem></DashboardItem>
           
        </section>
    
    )
}



export default Dashboard;