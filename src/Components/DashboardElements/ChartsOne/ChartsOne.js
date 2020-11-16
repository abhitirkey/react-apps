import React, {useState, useEffect, useContext} from 'react'
import CityListContext from './CityListContext'
import Map from './Map/Map'
import Pagination from 'react-js-pagination'
import {BiLoaderAlt} from 'react-icons/bi'
import './ChartsOne.css'

import { FaEllipsisV } from 'react-icons/fa'

const ChartsOne = () => {
    return (
        <CityListProvider>
            <LargestCities />
        </CityListProvider>
    );
}

const LargestCities = () => {

    return (
        <div className="dashboard-flex-container-XL">
            <Map></Map>
            <CitiesList />
        </div>
    );
}

export const CityListProvider = ({children}) => {
    const [highlightedCity, setHighlightedCity] = useState(null);

    return (
        <CityListContext.Provider value={{highlightedCity, setHighlightedCity}}>
            {children}
        </CityListContext.Provider>
    )
}

const CitiesList = () => {

    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [dataItems, setDataItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const {highlightedCity, setHighlightedCity} = useContext(CityListContext);

    let [start, end] = [null, null];
    let listContent = [];
    let currentPosts = [];
    let listHTML = <h3>Loading data...please wait. <BiLoaderAlt/></h3>

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        setCurrentPage(pageNumber);
    }

    const cityClickHandler = (cityItem) => {
        console.log("City clicked: ", cityItem);
        var [latitude, longitude] = cityItem.fields.coordinates.split(";");
        latitude = Number.parseFloat(latitude);
        longitude = Number.parseFloat(longitude);
        setHighlightedCity({data: cityItem, latitude: latitude, longitude: longitude});
    }

    useEffect(() => {
       const getTableData = async () => {
            await fetch('https://examples.opendatasoft.com/api/records/1.0/search/?dataset=largest-us-cities&q=&rows=1000')
            .then(response => (response.json()))
            .then(data => {
                let city_records = data.records;
                city_records.sort((a, b) => {
                    return (a.fields.rank - b.fields.rank);
                })
                setDataItems(city_records);
            });
       }
       getTableData();
    }, [])

    if(itemsPerPage && currentPage && dataItems){
        end = itemsPerPage * currentPage;
        start = end - 10;
        currentPosts = dataItems.slice(start, end);
        listHTML = <ul className="DataList">
        {
            currentPosts.map(item => 
            (<li key={item.fields.rank} onClick={() => cityClickHandler(item)}><span style={{fontWeight: "bold"}}>#{item.fields.rank}</span> {item.fields.city}, {item.fields.state}</li>))
        }
        </ul>;
    }

    return (
        <div className="box box-equal-3">
                <div className="title-row">
                    <span className="title">Largest US Cities</span>
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
                <div className="data-section largest-cities">
                   {/* ItemsPerPage: {itemsPerPage}
                   currentPage: {currentPage}
                   dataItems: {dataItems.length}
                   Start: {start}
                   End: {end} */}
                    {listHTML}
                    <Pagination
                        activePage={currentPage}
                        itemsCountPerPage={itemsPerPage}
                        totalItemsCount={dataItems.length}
                        onChange={handlePageChange}
                        />
                </div>
            </div>
    );
}

export default ChartsOne;