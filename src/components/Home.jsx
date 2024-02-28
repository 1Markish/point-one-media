import React from "react";

import Panel1 from "../images/Panel1.png"
import Panel2 from "../images/Panel2.png"
import Panel3 from "../images/Panel3.png"



function Home(){
    return(
        <>
        <section id="home" className="max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-16 md:flex-row">
            <div className="flex-1 text-center md:text-left ">
                <h2 className="text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">Creative Impressions Everyday</h2>

                <p className="text-sm leading-6 text-darkGreen mb-6 md:w-4/5">
                Crafting Brilliance: From Screen to Print, We've Got You Covered.
                </p>

                <button className="primary-btn">Explore Our Projects</button>

            </div>

            <div className="flex gap-2 justify-center md:gap-3 lg:gap-5">
                <img className="hero-img" src={Panel1} alt="img one" />
                <img className="mt-[5%] hero-img" src={Panel2} alt="img two" />
                <img className="hero-img" src={Panel3} alt="img three" />

            </div>
        </section>
        </>
    )
}

export default Home;