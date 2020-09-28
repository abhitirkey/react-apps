import React, {Component} from 'react'
import Notifications from './Notifications/Notifications'
import UserMenu from './UserMenu/UserMenu'
import AccountSettings from './AccountSettings/AccountSettings'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import './Header.css'

import SidebarContext from '../Contexts/SidebarContext'

class Header extends Component {

    static contextType = SidebarContext;
    constructor(){
        super();
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar = () => {

        const [sidebar, setSidebar] = this.context;

        setSidebar(!sidebar);
    }

    render(){

        const [sidebar, setSidebar] = this.context;

        return (
            <header className="header-container">
                <div className="header-top">
                    {
                        sidebar ? 
                            null: <span className="hamburger" onClick={this.toggleSidebar}><GiHamburgerMenu/></span>
                    }
                    <h2 className="logo">R E A C T - P L A Y G R O U N D</h2>
                    <div className="flex-spacer"></div>
                    <div className="searchbar-div">
                        <input type="search" />
                        <button className="btn-no-style" type="submit">
                        <FaSearch/>
                        </button>
                    </div>
                    <Notifications/>
                    <UserMenu />
                    <AccountSettings />
                </div>
            </header>
        );
    }
}

export default Header;