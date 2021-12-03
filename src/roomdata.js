import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomCard from './roomcard'


function Room() {

    let url = "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
    const [room, setRoom] = useState([]);
  
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setRoom(data);
        });
    }, []);
  
    return (
        <div className="container">
        <div className="row">
          {room.map((p) => (
            <RoomCard room={p} key={p.id} />
          ))}
        </div>
      </div>
    );
  
}

export default Room;