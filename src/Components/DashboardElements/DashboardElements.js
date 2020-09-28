import React, {Component} from 'react'
import TopStats from './TopStats/TopStats'
import InboxAndProjects from './InboxAndProjects/InboxAndProjects'
import ChartsOne from './ChartsOne/ChartsOne'
import Satellite from './Satellite/Satellite'
import './DashboardElements.css'

class DashboardElements extends Component {
    render(){
        return (
            <div className="dashboardMainContainer">
                <TopStats />
                <ChartsOne />
                <Satellite />
                <InboxAndProjects />
            </div>
        );
    }
}

export default DashboardElements;