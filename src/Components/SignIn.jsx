import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

export const SignIn = ({ closeModal, openSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')
  const { user, logIn, logOut } = UserAuth();
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
    console.log(user)
    const loading = document.querySelector(".refresh__icon");
    const hidden = document.querySelector(".signUp__text");
    loading.classList += " refresh__icon--visible";
    hidden.classList += " signUp__text--invisible";


  };

  return (
    <div className="modal__signIn">
      <CloseIcon className="closeIcon" onClick={() => closeModal(false)} />
      <div className="signUp__container">
        <h1>
          Log In to Twitter
          <img
            className="twitter__img"
            src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale"
            alt=""
          />
        </h1>
        {error ? <p>{error}</p> : null }
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
          <Button className="btn reverse__btn" type="submit">
            <HourglassBottomIcon className="refresh__icon" />
            <span className="signUp__text">Log In</span>
          </Button>
          <div className="input__text">
            <p>
              <input type="checkbox" /> Remember Me
            </p>
            <p className="need__help">Need help?</p>
          </div>
          <p className="sign__up--text">
            Don't have an account?{" "}
            <span
              onClick={() => {
                openSignUp(true);
                closeModal(false);
              }}
              className="sign__up--word"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
