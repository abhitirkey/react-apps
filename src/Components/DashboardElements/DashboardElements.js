import React, {Component} from 'react'
import StockSection from './StockSection/StockSection'
import TopStats from './TopStats/TopStats'
import InboxAndProjects from './InboxAndProjects/InboxAndProjects'
import ChartsOne from './ChartsOne/ChartsOne'
import Satellite from './Satellite/Satellite'
import './DashboardElements.scss'

class DashboardElements extends Component {
    render(){
        return (
            <div className="dashboardMainContainer">
                <StockSection />
                <TopStats />
                <ChartsOne />
                <Satellite />
                <InboxAndProjects />
            </div>
        );
    }
}

export default DashboardElements;