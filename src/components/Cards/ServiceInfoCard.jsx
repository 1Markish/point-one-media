import React from "react";

function ServiceInfoCard({imgUrl, title, description}){
    return (
        <>
            <div className="bg-secondary flex flex-col md:even:flex-row-reverse md:odd:flex-row">
                <div className="flex-1">
                    <img src={imgUrl} alt={title} className="w-full h-80 md-h-full object-cover" />
                </div>

                <div className="flex-1">
                    <div className="p-10">
                        <h6 className="text-xl font-semibold md:text-2xl text-darkGreen font-semibold mb-3">{title}</h6>
                        <p className="text-sm md:text-lg leading-6 text-darkGreen whitespace-pre-line">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceInfoCard;