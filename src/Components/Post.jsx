import { Avatar } from '@mui/material'
import React from 'react'
import './css/Post.css'
import image from "../assets/IMG_4691.JPG";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';


export default function Post() {
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar src={image} />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Tommy Nguyen <span>
                            <VerifiedUserIcon className='post__badge' />
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>I Challenge yout o build twitter clone. </p>
                </div>
            </div>
        </div>
    </div>
  )
}
