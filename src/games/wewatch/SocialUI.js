import React from "react";
import "./socialui.css";

export default class SocialUI extends React.Component {
  handleShowAll() {
    console.log("Show all clicked");
  }

  handleAdd() {
    console.log("Add Video Clicked");
  }

  render() {
    return (
      <div className="SocialUI">
        <div className="EventLog">{this.props.eventLog}</div>
        <button className="ShowAll" onClick={e => this.handleShowAll()}>
          Show All
        </button>
        <div className="NextVideo">Next video title</div>
        <button className="AddVideo" onClick={e => this.handleAdd()}>
          Add
        </button>
      </div>
    );
  }
}
