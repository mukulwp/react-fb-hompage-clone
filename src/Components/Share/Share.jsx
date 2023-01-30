import React from "react";
import "./Share.css";
import Person from "../../assets/person/1.jpeg";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";

const Share = () => {
  return (
    <div className="shareContainer">
      <div className="shareWrap">
        <div className="shareTop">
          <img src={Person} alt="Person" />
          <input
            type="text"
            className="shareInput"
            placeholder="What's in your mind?"
          />
        </div>
        <hr className="shareLine" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareOptionIcon" />
              <span>Photo or Video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareOptionIcon" />
              <span>Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareOptionIcon" />
              <span>Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="gold" className="shareOptionIcon" />
              <span>Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
