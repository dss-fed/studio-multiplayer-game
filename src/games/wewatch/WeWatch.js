import GameComponent from "../../GameComponent.js";
import React from "react";
import "./wewatch.css";

export default class WeWatch extends GameComponent {
  render() {
    return (
      <div className="container">
        <div className="box">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/fH3X2U9t2P0?controls=0&autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}
