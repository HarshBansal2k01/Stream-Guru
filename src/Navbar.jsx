import React, { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {

    const [show, handleShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() =>{
        window.addEventListener("scroll", transitionNavBar)
        return () =>{
            window.removeEventListener('scroll',transitionNavBar)
        }
    },[])
     
  return (
    <div className={`nav ${ show && 'nav__black'}`} >
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://images.unsplash.com/photo-1652795385697-1e5e522c98d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=395&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
