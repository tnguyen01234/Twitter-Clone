import { Avatar } from '@mui/material'
import React from 'react'
import './css/Post.css'

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';


export default function Post({ displayName, username, verified, text, image, avatar, id }) {
    function deletePost() {
        const postRef = doc(db, "posts", id)
        deleteDoc(postRef)
    }

  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar src={avatar} />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3 className='username'>
                        {displayName} <span className='post__headerSpecial'>
                            {verified && <VerifiedUserIcon className='post__badge' />}
                            @{username}
                        </span>
                    </h3>
                    <DeleteForeverIcon className='delete__icon' onClick={deletePost} />
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt="" />
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize='small'/>
                <RepeatIcon fontSize='small'/>
                <FavoriteBorderIcon fontSize='small'/>
                <PublishIcon fontSize='small'/>
            </div>
        </div>
    </div>
  )
}
