function Spacecard({space, onClick}) {
    return(
            <div className="card" onClick={onClick}>
                <img className="card-img-top" src={space.type === "house" ? "https://cdn-icons-png.flaticon.com/512/619/619155.png" : "https://cdn-icons-png.flaticon.com/512/994/994382.png"} alt="Icono"/>
                <div className="card-body">
                    <h5 className="card-title">{space.name}</h5>
                    <p className="card-text">{space.address}</p>
                </div>
            </div>
    )
}

export default Spacecard;