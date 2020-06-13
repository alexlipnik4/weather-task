import React from 'react';
import FavoritesPage from './FavoritesPage';

const FavoritesPageController = () => {
    const getLocations = () => {
        if(localStorage.getItem('favoriteLocations')) {
            let locations = JSON.parse(localStorage.getItem('favoriteLocations') as string)
            console.log(locations, 'locations')
        } else {
            console.log('empty')
        }
    }
    getLocations()
    
    return (
        <FavoritesPage />
    )
}

export default FavoritesPageController;