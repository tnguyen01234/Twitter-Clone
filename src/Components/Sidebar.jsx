import React from 'react'
import './css/Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import { UserAuth } from '../context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';



export default function Sidebar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logOut();
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twittericon'/>
        <SidebarOption active Icon={<HomeIcon />} text="Home" />
        <SidebarOption Icon={<TagIcon />} text="Explore" />
        <SidebarOption Icon={<NotificationsNoneIcon />} text="Notification" />
        <SidebarOption Icon={<MailOutlineIcon />} text="Message" />
        <SidebarOption Icon={<BookmarkBorderIcon />} text="Bookmarks" />
        <SidebarOption Icon={<ListAltIcon />} text="Lists" />
        <SidebarOption Icon={<PermIdentityIcon />} text="Profile" />
        <SidebarOption Icon={<MoreHorizIcon />} text="More" />

<Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
{user?.email ? (<Button variant='outlined' className='sidebar__tweet log__out' onClick={handleLogout} fullWidth>Sign Out</Button>) : null}
    </div>
  )
}
