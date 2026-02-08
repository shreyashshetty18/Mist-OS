import React from 'react'
import './nav.scss'

const Nav = () => {
  return (
    <div>
      <div className="left">
        <div className='apple-logo'>
          <img src="./navbar-icons/apple.svg" alt="apple logo" />
        </div>
      </div>
      <div className="right">
        <div className="wifi-icon">
          <img src="./navbar-icons/wifi.svg" alt="wifi icon" />
        </div>
      </div>
    </div>
  )
}

export default Nav