import React from 'react'
import './UserMenu.css'
import { FaCaretDown, FaPowerOff, FaCog, FaUserTie, FaLock } from 'react-icons/fa'
 
const UserMenu = () => {
    return(
        <div className="userMenuContainer">
            <button className="btn-transparent userMenuButton">
                <img src="/images/atirkey_profile_pic.jpg" />
                <span>Abhishek Tirkey <FaCaretDown/> </span>
            </button>
            <ul className="userMenu">
                <li className="userMenu-header">
                    <span style={{fontSize: "0.8em", fontWeight: 'bold'}}>Welcome!</span>
                </li>
                <li className="userMenu-item">
                   <span><FaUserTie/> My Account</span>
                </li>
                <li className="userMenu-item">
                   <span><FaCog/> Settings</span>
                </li>
                <li className="userMenu-item">
                   <span><FaLock/> Lock Screen</span>
                </li>
                <li className="userMenu-logout">
                   <span><FaPowerOff /> Logout</span>
                </li>
            </ul>
        </div>
    )
}

export default UserMenu;