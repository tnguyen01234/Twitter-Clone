import React from 'react'
import { Close } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const SignUp = () => {
  return (
    <div className="modal__signUp">
    <CloseIcon className="closeIcon" />
    <div className="signUp__container">
      <h1>
        Sign Up to Twitter
        <img
          className="twitter__img"
          src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale"
          alt=""
        />
      </h1>
      <form action="">
        <input className="signUp__input" placeholder="Email" />
        <input className="signUp__input" placeholder="Full Name" />
        <input className="signUp__input" placeholder="UserName" />
        <input className="signUp__input" placeholder="Password" />
        <input className="signUp__input" placeholder="Image URL" />
        <Button className="btn reverse__btn">Sign Up</Button>
      </form>
    </div>
  </div>
  )
}
