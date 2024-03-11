import React from "react";
import { BrowserRouter as Router,Route,Routes, Link, RouterProvider } from "react-router-dom"
import { BsSearch } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { BiHomeAlt } from "react-icons/bi";
import { PiVideo } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa6";



function Navbar(){
return(
    <div>
<div className="nav-bar-conainer">
<div className="left-navbar">
    <FaFacebook className="facebook"/>
    <input type="text" placeholder="Search Facebook" className="SearchFacebook "/>
   <a href="#"><BsSearch className="search"/></a> 
</div>
<div className="center-navbar">
<Link to="/Body" className="home-link"><BiHomeAlt className="homes"/></Link>
 <Link to="/Groups" className="group-link"><IoPersonCircleOutline className="group"/></Link>
 <Link to="/MarketPlace"><CiShop className="shoap"/></Link>
 <Link to="/Vedio"><PiVideo className="vedio"/></Link>

</div>
<div className="right-nav-bar">
   <a href="#"><CgMenuGridO className="menu"/></a> 
   <a href="#"><FaFacebookMessenger className="message"/></a> 
   <a href="#">< IoNotifications className="notification"/></a>
   <a href="#"><img src="./pic50.jpg" className="navbar-image"/></a> 
</div>
</div>
</div>



    )
}
export default Navbar