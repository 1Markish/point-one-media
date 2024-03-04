import React from "react";

function SampleCard({name, imgUrl, review, description}){
    return (
        <>
            <div>
                <div className="w-60 h-80 bg-grey rounded-sm">
                    <img src={imgUrl} alt={description} />
                </div>
            </div>
        </>
    )
}

export default SampleCard;