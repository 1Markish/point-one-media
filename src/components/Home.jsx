import React from "react";

import HomeIMG1 from "../images/insurance-upscaled(2).png"
import HomeIMG2 from "../images/background.png"
import HomeIMG3 from "../images/new.jpeg"

function Home(){
    return(
        <>
        <section className="max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md-flex-row">
            <div className="">
                <h2 className="">Building Dreams, Crafting Homes</h2>

                <p className="">Turning dreams into homes. Explore our exceptional craftsmanship and envision your perfect space.</p>

                <button className="primary-btn">Explore Our Projects</button>

            </div>

            <div className="">
                <img className="hero-img" src={HomeIMG1} alt="img one" />
                <img className="mt-[5%] hero-img" src={HomeIMG1} alt="img two" />
                <img className="hero-img" src={HomeIMG1} alt="img three" />

            </div>
        </section>
        </>
    )
}

export default Home;