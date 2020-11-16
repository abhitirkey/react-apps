import React, {useContext} from 'react'
import './Sidebar.css'
import { GrClose } from 'react-icons/gr'
import SidebarContext from '../Contexts/SidebarContext'

function Sidebar() {

    const [sidebar, setSidebar] = useContext(SidebarContext);

    const closeSidebar = () => {
        setSidebar(false);
    }

    return (
        <div className={sidebar ? "sidebar-container": "sidebar-container hide"}>
            <h1 className="float-right sidebar-close" onClick={closeSidebar}><GrClose className="close-icon"></GrClose></h1>
            <ul className="sidebar-list">
                <li>Dashboard</li>
                <li>Account</li>
                <li>Settings</li>
                <li>Analytics</li>
                <li>Create</li>
                <li>Edit</li>
            </ul>
            
        </div>
    )
}

export default Sidebar
