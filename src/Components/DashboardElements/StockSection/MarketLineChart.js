import React, {useEffect, useState} from 'react'
import './MarketLineChart.scss'

function MarketLineChart() {

    const [chartOptions, setChartOptions] = useState(null);
    const [chartSeries, setChartSeries] = useState(null);

    useEffect(() => {
        const fetchChartData = async () => {
            await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?region=US&symbol=AAPL", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                    "x-rapidapi-key": "d70bc05ea1msh7306785cbc4e7d5p1b5a7cjsnf80c4f429f6c"
                }
            })
            .then(response => {
               return response.json();
            })
            .then(data => {
                const prices = data.prices.slice(0, 11);
                console.log(prices);
                formatToChart(prices);
            })
            .catch(err => {
                console.log(err);
            });
        }

        const formatToChart = (prices) => {
            const openData = [], closeData = [], highData = [], lowData = [];
            
            prices.reverse(); // Do this get the dates in increasing order

            prices.forEach(price => { 
                openData.push([price.date, price.open]);
                closeData.push([price.date, price.close]);
                highData.push([price.date, price.high]);
                lowData.push([price.date, price.low]);
            });

 
        }
        
        fetchChartData();
    }, [])

    const formatToDate = (timestamp) => {
        // convert unix timestamp to milliseconds
        var ts_ms = timestamp * 1000;

        // initialize new Date object
        var date_ob = new Date(ts_ms);

        // year as 4 digits (YYYY)
        var year = date_ob.getFullYear();

        // month as 2 digits (MM)
        var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

        // date as 2 digits (DD)
        var date = ("0" + date_ob.getDate()).slice(-2);

        // return date as YYYY-MM-DD format
        return (year + "-" + month + "-" + date);

        // // hours as 2 digits (hh)
        // var hours = ("0" + date_ob.getHours()).slice(-2);

        // // minutes as 2 digits (mm)
        // var minutes = ("0" + date_ob.getMinutes()).slice(-2);

        // // seconds as 2 digits (ss)
        // var seconds = ("0" + date_ob.getSeconds()).slice(-2);

        // // date as YYYY-MM-DD format
        // console.log("Date as YYYY-MM-DD Format: " + year + "-" + month + "-" + date);

        // console.log("\r\n");

        // // date & time as YYYY-MM-DD hh:mm:ss format: 
        // console.log("Date as YYYY-MM-DD hh:mm:ss Format: " + year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

        // console.log("\r\n");

        // // time as hh:mm format: 
        // console.log("Time as hh:mm Format: " + hours + ":" + minutes);
    }


    return (
        <div className="market-history-container">
                <div className="title-row">
                    <div className="title">Market History</div>
                    <div className="float-right">
                        <select value='AAPL'>
                            <option value='MSFT'>Microsoft</option>
                            <option value='AAPL'>Apple</option>
                        </select>
                    </div>
                </div>
                <div className="market-line-chart-div">
                    This is where the market chart goes...
                </div>
            </div>
    )
}

export default MarketLineChart
