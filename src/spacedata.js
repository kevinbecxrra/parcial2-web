import React, { useState, useEffect } from "react";
import SpaceCard from './spacecard';

function Space() {
  let url = "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";

  const [space, setSpace] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSpace(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {space.map((p) => (
          <SpaceCard space={p} key={p.id} />
        ))}
      </div>
    </div>
  );

}

export default Space;
