import React from "react";
import "./css/Widgets.css";
import SearchIcon from "@mui/icons-material/Search";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

export default function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId="1602806063606075392" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/tommy.nguyen.1804109"}
          options={{ text: "#Twitter-Clone #HelloWorld", via: "elonmusk" }}
        />
      </div>
    </div>
  );
}
