import React, { useState } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
    const [icon, setIcon] = useState(faBars);
    const [active, setActive] = useState('navbar');
    function menuIcon(){
        if(icon == faBars){
            setIcon(faXmark)
            active == 'navbar' ? setActive('navbar active') : setActive('navbar')
        }else{
            setIcon(faBars)
            active == 'navbar' ? setActive('navbar active') : setActive('navbar')
        }
    }
  return (
    <div className='container'>
        <div className='header'>
            <div className='logo'>
                <h1>Logo</h1>
            </div>
            <div className='menu-icon'>
                <span onClick={menuIcon}>
                <FontAwesomeIcon icon={icon} />
                </span>
            </div>
            <div className={active}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li className='login'>Login</li>
                    <li className='signup'>Signup</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
