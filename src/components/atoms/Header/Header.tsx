import React from 'react'
import logo from '../../../assets/images/logo/GuifaffinityLogo.svg'
import './Header.css'

export const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="logo" />
    </div>
  )
}
