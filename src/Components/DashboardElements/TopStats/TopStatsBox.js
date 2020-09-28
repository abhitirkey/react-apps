import React from 'react'
import { FaEllipsisV } from 'react-icons/fa'

const TopStatsBox = () => {
    return (
        <div className="box box-equal-4 col-flex">
            <div className="title-row">
                <div className="title">Sales Analytics</div>
                <div className="dropdown">
                    <button className="btn-ellipsis dropdown-box float-right">
                        <FaEllipsisV />
                    </button>
                    <ul className="dropdown-list">
                        <li>Some Link Here</li>
                        <li>Some Link Here</li>
                        <li>Some Link Here</li>
                        <li>Some Link Here</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="sales-data">
                    <p className="stat-numbers-bold float-right">8945</p>
                    <p className="no-margin-right">Sales Today</p>
                </div>
            </div>

        </div>
    );
}

export default TopStatsBox;