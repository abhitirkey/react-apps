import React from 'react'
import MarketLineChart from './MarketLineChart'
import MarketLineChartFusion from './MarketLineChartFusion'
import CurrencyChart from './CurrencyChart'
import './StockSection.scss'

function StockSection() {

    return (
            <div className="stockSectionDiv">
                <ul className="tablist">
                <li>
                    <input type="radio" id="marketTab" name="tab" checked />
                    <label for="marketTab">Market Chart</label>
                    <div>
                        Market Content Goes Here
                    </div>
                </li>
                <li>
                    <input type="radio" id="currencyTab" name="tab" />
                    <label for="currencyTab">Currency Data</label>
                    <div>
                        Currency Content Goes Here
                    </div>
                </li>
                {/* <div className="chart-container">
                    <MarketLineChart/>
                    <CurrencyChart />
                </div>
            </div> */}
                </ul>
            </div>            
    )
}

export default StockSection
