import React from "react";
import logo from "../images/PointOneLogo.png"


function MobileNavbar({setIsMenuOpen}){
    return(
        <>
            <div className="w-screen fixed top-0 z-20">
                <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
                    <img src={logo} alt="Point-One-Media logo" className="w-16 object-contain mb-8"/>
                    <ul>
                        <li className="mb-5">
                            <a className="menu-item">HOME</a>
                        </li>
                        <li className="mb-5">
                            <a className="menu-item">SERVICES</a>
                        </li>
                        <li className="mb-5">
                            <a className="menu-item">ABOUT</a>
                        </li>
                        <li className="mb-5">
                            <a className="menu-item">GET A QUOTE</a>
                        </li>
                    </ul>
                    <button className="md:block h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary ">CONTACT US</button>
                </div>
                <div onClick={() => {setIsMenuOpen(false)}} className="w-screen h-screen bg-overlayBg fixed top-0 -z-10"/>
            </div>
        </>
    )
}


export default MobileNavbar;