import React from "react";
import logo from "../images/PointOneLogo.png"

function Footer(){
    return (
        <>
            <div className="bg-grey text-xs text-white text-center p-4">
                <div className="max-w-[1200px] h-auto mx-auto flex  items-start justify-evenly md:h-[400px] md:flex-row min-[1090px]:h-[320px]">
                    <div>
                       <img src={logo} alt="PointOneMediaLogo" className="w-25 mb-6" />
                       <h1 className="text-2xl">Contact Us</h1>
                       <ul>
                        <li className="text-lg">Dagia Plaza, Kweria Road Off, <br/> Ground Floor Kirinyaga Rd, Nairobi</li>
                        <li className="text-lg"><span>Call:</span> +254 721 534 864</li>
                        <li className="text-lg"><span>Email:</span>info@pointone.co.ke</li>
                       </ul>
                    </div>
                    

                    <iframe className="md:w-1/3 md:h-full " src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20Dagia%20Plaza,%20Kweria%20Road%20Off,%20Ground%20Floor%20Kirinyaga%20Rd,%20Nairobi+(Point%20One%20Media)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe>
                </div>
            </div>

            <div className="bg-darkGreen text-xs text-white text-center p-4">© 2024. All Rights Reserved</div>
        </>
    )
}

export default Footer;