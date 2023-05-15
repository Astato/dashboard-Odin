import React from "react";
import Calendar from "react-calendar"
import "./Custom-Calendar.css"
import { useState } from "react";


const Customcalendar = ()=>{
    const [date, setDate] = useState(new Date())
    return(
        <>
            <Calendar  onChange={setDate} value={date}></Calendar>
        </>
    )
}

export default Customcalendar;