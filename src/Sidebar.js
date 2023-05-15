import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHomeAlt,faMailBulk, faPaperPlane, faPencilAlt, faPlusCircle, faStar} from "@fortawesome/free-solid-svg-icons";

import logo from "./img/Teal-Logo.png"

const homeIcon = <FontAwesomeIcon icon={faHomeAlt} />
const newIcon = <FontAwesomeIcon icon={faPlusCircle} />
const inboxIcon = <FontAwesomeIcon icon={faMailBulk} />
const draftIcon = <FontAwesomeIcon icon={faPencilAlt} />
const sentIcon = <FontAwesomeIcon icon={faPaperPlane} />
const favoriteIcon = <FontAwesomeIcon icon={faStar} />


const Sidebar= ()=>{
    return(
        <section id="Sidebar">
         <img id="logo" src={logo} alt="logo"></img>   
         <ul>
            <li>{homeIcon} Home</li>
            <li>{newIcon} New</li>
            <li>{inboxIcon} Inbox</li>
            <li>{draftIcon} Drafts</li>
            <li>{sentIcon} Sent</li>
            <li>{favoriteIcon} Favorites</li>
            </ul>   
        
        </section>
    );
};

export default Sidebar;