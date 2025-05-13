import React from "react";
import img from "../img/ali-mi.png";
import "./NavBar.css";

const NavBar = () => {

return(
    <div className="navbar">
     
            <img className="logoeco" src={img} alt="EcoEcho" width="60" height="60" />
       
        <h2>Combos - Pastas Ali-Mi</h2>
    </div>
)
}

export default NavBar;