import React from 'react'
import './Inbox.css'

const InboxItem = () => {
    return (
        <div className="inboxItem">
            <div><img src="/images/atirkey_profile_pic.jpg" alt=""/></div>
            <div style={{marginLeft: '20px'}}>
                <p className="messageBy">Matteus</p>
                <p className="messageExcerpt">Message excerpt</p>
            </div>
            <div className="flex-spacer"></div>
            <div className="message-time">3.40 PM</div>
        </div>
    );
}

export default InboxItem;