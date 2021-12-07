import React, { useEffect, useState } from "react"
import Roomcard from "./roomcard"
import Table from "./table"
import Piechart from "./piechart"
import { FormattedMessage } from "react-intl"

function Rooms(props) {
  const [rooms, setRooms] = useState([])
  const [room, selectRoom] = useState()


  useEffect(() => {
    if(localStorage.getItem("rooms")==null && navigator.online) {
      fetch(
        "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json",
        {
          method: "GET",
        }
      )
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          let roomss = []
          data.forEach((element) => {
            if (element.homeId === props.room.id) {
              roomss.push(element)
            }
          })
          setRooms(roomss)
          localStorage.setItem("rooms", JSON.stringify(data))
        })
        .catch((e) => console.warn(e))
    }
    else{
      var data = JSON.parse(localStorage.getItem("rooms"))
      let roomss = []
      data.forEach((element) => {
        if (element.homeId === props.room.id) {
          roomss.push(element)
        }
      })
      setRooms(roomss)
      
  }
  }, [props.room.id]);

  return (
    <div id="rooms">
      <h1><FormattedMessage id ="MyRooms"/></h1>
      <div className="card-group">
        {rooms.map((dev) => (
          <Roomcard key={dev.name + dev.homeId} room={dev}  
          onClick={() => selectRoom(dev)}/>
        ))}
      </div>
      {room != null ? <Table device={room} /> : null}
      <h2><FormattedMessage id ="Power"/></h2>
      {rooms != null ? <Piechart rooms={rooms}/> : null}
    </div>
  );
}

export default Rooms;
