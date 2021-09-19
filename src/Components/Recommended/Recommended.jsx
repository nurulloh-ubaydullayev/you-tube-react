import "./Recommended.scss";
import React from "react";

// Components
import RecommendedVideo from "../RecommendedVideo/RecommendedVideo";

function Recommended() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 3)));
  }, []);

  return (
    <div className="recommended">
      <h2 className="recommended__title">Recommended</h2>
      <ul className="recommended__list">
        {data.length > 0 &&
          data.map((row) => (
            <RecommendedVideo key={row.id}>
              <img
                className="recommended__video"
                src={row.url}
                alt="Video"
                width={540}
                height={250}
              />
              <h3 className="recommended-video__title">{row.title}</h3>
              <p className="recommended-video__statistics">
                240k views · 4 months ago <span>Food & Drink</span>
              </p>
            </RecommendedVideo>
          ))}
      </ul>
    </div>
  );
}

export default Recommended;
