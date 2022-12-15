import React, { useEffect, useState } from "react";
import "./css/Feed.css";
import "./css/TweetBox.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { db, auth } from "./firebase.js";
import {
  setDoc,
  doc,
  onSnapshot,
  collection,
  QuerySnapshot,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Avatar, Button } from "@mui/material";
import image from "../assets/IMG_4691.JPG";
import FlipMove from "react-flip-move";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    timeZone: "Australia/Melbourne",
  });

  function createPost(e) {
    e.preventDefault();
    const post = {
      displayName: "Tommy Nguyen",
      username: "drlancer999",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent.fmel15-2.fna.fbcdn.net/v/t39.30808-6/285495518_7522865197786890_3861121252250812987_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RAbHbrC_9UkAX8vhaxV&tn=177IfN52zZcuJZLi&_nc_ht=scontent.fmel15-2.fna&oh=00_AfA95aXpz-_TH1DecI1La7z3ajiSObfWVnAWGKsWL_fBOQ&oe=639F8D37",
    };
    addDoc(collection(db, "posts"), post);

    const fetchData = async () => {
      const { docs } = await getDocs(collection(db, "posts"));
      setPosts(docs.map((elem) => ({ ...elem.data(), id: elem.id })));
    };
    fetchData();
  }

  useEffect(() => {
    const fetchData = async () => {
      const { docs } = await getDocs(collection(db, "posts"));
      setPosts(docs.map((elem) => ({ ...elem.data(), id: elem.id })));
    };
    fetchData();
  }, []);

  function deletePost(id) {
    const postRef = doc(db, "posts", id);
    deleteDoc(postRef);
  
  }

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <div className="tweetBox">
        <form action="">
          <div className="tweetBox__input">
            <Avatar src={image} />
            <input
              value={tweetMessage}
              className="coloured__input"
              placeholder="What is Happening?"
              onChange={(e) => setTweetMessage(e.target.value)}
            />
          </div>
          <input
            value={tweetImage}
            className="tweetbox__imageinput"
            placeholder="Optional: Enter Image URL"
            type="text"
            onChange={(e) => setTweetImage(e.target.value)}
          />
          <Button onClick={createPost} type="submit" className="tweetBox__btn">
            Tweet
          </Button>
        </form>
      </div>
      <FlipMove>
        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
            
          />
        ))}
      </FlipMove>
    </div>
  );
}
