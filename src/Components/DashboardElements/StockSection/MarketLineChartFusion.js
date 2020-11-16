import React from "react";

import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";

import ReactFC from 'react-fusioncharts'

charts(FusionCharts);

const jsonify = res => res.json();

const dataFetch = fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?region=US&symbol=AAPL", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "x-rapidapi-key": "d70bc05ea1msh7306785cbc4e7d5p1b5a7cjsnf80c4f429f6c"
    }
}).then(jsonify).then(data => {return data.prices});

const schema = [{
    "name": "Time",
    "type": "date",
    "format": "%-m/%-d/%Y"
  }, {
    "name": "Type",
    "type": "string"
  }, {
    "name": "Price",
    "type": "number"
  }];

const dataSource = {
    chart: {},
    series: "Type",
    yaxis: [
      {
        plot: "Price",
        title: "Price",
        format: {
          prefix: "$"
        }
      }
    ]
  };

class MarketLineChartFusion extends React.Component {

    constructor() {
        super();
        this.onFetchData = this.onFetchData.bind(this);
        this.formatToDate = this.formatToDate.bind(this);
        this.state = {
          timeseriesDs: {
            type: "zoomline",
            renderAt: "container",
            width: "100%",
            height: "100%",
            dataSource
          }
        };
      }
    
      componentDidMount() {
        this.onFetchData();
      }
    
      onFetchData() {
        Promise.all([dataFetch]).then(res => {
          const data = res[0];
          let formattedData = [];

          data.reverse(); 

            data.forEach(price => { 
                let formattedDate = this.formatToDate(price.date);
                formattedData.push([formattedDate, "Open", price.open]);
                formattedData.push([formattedDate, "Close", price.close]);
                formattedData.push([formattedDate, "High", price.high]);
                formattedData.push([formattedDate, "Low", price.low]);
            });

            console.log("Formatted Data: ", formattedData);

          const fusionTable = new FusionCharts.DataStore().createDataTable(
            formattedData,
            schema
          );

          const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
          timeseriesDs.dataSource.data = fusionTable;
          this.setState({
            timeseriesDs
          });
        });
      }
    
       formatToDate = (timestamp) => {
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
        return (month + "/" + date + "/" + year);

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

  render() {
    return (
        <div className="box box-2-3">
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
                    {this.state.timeseriesDs.dataSource.data ? (
                        <ReactFC {...this.state.timeseriesDs} />
                        ) : (
                        "loading"
                        )}

                </div>
            </div>
    );
  }
}

export default MarketLineChartFusion;
