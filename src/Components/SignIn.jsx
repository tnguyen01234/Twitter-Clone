import React from 'react'
import { Close } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const SignIn = () => {
  return (
    <div className="modal__signIn">
    <CloseIcon className="closeIcon" />
    <div className="signUp__container">
      <h1>
       Log In to Twitter
        <img
          className="twitter__img"
          src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale"
          alt=""
        />
      </h1>
      <form action="">
        <input className="signUp__input" placeholder="Email" />
        <input className="signUp__input" placeholder="Password" />
        <Button className="btn reverse__btn">Log In</Button>
      </form>
    </div>
  </div>
  )
}
