import React, {Component} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import CityListContext from '../CityListContext'
import './Map.css'
import mapMarker from './bigcity.png';

class Map extends Component {

    static contextType = CityListContext;

    constructor(){
        super();
        this.state = {
            viewport: {
              height: '100%',
              width: '100%',
              latitude: 39.381266,
              longitude: -97.922211,
              zoom: 3
            },
            records: [],
            selectedCity: null
          };
        
    }

    componentDidMount() {

        const asyncFetch = async () => {
            await fetch('https://examples.opendatasoft.com/api/records/1.0/search/?dataset=largest-us-cities&q=&rows=1000')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    records : data.records
                })
            });
        }
        asyncFetch();  
    }
  
    render() {

        const {highlightedCity, setHighlightedCity} = this.context;
            
        const access_token = "pk.eyJ1IjoiYWJldGlya2V5IiwiYSI6ImNrZmR1aHdtczFsYmsycWxkZ2Uzem41bDAifQ.jM5ih6zz9JsbtjqVesCT6A";
        return (
        <div className="box box-2-3 map">
            
            <ReactMapGL mapboxApiAccessToken={access_token}
            {...this.state.viewport}
            mapStyle="mapbox://styles/abetirkey/ckfdwsvuy09rn19pf1j765q1n"
            onViewportChange={(viewport) => this.setState({viewport})}
            >
                {
                    this.state.records.map(city => {
                        var [latitude, longitude] = city.fields.coordinates.split(";");
                        latitude = Number.parseFloat(latitude);
                        longitude = Number.parseFloat(longitude);
                        return (
                            <Marker key={city.recordid} latitude={latitude} longitude={longitude}>
                                <button className="marker-btn {city.recordid}" onClick={e => {
                                    e.preventDefault();
                                    this.setState({
                                        selectedCity: {data: city, latitude: latitude, longitude: longitude}
                                    })
                                }}>
                                <img src={mapMarker} alt="Big City Icon" />
                                </button>
                            </Marker>
                            );
                    })
                }

                {
                    this.state.selectedCity ? (
                        <Popup 
                            latitude={this.state.selectedCity.latitude}
                            longitude={this.state.selectedCity.longitude}
                            onClose={() => {
                                this.setState({ selectedCity: null });
                            }}
                            >
                            <div className="popupCityData">
                                <p className="CityAndState">{this.state.selectedCity.data.fields.city}, {this.state.selectedCity.data.fields.state}</p>
                                <p className="Rank">Rank: {this.state.selectedCity.data.fields.rank}</p>
                                <p className="Population">Population: {this.state.selectedCity.data.fields.population}</p>          
                            </div>            
                        </Popup>
                    ) : null
                }

                { 
                    highlightedCity ? 
                            <Popup 
                                latitude={highlightedCity.latitude}
                                longitude={highlightedCity.longitude}
                                onClose={() => {
                                    setHighlightedCity(null);
                                }}>
                                <div className="popupCityData">
                                    <p className="CityAndState">{highlightedCity.data.fields.city}, {highlightedCity.data.fields.state}</p>
                                    <p className="Rank">Rank: {highlightedCity.data.fields.rank}</p>
                                    <p className="Population">Population: {highlightedCity.data.fields.population}</p>          
                                </div>            
                            </Popup>: null
                }

            </ReactMapGL>
        </div>
        );
    }
  }

  export default Map;