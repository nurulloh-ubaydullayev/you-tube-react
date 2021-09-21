import "./Video.scss";
import React from "react";

// Images
import VideoMoreIcon from "../../Components/Lib/Svg/video-more";
import LikeIcon from "../../Components/Lib/Svg/like-btn";
import DislikeIcon from "../../Components/Lib/Svg/dislike-icon";
import ShareIcon from "../../Components/Lib/Svg/share-icon";
import FoodImg from "../../Assets/Images/food.png";

// Components
import NextVideo from "../../Components/NextVideo/NextVideo";

function Video() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 6)));
  }, []);

  return (
    <div className="video-page">
      <div className="video__main-video">
        <iframe
          className="you-tube-video"
          width="1363"
          height="680"
          src="https://www.youtube.com/embed/1npkSwS0k9s"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="video__info">
          <h2 className="video__info__heading">
            REACTdan NEXTga o'tish | Ibrohim Alimuhammedov
          </h2>
          <div className="video__statistics">
            <span className="views-count">123k views</span>

            <ul className="video__statistics__list">
              <li>
                <button className="likes-btn">
                  <LikeIcon />
                  <span>123k</span>
                </button>
              </li>
              <li>
                <button className="dislikes-btn">
                  <DislikeIcon />
                  <span>121k</span>
                </button>
              </li>
              <li>
                <button className="video-share">
                  <ShareIcon />
                  <span>Share</span>
                </button>
              </li>
              <li>
                <VideoMoreIcon />
              </li>
            </ul>
          </div>
        </div>

        <div className="video__description">
          <img
            className="video__description__avatar"
            src={FoodImg}
            alt="Food"
            width={80}
            height={80}
          />
          <div className="about-video">
            <div className="video__channel-name">
              <h3>Food & Drink</h3>
              <p className="published-date">Published on 14 Jun 2019</p>
            </div>

            <div className="about-video__text">
              <p>
                A successful marketing plan relies heavily on the pulling-power
                of advertising copy. Writing result-oriented ad copy is
                difficult, as it must appeal to, entice, and convince consumers
                to take action. There is no magic formula to write perfect ad
                copy; it is based on a number of factors, including ad
                placement, demographic, even the consumer’s mood when they see
                your ad.{" "}
              </p>

              <span>Show more</span>
            </div>
          </div>
          <button className="video__subscribe">Subscribe 2.3m</button>
        </div>
      </div>

      <div className="next-videos">
        <div className="next__top">
          <h4 className="next__heading">Next</h4>
          <span className="autoplay">
            <span>Autoplay</span> <span className="play-circle"></span>
          </span>
        </div>

        <div className="next__list-wrapper">
          <ul className="next__list">
            {data.length > 0 &&
              data.map((row) => (
                <NextVideo key={row.id}>
                  <img
                    className="next__video-img"
                    src={row.thumbnailUrl}
                    alt=""
                    width={367}
                    height={213}
                  />
                  <h4 className="next__video__name">Baby Monitor Technology</h4>
                  <p className="next__video__info">
                    <span>123k views</span>
                    <span>Dollie Blair</span>
                  </p>
                </NextVideo>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Video;
