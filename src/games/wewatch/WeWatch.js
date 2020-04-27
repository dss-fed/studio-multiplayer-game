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
    this.setState({ videoPlayer: e.target });
  }

  onVideoPlay(e) {
    console.log("Pressed play", e.target);
    this.getSessionDatabaseRef().set({
      playing: true,
      timestamp: e.target.getCurrentTime(),
    });
  }

  onVideoPause(e) {
    console.log("Pressed pause", e.target);
    this.getSessionDatabaseRef().set({ playing: false });
  }

  onSessionDataChanged(data) {
    if (this.state.videoPlayer) {
      if (data.playing === true) {
        // video should play (someone else pressed play)
        console.log("Firebase change: video now playing");
        this.state.videoPlayer.seekTo(data.timestamp, true);
        this.state.videoPlayer.playVideo();
      } else {
        // video should pause (someone else pressed pause)
        console.log("Firebase change: video now paused");
        this.state.videoPlayer.pauseVideo();
      }
    } else {
      console.log("Video player not ready yet");
    }
  }

  render() {
    let opts = {
      width: "100%",
      height: "100%",
      playerVars: {
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
          onPlay={e => this.onVideoPlay(e)}
          onPause={e => this.onVideoPause(e)}
          onReady={e => this.onVideoReady(e)}
        />
      </div>
    );
  }
}
