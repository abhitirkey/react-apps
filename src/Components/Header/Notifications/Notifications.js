import React from 'react'
//import ReactDOM from 'react-dom'
import {FaBell} from 'react-icons/fa'
import './Notifications.scss'
import profilePic from './atirkey_dark.jpg';

class Notifications extends React.Component {


    // toggleDropdown = () => {
    //     this.setState(prevState => {
    //         return {displayDropdown: !prevState.displayDropdown}
    //     })
    // }

    // componentDidMount() {
    //     document.addEventListener('click', this.handleClickOutside, true);
    // }
    
    // componentWillUnmount() {
    //     document.removeEventListener('click', this.handleClickOutside, true);
    // }
    
    // handleClickOutside = event => {
    //     const domNode = ReactDOM.findDOMNode(this);
    
    //     if (!domNode || !domNode.contains(event.target)) {
    //         this.setState({
    //             displayDropdown: false
    //         });
    //     }
    // }

    render(){

        var listItems = [];
        var sample_notification = <li className="notification-item">
                                    <img src={profilePic} alt="Notifications"/>
                                    <div>
                                        <p><strong>Abhishek Tirkey</strong> commented on your pic.</p>
                                    </div>
                                </li>;
        for(var i = 0; i<6; i++){
            listItems.push(sample_notification);    
        }

        return (
            <div className="notifications-div">
                <button className="btn-no-style notifications-btn">
                    <span className="faIcon"><FaBell /></span>
                    <span className="rounded-badge">12</span>
                </button>
                <ul className="notifications-section">
                    <li className="notifications-header">
                        <span style={{fontSize: "1.2em", fontWeight: 'bold'}}>Notifications</span>
                        <span className="float-right"><button className="linkButton">View All</button></span>
                    </li>
                    {listItems}
                </ul>
            </div>

        )
    }
   
}

export default Notifications;