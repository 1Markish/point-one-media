import React from "react";
import logo from "../images/PointOneLogo.png";

function Footer() {
  return (
    <>
      <div>
        <div className="flex">
          <div className="bg-grey w-1/3 h-80 flex flex-col justify-center items-center text-secondary">
            <div>
              <img src={logo} alt="Point One Media Logo" />
            </div>
            <div className="flex flex-col items-center ">
              <span className="text-2xl py-2 font-semibold underline underline-offset-4">
                Contact Us
              </span>
              <span className="text-center">
                Kweria Road, Dagia Plaza,
                <br /> Ground Floor, Nairobi
              </span>
              <span>
                <span className="font-semibold">Call:</span> +254 722 611 475
              </span>
              <span>
                <span className="font-semibold">Email:</span>
                print.pointone@gmail.com
              </span>
            </div>
          </div>

          <div className="">
            <iframe
              className=""
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20Dagia%20Plaza,%20Kweria%20Road%20Off,%20Ground%20Floor%20Kirinyaga%20Rd,%20Nairobi+(Point%20One%20Media)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Population calculator map
              </a>
            </iframe>
          </div>
          
        </div>
        <div className="h-10 bg-black flex justify-center items-center">
          <span className="text-xs text-white">
            © 2024. All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;

{
  /* <div className="bg-grey text-xs text-white text-center p-4">
        <div className="max-w-[1200px] h-auto mx-auto flex  items-start justify-evenly md:h-[400px] md:flex-row min-[1090px]:h-[320px]">
          <div>
            <img src={logo} alt="PointOneMediaLogo" className="w-25 mb-6" />
            <h1 className="text-2xl">Contact Us</h1>
            <ul>
              <li className="text-lg">
                Dagia Plaza, Kweria Road Off, <br /> Ground Floor Kirinyaga Rd,
                Nairobi
              </li>
              <li className="text-lg">
                <span>Call:</span> +254 721 534 864
              </li>
              <li className="text-lg">
                <span>Email:</span>info@pointone.co.ke
              </li>
            </ul>
          </div>

          <iframe
            className="md:w-1/3 md:h-full "
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20Dagia%20Plaza,%20Kweria%20Road%20Off,%20Ground%20Floor%20Kirinyaga%20Rd,%20Nairobi+(Point%20One%20Media)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">
              Population calculator map
            </a>
          </iframe>
        </div>
      </div> */
}
