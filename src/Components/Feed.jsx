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
} from "firebase/firestore";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Avatar, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import image from "../assets/IMG_4691.JPG";
import FlipMove from "react-flip-move";
import { Close } from "@mui/icons-material";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { UserAuth } from "../context/AuthContext";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState([]);
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [image, setImage] = useState('')
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    timeZone: "Australia/Melbourne",
  });
  const [signUpBtn, setSignUp] = useState(false);
  const [signInBtn, setSignIn] = useState(false);
  const { user, logOut } = UserAuth();

  useEffect(() => {
    async function getProfileById() {
      const profRef = doc(db, "users", user.email);
      const profSnap = await getDoc(profRef);
      const prof = profSnap.data();
      console.log(prof);
      setImage(prof.avatar)
    }
    getProfileById()
    console.log(user)
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const { docs } = await getDocs(collection(db, "posts"));
      setPosts(docs.map((elem) => ({ ...elem.data(), id: elem.id })));
    };
    fetchData();
  }, []);

  async function createPost(e) {
    e.preventDefault();
      const profRef = doc(db, "users", user.email);
      const profSnap = await getDoc(profRef);
      const prof = profSnap.data();
      console.log(prof);
    const post = {
      displayName: prof.fullName,
      username: prof.userName,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: prof.avatar,
      uid: user.uid,
    };
    addDoc(collection(db, "posts"), post);

    const fetchData = async () => {
      const { docs } = await getDocs(collection(db, "posts"));
      setPosts(docs.map((elem) => ({ ...elem.data(), id: elem.id })));
    };
    fetchData();
  }

  return (
    <div className="feed">
      {user?.email ? (
        <form className="tweetBox" action="">
          <div className="tweetBox__input">
            {}
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
      ) : (
        <div>
          {signUpBtn && <SignUp closeModal={setSignUp} />}
          {signInBtn && (
            <SignIn closeModal={setSignIn} openSignUp={setSignUp} />
          )}
          <div className="feed__header">
            <h2>Home</h2>
          </div>
          <div className="tweetBox">
            <div className="btn__container">
              <Button
                variant="outlined"
                className="btn"
                fullWidth
                onClick={() => {
                  setSignIn(true);
                }}
              >
                Sign In
              </Button>
              <Button
                variant="outlined"
                className="btn"
                onClick={() => {
                  setSignUp(true);
                }}
                fullWidth
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}

      <FlipMove>
        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
            id={post.id}
          />
        ))}
      </FlipMove>
    </div>
  );
}
