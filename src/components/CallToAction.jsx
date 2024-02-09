import React from "react";
import Comp from "../images/home-img.png";



function CallToAction(){
    return (
        <>
            <div className="bg-secondary">
                <div className="max-w-[1200px] h-auto mx-auto flex flex-col items-start md:h-[400px] md:flex-row min-[1090px]:h-[320px]">
                    <img src={Comp} alt="a computer" className="w-full md:w-1/2 md:h-full object-cover " />
                    <div className="p-10">
                        <h5 className="text-lg font-medium text-darkGreen mb-2 lg:mb-4">
                            Find Out What It Costs
                        </h5>

                        <p className="text-sm text-darkGreen leading-6 text-justify mb-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum exercitationem iusto qui similique saepe praesentium et, aliquid numquam quam excepturi repellendus quas voluptates ipsa tempore molestias dolores mollitia officia architecto!
                        </p>

                        <button className="primary-btn">GET ESTIMATE</button>
                    </div>
                </div>
            </div> 
        </>
    )
}


export default CallToAction;