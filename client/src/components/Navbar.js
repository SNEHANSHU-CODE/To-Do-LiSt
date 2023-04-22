import React from 'react';
//import {Link} from "react-router-dom"
import NavbarImg from "./static/NavbarImg.png";

function Navbar () {
	return <nav className="navbar navbar-light"> 
    <div className="justify-content-center container-fluid ">
      <span className=" navbar-brand "><img style={{height:100}} src={NavbarImg} alt='Not Able to Load'></img></span>
    </div>
  </nav>
}
export default Navbar;


