import React, {useEffect, useState} from 'react';
import FavoritesPage from './FavoritesPage';

const FavoritesPageController = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('favoriteLocations')) {
            let locations = JSON.parse(localStorage.getItem('favoriteLocations') as string)
            setLocations(locations);
            console.log(locations)
        } else {
            console.log('local storage is empty')
        }
    }, [])

    // useEffect(() => {
    //     if(locationKey !== ''){
    //         weatherService.getCurrentConditions(locationKey).then(data => {
    //             props.dispatch(setCurrentCondition(data))
    //         })
    //         weatherService.getFiveDayForecast(locationKey).then(data => {
    //             props.dispatch(setForecast(data))
    //         })
    //         props.dispatch(setCurrentLocationName(inputValue))
    //     }
    // }, [locationKey])
    
    return (
        <FavoritesPage />
    )
}

export default FavoritesPageController;