import React, { useState } from "react"

function RoomCard(props){

    let [roomdata] = useState(props.roomdata)

    return(
        <div className = "col">
            <div className = "card">
                <div className="card-body">

                    <h4 className = "card-title">
                        {roomdata.name}
                    </h4>
                    
                </div>
            </div>

        </div>
    )
}

export default RoomCard;
