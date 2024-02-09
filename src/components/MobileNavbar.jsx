import React from "react";
import logo from "../images/PointOneLogo.png"


function MobileNavbar({isOpen, setIsMenuOpen}){

    const handleScroll = (sectionId) => {
        if (isOpen) setIsMenuOpen(false);
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth"});
    };

    return(
        <>
            <div className="w-screen fixed top-0 z-20">
                <div className="w-1/2 h-screen flex flex-col p-8 bg-background">
                    <img src={logo} alt="Point-One-Media logo" className="w-16 object-contain mb-8"/>
                    <ul>
                        <li className="mb-5">
                            <a className="menu-item" onClick={() => handleScroll('home')}>HOME</a>
                        </li>
                        <li className="mb-5">
                            <a className="menu-item"onClick={() => handleScroll('services')}>SERVICES</a>
                        </li>
                        <li className="mb-5">
                            <a className="menu-item"onClick={() => handleScroll('our-work')}>OUR WORK</a>
                        </li>
                        <li className="mb-5">
                            <a className="menu-item"onClick={() => handleScroll('testimonials')}>TESTIMONIALS</a>
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