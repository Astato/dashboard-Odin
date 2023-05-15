import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";


const searchIcon = <FontAwesomeIcon id="icon" icon={faMagnifyingGlass} />

const Header =() =>{

    return(
        <section id="Header">
        <p >{searchIcon}</p>
        <input id="search-field" type="text" placeholder="Search"></input>
        <ul id="header-list-items">
            <li>Home</li>
            <li>FAQ</li>
            <li>Settings</li>
            <li>Profile</li>
            </ul>
        </section>

    )
}

export default Header;