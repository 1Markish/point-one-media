import React , {useState} from "react";
import logo from "../images/PointOneLogo.png"
import {RiMenu4Line, RiCloseFill} from "react-icons/ri"
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-scroll";


function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return(
        <>
          {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}

            <div className="bg-background sticky top-0 z-10">
                <nav className="max-w-screen-xl mx-auto py-4 px-6">
                    <div className="flex items-center justify-between">
                        <img src={logo} alt="Point-One-Media logo" className="h-11 w-auto object-contain"/>

                        <ul className="hidden md:flex md:gap-14">
                            <li>
                                <Link to="home" smooth spy offset={-80} className="menu-item">HOME</Link>
                            </li>
                            <li>
                                <Link to="services" smooth spy offset={-80} className="menu-item">SERVICES</Link>
                            </li>
                            <li>
                                <Link to="our-work" smooth spy offset={-80} className="menu-item">OUR WORK</Link>
                            </li>
                            <li>
                                <Link to="testimonials" smooth spy offset={-80} className="menu-item">TESTIMONIALS</Link>
                            </li>
                        </ul>

                        <button className="hidden md:block h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary ">CONTACT US</button>
                        <button onClick={() => {setIsMenuOpen(true)}} className="w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded md:hidden z-50">
                            { isMenuOpen ?  <RiCloseFill/> :  <RiMenu4Line/>}
                        </button>
                    </div>
                </nav>
            </div>
        </>
    )
}


export default Navbar;