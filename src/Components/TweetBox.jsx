import { Avatar, Button } from "@mui/material";
import React from "react";
import "./css/TweetBox.css";
import image from "../assets/IMG_4691.JPG";

export default function TweetBox() {
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src={image} />
          <input className="coloured__input" placeholder="What is Happening?" />
        </div>
        <input
          className="tweetbox__imageinput"
          placeholder="Optional: Enter Image URL"
          type="text"
        />
        <Button className="tweetBox__btn">Tweet</Button>
      </form>
    </div>
  );
}
