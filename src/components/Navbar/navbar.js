import React from 'react';
import './navbar.css';
import cSmall from '../../assets/cSmall.png';
import address from '../../assets/address.png'
import { Link } from 'react-scroll';
const Navbar = () =>{
return (
    <nav className='navbar'>
    <img  src={cSmall} alt="small" className='small'/>
    <div className='desktopMenu'>
        <Link className="desktopMenuItem">Home</Link>
        <Link className="desktopMenuItem">About</Link>
        <Link className="desktopMenuItem">Portfolio</Link>
        <Link className="desktopMenuItem">Clients</Link>
    </div>
    <button className="desktopMenuBtn">
        <img src={address} alt="contact" className="desktopMenuImg" /> Contact Me
    </button>
    </nav>
)
}

export default Navbar