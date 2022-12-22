import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import RefreshIcon from "@mui/icons-material/Refresh";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

export const SignUp = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const { user, signUp, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      setDoc(doc(db, "users", email), {
        fullName: fullName,
        userName: userName,
        avatar: imgUrl,
      });

    } catch (error) {
      console.log(error);
    }
    const loading = document.querySelector(".refresh__icon");
    const hidden = document.querySelector(".signUp__text");
    loading.classList += " refresh__icon--visible";
    hidden.classList += " signUp__text--invisible";
    setTimeout(() => {

    }, 2000);
  };

  return (
    <div className="modal__signUp">
      <CloseIcon className="closeIcon" onClick={() => closeModal(false)} />
      <div className="signUp__container">
        <h1 className="twitter__title">
          Sign Up to Twitter
          <img
            className="twitter__img"
            src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale"
            alt=""
          />
        </h1>
        <form className="input__container" action="" onSubmit={handleSubmit}>
          <input
            className="signUp__input"
            placeholder="Email"
            autoComplete="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="signUp__input"
            placeholder="Password - Min 6 Characters"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="signUp__input"
            placeholder="Full Name"
            type="text"
            onChange={(e) => setFullName(e.target.value)}
          />

          <input
            className="signUp__input"
            placeholder="Username"
            type="text"
            autoComplete="current-username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className="signUp__input"
            placeholder="Image URL"
            type="text"
            onChange={(e) => setImgUrl(e.target.value)}
          />

          <Button className="btn reverse__btn" type="submit">
            <HourglassBottomIcon className="refresh__icon" />
            <span className="signUp__text">Sign Up</span>
          </Button>
          <div className="input__text">
            <p>
              <input type="checkbox" /> Remember Me
            </p>
            <p className="need__help">Need help?</p>
          </div>
        </form>
      </div>
    </div>
  );
};
