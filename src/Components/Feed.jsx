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
  const current = new Date();
  const time = current.toLocaleTimeString("en-US", {
    timeZone: "Australia/Melbourne",
  });
  const [signUpBtn, setSignUp] = useState(false);
  const [signInBtn, setSignIn] = useState(false);
  const { user, logOut } = UserAuth();

  useEffect(() => {
    async function getProfileById() {
      const hardcodedID = "aWZo1ywDkjaK9mFdas0mzwW9Lu43";
      const profRef = doc(db, "users", hardcodedID);
      const profSnap = await getDoc(profRef);
      const prof = profSnap.data();
      console.log(prof);
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

  function createPost(e) {
    e.preventDefault();
    const post = {
      displayName: user.email,
      username: "dragon",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://scontent.fmel15-2.fna.fbcdn.net/v/t39.30808-6/285495518_7522865197786890_3861121252250812987_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RAbHbrC_9UkAX8vhaxV&tn=177IfN52zZcuJZLi&_nc_ht=scontent.fmel15-2.fna&oh=00_AfA95aXpz-_TH1DecI1La7z3ajiSObfWVnAWGKsWL_fBOQ&oe=639F8D37",
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
            <Avatar src={null} />
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
