import React , {useState} from "react";
import logo from "../images/PointOneLogo.png"
import {RiMenu4Line, RiCloseFill} from "react-icons/ri"
import MobileNavbar from "./MobileNavbar";


function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return(
        <>
          {isMenuOpen && <MobileNavbar setIsMenuOpen={setIsMenuOpen}/>}

            <div className="bg-background sticky top-0 z-10">
                <nav className="max-w-screen-xl mx-auto py-4 px-6">
                    <div className="flex items-center justify-between">
                        <img src={logo} alt="Point-One-Media logo" className="h-11 w-auto object-contain"/>

                        <ul className="hidden md:flex md:gap-14">
                            <li><a className="menu-item">HOME</a></li>
                            <li><a className="menu-item">SERVICES</a></li>
                            <li><a className="menu-item">ABOUT</a></li>
                            <li><a className="menu-item">GET A QUOTE</a></li>
                        </ul>

                        <button className="hidden md:block h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary ">CONTACT US</button>
                        <button onClick={() => {setIsMenuOpen(true)}} className="w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden z-50">
                            { isMenuOpen ? <RiCloseFill/> : <RiMenu4Line/>}
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}


export default Navbar;