import React, { useEffect, useState } from "react"
import Spacecard from "./spacecard"
import Rooms from "./rooms"
import { FormattedMessage } from "react-intl"


function Spaces() {
  const [spaces, setSpaces] = useState([])
  const [space, selectSpace] = useState()
  useEffect(() => {
    
    if(localStorage.getItem("spaces")==null && navigator.online) {
      fetch("https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json",
        {
          method: "GET",
        }
      )
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          let spacees = [];
          data.forEach((element) => {
            spacees.push(element)
          });
          setSpaces(spacees);
          localStorage.setItem("spaces", JSON.stringify(data))
        })
        .catch((e) => console.warn(e))
    }
    else{
      setSpaces(JSON.parse(localStorage.getItem("spaces")))
  }
    
    
  }, []);

  return (
    <div>
      <div id="spaces">
        <h1><FormattedMessage id ="MySpaces"/></h1>
        <div className="card-group">
          {spaces.map((d) => (
            <Spacecard
              key={d.id}
              space={d}
              onClick={() => selectSpace(d)}
            />
          ))}
        </div>
      </div>
      <div id="detail">
        {space != null ? <Rooms room={space} /> : null}
      </div>
      <div id="chart">
      </div>
    </div>
  );
}

export default Spaces;
