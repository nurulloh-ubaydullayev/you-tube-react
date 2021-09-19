import "./DollieVideos.scss";
import React from "react";
import { NavLink } from "react-router-dom";

import Video from "../../Components/Video/Video";

function DollieVideos() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 6)));
  }, []);

  return (
    <ul className="dollie__videos-list">
      <>
        {data.length > 0 &&
          data.map((row) => (
            <Video key={row.id}>
              <NavLink className="dollie__video-link" to="/video">
                <img
                  className="dollie__video-img"
                  src={row.thumbnailUrl}
                  alt="Post"
                  width={250}
                  height={150}
                />

                <h3 className="dollie__video-title">{row.title}</h3>
                <span>80k views · 3 days ago</span>
                <span>Dollie Blair</span>
              </NavLink>
            </Video>
          ))}
      </>
    </ul>
  );
}

export default DollieVideos;
