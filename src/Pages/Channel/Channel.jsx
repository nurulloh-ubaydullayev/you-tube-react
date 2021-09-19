import "./Channel.scss";

// Images
import ChannelBgImg from "../../Assets/Images/channelBgImg.jpg";

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
        <div className="channel__header">channel</div>
      </div>
    </div>
  );
}

export default Channel;
