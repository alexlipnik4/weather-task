import React, {useEffect, useState} from 'react';
import FavoritesPage from './FavoritesPage';
import weatherService from '../../../common/services/weatherService';
import {Location, CurrentDay} from '../../../common/models/common';

const FavoritesPageController = () => {
    const [locations, setLocations] = useState<Location[]>([]);

    const [LocationsData, setLocationsData] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('favoriteLocations')) {
            let locations = JSON.parse(localStorage.getItem('favoriteLocations') as any)
            setLocations(locations);
        } else {
            alert('local storage is empty')
        }
    }, [])

    async function collectFavoriteData(locations: Location[]) {
        const promises = locations.map(async (location: any) => {
            const req = await weatherService.getCurrentConditions(location.locationKey);
            return req;
        });
        const data: CurrentDay[] = await Promise.all(promises);
        setLocationsData(data as any)
    };
    
    useEffect(() => {
        collectFavoriteData(locations);

    }, [locations])
    
    return (
        <FavoritesPage locations={locations} locationsData={LocationsData} />
    )
}

export default FavoritesPageController;