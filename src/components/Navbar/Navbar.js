import React from 'react';
import logo from '../../assets/logo.jpg';
import contactImg from '../../assets/contact.png';
import {Link} from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt="logo"className='logo' />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Experience</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contactImg} alt="" className="desktopMenuImg"/> Contact Me </button>
    </nav>
  )
}

export default Navbar