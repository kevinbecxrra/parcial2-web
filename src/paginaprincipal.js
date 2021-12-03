import React from "react";
import Space from "./spacedata";
import Room from "./roomdata";


function PaginaPrincipal() {
    return (
        <div className="container">
            <h1>My spaces</h1>
            <Space />

            <hr></hr>
            <h1>My rooms</h1>
            <Room />

            <hr></hr>
        </div>
    );
}


export default PaginaPrincipal;