import React, { useEffect, useState } from "react";
import "./css/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { db, auth } from "./firebase.js";
import { setDoc, doc, onSnapshot, collection, QuerySnapshot, getDoc, getDocs } from "firebase/firestore";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Feed() {
  const [posts, setPosts] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
    const { docs } = await getDocs(collection(db, 'posts'))
      setPosts(docs.map((elem) => ({...elem.data(), id: elem.id})))
      console.log(posts)
  }
  fetchData().catch(console.error)
 }, [])

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />
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
    </div>
  );
}
