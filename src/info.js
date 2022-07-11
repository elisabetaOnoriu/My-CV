import React from "react";
import profile from "./images/profile.jpeg";
import elisabeta from "./images/elisabeta.png";
import mail from "./images/mail.png";
import linkedin from "./images/linkedin.png";

export default function Info() {
    return (
        <div className = "infoDiv">
            <img className = "profile"
                src = {profile} 
                alt = "profile picture" />

            <img className = "name"
                src = {elisabeta} 
                alt = "Name - Elisabeta-Maria Onoriu" />
            <p className="frontEnd"><i>Junior Front-end Developer</i></p>


        <div className = "buttons">

            <button className = "mailButton" onClick = {() => window.location = 'mailto:elisabeta.onoriu99@gmail.com'}>
                <img className = "mail" src = {mail} /><p className = "mailText">Mail</p></button>

            <form action="https://www.linkedin.com/in/elisabeta-maria-onoriu-02b978234/" method="get" target="_blank">
         <button className = "linkedin" type="submit">
             <img src = {linkedin}/>Linkedin</button>
      </form>

        </div>
                        
    </div>
    )
    
}
