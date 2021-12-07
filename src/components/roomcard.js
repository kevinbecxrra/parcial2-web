function Roomcard({room, onClick}) {
    return(
            <div className="card" onClick={onClick}>
                <img className="card-img-top" src={room.type === "room" ? "https://cdn-icons-png.flaticon.com/512/2534/2534800.png" : "https://cdn-icons-png.flaticon.com/512/963/963883.png"} alt="Icono"/>
                <div className="card-body">
                    <h5 className="card-title">{room.name}</h5>
                </div>
            </div>
    )
}

export default Roomcard;