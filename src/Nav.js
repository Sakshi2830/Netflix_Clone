import React, { useEffect, useState } from 'react'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false)

    const transitionNavBar = () =>{
        if(window.scrollY > 100)
        handleShow(true);
        else{
            handleShow(false)
        }
    };

    useEffect(() =>{
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)


    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img  className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png" 
            alt="netflix logo" />

            <img className="nav__avatar" 
            src="https://www.pinclipart.com/picdir/middle/547-5474602_character-avatar-clipart.png" alt="" />
            
            </div>   
        </div>
    )
}

export default Nav
