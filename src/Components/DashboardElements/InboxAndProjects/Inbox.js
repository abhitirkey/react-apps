import React from 'react'
import InboxItem from './InboxItem'
import { FaEllipsisV } from 'react-icons/fa'
import './Inbox.css'

const Inbox = () => {
    return (
        <div className="box box-1-3">
            <div className="title-row">
                <span className="title">Inbox</span>
                <div className="dropdown">
                    <button className="btn-ellipsis float-right">
                        <FaEllipsisV/>
                    </button>
                    <ul className="dropdown-list">
                        <li>Something</li>
                        <li>Something</li>
                        <li>Something</li>
                        <li>Something</li>
                    </ul>
                </div>
            </div>
            <div className="inbox-section">
                <InboxItem />
                <InboxItem />
                <InboxItem />
                <InboxItem />
                <InboxItem />
            </div>
        </div>
    );
}

export default Inbox;