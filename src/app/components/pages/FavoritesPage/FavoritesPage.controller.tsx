import React, {useEffect, useState} from 'react';
import FavoritesPage from './FavoritesPage';
import weatherService from '../../../common/services/weatherService';
import {Location} from '../../../common/models/common';

const FavoritesPageController = () => {
    const [locations, setLocations] = useState([]);
    const [locationsData, setLocationsData] = useState([])

    useEffect(() => {
        if(localStorage.getItem('favoriteLocations')) {
            let locations = JSON.parse(localStorage.getItem('favoriteLocations') as string)
            setLocations(locations);
            console.log(locations)
        } else {
            console.log('local storage is empty')
        }
    }, [])

    useEffect(() => {
        locations.forEach((location: Location) => {
            weatherService.getCurrentConditions(location.locationKey).then(data => {
                setLocationsData([...locationsData, data] as any)
            })
        });
    }, [locations])
    
    return (
        <FavoritesPage locations={locations} locationsData={locationsData} />
    )
}

export default FavoritesPageController;