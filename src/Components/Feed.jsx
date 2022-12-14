import React from 'react'
import "./css/Feed.css"
import Post from './Post'
import TweetBox from './TweetBox'

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feed__header'>
        <h2 >Home
        </h2>
      </div>
      <TweetBox />
      <Post />
    </div>
  )
}
