import React, {createContext, useState, useEffect} from 'react';
import AuthService from '../services/weatherService';
import { rejects } from 'assert';

export const AuthContext = createContext();

export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const [locationKey, setLocationKey] = useState(215793);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                const {latitude, longitude} = position.coords;
                AuthService.getCurrentLocation(latitude, longitude).then(data => {
                    console.log(data, 'data')
                })
            },
            function(error) {
                console.log('error'); 
            }
        )

        // getLocation()


    },[])

    return (
        <div style={{height: '100%'}}>
            <AuthContext.Provider value={{user, setUser, setIsAuthenticated, isAuthenticated}}>
                {children}
            </AuthContext.Provider>
        </div>
    )

}