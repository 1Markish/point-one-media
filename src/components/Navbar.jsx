import React from "react";
import logo from "../images/PointOneLogo.png"
import {RiMenu4Line} from "react-icons/ri"


function Navbar(){
    return(
        <>
            <div className="bg-background sticky top-0 z-10">
                <nav className="">
                    <div>
                        <img src={logo} alt="Point-One-Media logo" className="h-11 w-auto object-contain"/>

                        <ul>
                            <li><a className="menu-item">HOME</a></li>
                            <li><a className="menu-item">SERVICES</a></li>
                            <li><a className="menu-item">ABOUT</a></li>
                            <li><a className="menu-item">GET A QUOTE</a></li>
                        </ul>

                        <button>CONTACT US</button>
                        <button>
                            <RiMenu4Line/>
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}


export default Navbar;