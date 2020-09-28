import React from 'react'
import Inbox from './Inbox'
import Projects from './Projects'

const InboxAndProjects = () => {
    return (
        <div className="dashboard-flex-container-large">
            <Inbox />
            <Projects />
        </div>
    )
}

export default InboxAndProjects;