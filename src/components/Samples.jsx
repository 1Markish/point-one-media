import React, { useRef, useState } from "react";
import { SAMPLES } from "../utils/data";
import Slider from "react-slick";

import SampleCard from "./Cards/SampleCard";
import SamplePage from "./Pagination/SamplePage";


function Samples(){

    const sliderRef = useRef();
    const [currentSlide, setCurrentSlide ] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        beforeChange: (index) => {
            setCurrentSlide(index);
        },
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    };

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    };



    return (
        <>
            <section id="Samples" className=" py-16 mx-auto">
                <h5 className="text-2xl font-semibold text-darkGreen text-center mb-16">Samples</h5>

                <div className="relative mb-7 px-5 md:px-10">
                    <Slider ref={sliderRef} {...settings}>
                    {SAMPLES.map((item) => (
                        <SampleCard 
                        key={item.id}
                        name={item.name}
                        imgUrl={item.imgUrl}
                        review={item.review}
                        description={item.description}
                        />
                    ))}
                    </Slider>

                </div>

                <SamplePage active={currentSlide}/>
            </section>
        </>
    )
}


export default Samples;