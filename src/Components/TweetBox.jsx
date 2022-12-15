// import { Avatar, Button } from "@mui/material";
// import React, { useState } from "react";
// import "./css/TweetBox.css";
// import image from "../assets/IMG_4691.JPG";
// import { db } from "./firebase";
// import { collection, addDoc } from "firebase/firestore";


// export default function TweetBox() {
//   const [tweetMessage, setTweetMessage] = useState("");
//   const [tweetImage, setTweetImage] = useState("")


//  function createPost(e) {
//   e.preventDefault();
//   const post= {
//     displayName: "Tommy Nguyen",
//     username: "drlancer999",
//     verified: true,
//     text: tweetMessage,
//     image: tweetImage,
//     avatar: "https://scontent.fmel15-2.fna.fbcdn.net/v/t39.30808-6/285495518_7522865197786890_3861121252250812987_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RAbHbrC_9UkAX8vhaxV&tn=177IfN52zZcuJZLi&_nc_ht=scontent.fmel15-2.fna&oh=00_AfA95aXpz-_TH1DecI1La7z3ajiSObfWVnAWGKsWL_fBOQ&oe=639F8D37"
//   };
//   addDoc(collection(db, "posts"), post)
// }

//   return (
//     <div className="tweetBox">
//       <form action="">
//         <div className="tweetBox__input">
//           <Avatar src={image} />
//           <input
//             value={tweetMessage}
//             className="coloured__input"
//             placeholder="What is Happening?"
//             onChange={(e) => setTweetMessage(e.target.value)}
//           />
//         </div>
//         <input
//         value={tweetImage}
//           className="tweetbox__imageinput"
//           placeholder="Optional: Enter Image URL"
//           type="text"
//           onChange={(e) => setTweetImage(e.target.value)}
//         />
//         <Button onClick={createPost} type="submit" className="tweetBox__btn">Tweet</Button>
//       </form>
//     </div>
//   );
// }
