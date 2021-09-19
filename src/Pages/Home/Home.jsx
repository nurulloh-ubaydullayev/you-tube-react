import React from "react";
import "./Home.scss";

// Images
import DollieImg from "../../Assets/Images/dollie.png";
import Prev from "../../Components/Lib/Svg/prev";
import Next from "../../Components/Lib/Svg/next";
import Food from "../../Assets/Images/food.png";

// Components
import DollieVideos from "../../Components/DollieVideos/DollieVideos";
import Recommended from "../../Components/Recommended/Recommended";

function Home() {
  return (
    <div className="home">
      <div className="dollie-videos">
        <div className="dollie__channel-header">
          <img
            className="dollie__img"
            src={DollieImg}
            alt="Dollie blair "
            width={50}
            height={50}
          />
          <h3 className="dollie__channel-name">Dollie Blairs</h3>
          <div className="prev-next-wrapper">
            <button className="prev-btn prev-next-btn">
              <Prev />
            </button>
            <button className="next-btn prev-next-btn">
              <Next />
            </button>
          </div>
        </div>

        <DollieVideos />
      </div>

      <Recommended />

      <div className="dollie-videos">
        <div className="dollie__channel-header">
          <img
            className="dollie__img"
            src={Food}
            alt="Dollie blair "
            width={50}
            height={50}
          />
          <h3 className="dollie__channel-name">Food & Drink</h3>
          <p className="recommended__text">Recommended channel for you</p>
          <button className="recommended__subscribe">Subscribe 2.3m</button>
          <div className="prev-next-wrapper">
            <button className="prev-btn prev-next-btn">
              <Prev />
            </button>
            <button className="next-btn prev-next-btn">
              <Next />
            </button>
          </div>
        </div>

        <DollieVideos />
      </div>
    </div>
  );
}

export default Home;
