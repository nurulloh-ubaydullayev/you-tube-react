import "./Channel.scss";
import { NavLink } from "react-router-dom";

// Images
import ChannelBgImg from "../../Assets/Images/channelBgImg.jpg";
import ChannelAvatar from "../../Assets/Images/channelAvatar.png";
import BellIcon from "../../Components/Lib/Svg/bell";

// Components
import ChannelIntro from "../../Components/ChannelIntro/ChannelIntro";
import MargaretVideos from "../../Components/MargaretVideos/MargaretVideos";

function Channel() {
  return (
    <div className="channel">
      <img
        className="channel__bg-img"
        src={ChannelBgImg}
        alt="Channel"
        width={1220}
        height={280}
      />

      <div className="channel__main">
        <div className="channel__header">
          <div className="channel__avatar">
            <img
              className="channel__avatar-img"
              src={ChannelAvatar}
              alt="Channel avatar"
              width={80}
              height={80}
            />
            <div className="channel-info">
              <h2 className="channel__name">Margaret Phelps</h2>
              <span className="subs-count">245 subscribed</span>
            </div>
          </div>
          <div className="subscribe">
            <BellIcon />
            <NavLink className="channel__subscribe-link" to="/channel">
              Subscribe 2.3m
            </NavLink>
          </div>
        </div>
        <ChannelIntro />
        <MargaretVideos />
      </div>
    </div>
  );
}

export default Channel;
