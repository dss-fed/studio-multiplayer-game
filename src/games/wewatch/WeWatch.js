import GameComponent from "../../GameComponent.js";
import React from "react";
import YouTube from "react-youtube";
import SocialUI from "./SocialUI.js";
import "./wewatch.css";

export default class WeWatch extends GameComponent {
  constructor(props) {
    super(props);
    let users = this.getSessionUserIds();
    let userCount = users.length;
    this.state = {
      eventLog: ["Welcome! There are " + userCount + " users in the room"]
    };
  }

  onVideoReady(e) {
    console.log("Video ready", e.target);
    e.target.seekTo(0, true);
    e.target.playVideo();
  }

  render() {
    let opts = {
      width: "100%",
      height: "100%",
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1
      }
    };
    return (
      <div className="wewatch">
        <SocialUI eventLog={this.state.eventLog} />
        <YouTube
          containerClassName="player"
          videoId="fH3X2U9t2P0"
          opts={opts}
          onReady={e => this.onVideoReady(e)}
        />
      </div>
    );
  }
}
