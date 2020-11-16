import React from 'react'
import './CurrencyChart.scss'

function CurrencyChart() {
    return (
        <div className="currency-chart-container">
            <div className="title-row">
                <div className="title">Currency Chart</div>
                <div className="float-right">
                    <select value='INR'>
                        <option value='INR'>Indian Rupee</option>
                        <option value='GBP'>Great Britian Pounds</option>
                    </select>
                </div>
            </div>
            <div className="currency-chart">
                This is where the currency chart goes...
            </div>
        </div>
    )
}

export default CurrencyChart
