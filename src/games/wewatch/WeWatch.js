import GameComponent from "../../GameComponent.js";
import React from "react";
import YouTube from 'react-youtube';
import "./wewatch.css";

export default class WeWatch extends GameComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onVideoReady(e) {
    console.log("Video ready", e.target);
    e.target.seekTo(0, true);
    e.target.playVideo();
  }

  render() {
    let opts = {
      width: '100%',
      height: '100%',
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
      },
    };
    return (
      <div className="wewatch">
        <YouTube
            containerClassName="player"
            videoId="fH3X2U9t2P0"
            opts={opts}
            onReady={(e) => this.onVideoReady(e)} />
      </div>
    );
  }
}
