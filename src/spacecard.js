import React, { useState } from "react"

function SpaceCard(props){

    let [spacedata] = useState(props.spacedata)

    return(
        <div className = "col">
            <div className = "card">
                <div className="card-body">

                    <h4 className = "card-title">
                        {spacedata.name}
                    </h4>
                    
                </div>
            </div>

        </div>
    )
}

export default SpaceCard;