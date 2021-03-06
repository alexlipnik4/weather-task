import React, { useRef, useEffect, useState } from 'react';

import WeatherPage from './WeatherPage';

import weatherService from '../../../common/services/weatherService';
import { connect } from 'react-redux'
import { setCurrentCondition, setForecast, setCurrentLocationName} from '../../../common/redux/actions'
import {Location} from '../../../common/models/common';
import { CircularProgress } from 'rmwc';

const WeatherPageController = (props: any) => {
    const [inputValue, setInputValue] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [locationKey, setLocationKey] = useState('');
    const [modalOpen, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const [unit, setUnit] = useState('C');

    const [options, setOptions] = useState([])

    const checkIfLocationKeyExist = () => {
        let locations = JSON.parse(localStorage.getItem('favoriteLocations') as string)
        let changed: boolean = false;

        locations.forEach((location: Location) => {
            if(location.locationKey === locationKey){
                const trimmedLocations = locations.filter((location: Location) => location.locationKey !== locationKey)
                localStorage.setItem('favoriteLocations', JSON.stringify(trimmedLocations));
                setIsFavorite(false)
                changed = true;
            }
        })

        if(!changed) {
            setIsFavorite(true)
            localStorage.setItem('favoriteLocations', JSON.stringify([...locations, {locationKey, locationName: props.weather.locationName}]));
        }
    }

    const onFavoriteClick = (locationKey: string) => {
        if(localStorage.getItem('favoriteLocations')) {
            checkIfLocationKeyExist();
        } else {
            setIsFavorite(true)
            let locations: Location[] = [
                {
                    locationKey,
                    locationName: props.weather.locationName
                }
            ];
            localStorage.setItem('favoriteLocations', JSON.stringify(locations));
        }
    }

    const onUnitChange = (value: string) => {
        setUnit(value);
    }

    const onTextChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLTextAreaElement;
        const regex = /^[a-zA-Z\s]*$/;
        if(regex.test(target.value)){
            setShowOptions(true);
            setInputValue(target.value)
        } else {
            alert('English letters only!')
        }

    }

    const onItemClick = (value: {text: string, key: string}) => {
        setInputValue(value.text)
        setLocationKey(value.key)
        props.dispatch(setCurrentLocationName(value.text))
    }

    const OutsideInputClick = (ref: any) => {
        useEffect(() => {
            const handleClickOutside = (event: any) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowOptions(false);
                }
            }
      
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    OutsideInputClick(wrapperRef);

    useEffect(() => {
        let locations = JSON.parse(localStorage.getItem('favoriteLocations') as string)

        navigator.geolocation.getCurrentPosition(
            function(position) {
                const {latitude, longitude} = position.coords;
                weatherService.getCurrentLocation(latitude, longitude).then(data => {
                    
                    props.dispatch(setCurrentLocationName(data.LocalizedName));
                    setLocationKey(data.Key)
                    locations && locations.forEach((location: Location) => {
                        
                        if(Object.values(location).indexOf(data.Key) > -1){
                            setIsFavorite(true)
                        }
                    })
                })
            },
            function(error) {
                setLocationKey('1494045')

                locations && locations.forEach((location: Location) => {
                    if(Object.values(location).indexOf('1494045') > -1){
                        setIsFavorite(true)
                    }
                })
                throw(error); 
            }
        )
    },[]);

    useEffect(() => {
        if(inputValue !== ''){
            weatherService.getCityAutocomplete(inputValue).then(data => {
                setOptions(data)
            })
        }
    }, [inputValue])

    useEffect(() => {
        let locations = JSON.parse(localStorage.getItem('favoriteLocations') as string)

        if(locationKey !== ''){
            weatherService.getCurrentConditions(locationKey).then(data => {
                props.dispatch(setCurrentCondition(data))
            })
            weatherService.getFiveDayForecast(locationKey).then(data => {
                props.dispatch(setForecast(data))
            })
            setIsLoading(false)

            locations && locations.forEach((location: Location) => {
                        
                if(Object.values(location).indexOf(locationKey) > -1){
                    setIsFavorite(true)
                }
            })
        }
    }, [locationKey])

    return (
        <>
        {   isLoading ?
                <div style={{height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <CircularProgress size={72} />
                </div>
                :
                <WeatherPage
                    onTextChange={onTextChange}
                    inputValue={inputValue}
                    locationName={props.weather.locationName}
                    forecast={props.weather.forecast}
                    currentDay={props.weather.condition}
                    options={options}
                    wrapperRef={wrapperRef}
                    showOptions={showOptions}
                    onItemClick={onItemClick}
                    unit={unit}
                    onUnitChange={onUnitChange}
                    modalOpen={modalOpen}
                    setOpen={setOpen}
                    locationKey={locationKey}
                    onFavoriteClick={onFavoriteClick}
                    isFavorite={isFavorite}

                    {...props}
                />
        }
        </>
    )
}

const mapStateToProps = (state: any) => {
    return {
        weather: state.weather
    }
};

export default connect(mapStateToProps)(WeatherPageController);
