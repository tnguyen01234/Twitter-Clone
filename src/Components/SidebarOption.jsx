import React from 'react'
import './css/SidebarOption.css'

export default function SidebarOption({ text, Icon, active }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <div className='sidebar__icon'>{Icon}</div>
        <h2>{text}</h2>
    </div>
  )
}
