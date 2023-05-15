import React from "react";
import Customcalendar from "./Calendar";


const googleLogo = "https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
const twitterLogo = "https://1000marcas.net/wp-content/uploads/2019/11/Twitter-Logo-2010.png"
const instagramLogo = "https://www.sunsettop.com.au/wp-content/uploads/2017/05/new-instagram-text-logo.png"
const FacebookLogo = "https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.png"

const Announcements = ()=>{

    return(
        <>
        <h3>Announcements</h3>
        <div id="Announcements">
            <div>Ducimus consequuntur quas adipisci et nesciunt explicabo atque minima aliquam labore ut?</div>
            <hr></hr>
            <div>Ducimus consequuntur quas adipisci et nesciunt explicabo atque</div>
            <hr></hr>
            <div>Ducimus consequuntur quas adipisci et nesciunt explicabo atque minima aliquam labore ut?nesciunt explicabo atque minima aliquam labore ut?</div>
        </div>
        </>
    )
}

const Recommended = ()=>{

    return(
        <>
        <h3>Recommended</h3>
        <div id="Recommended">
            <div><a href="https://www.google.com" target={"_blank"}><img src={googleLogo} className="brand-icons"></img></a></div>
            <div><a href="https://www.twitter.com" target={"_blank"}><img src={twitterLogo} className="brand-icons"></img></a></div>
            <div><a href="https://www.instagram.com" target={"_blank"}><img src={instagramLogo} className="brand-icons"></img></a></div>
            <div><a href="https://www.facebook.com" target={"_blank"}><img src={FacebookLogo}   className="brand-icons"></img></a></div>
            </div>
        </>
    )
}

const Rightsidebar = ()=>{
    return(
        <div id="Rightsidebar">
            <Announcements></Announcements>
            <Recommended></Recommended>
        </div>
    )
}

export default Rightsidebar