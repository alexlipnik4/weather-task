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