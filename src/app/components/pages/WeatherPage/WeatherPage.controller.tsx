import React, { useRef, useEffect, useState, Ref } from 'react';

import WeatherPage from './WeatherPage';

import weatherService from '../../../common/services/weatherService';
import { connect } from 'react-redux'
import { setCurrentCondition, setForecast, setCurrentLocationName} from '../../../common/redux/actions'
import {Location} from '../../../common/models/common';

const WeatherPageController = (props: any) => {
    const [inputValue, setInputValue] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [locationKey, setLocationKey] = useState('');
    const [modalOpen, setOpen] = React.useState(false);

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
        setShowOptions(true);
        setInputValue(target.value)
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

        locations && locations.forEach((location: Location) => {
            if(location.locationKey === locationKey){
                setIsFavorite(true)
            }
        })

        navigator.geolocation.getCurrentPosition(
            function(position) {
                const {latitude, longitude} = position.coords;
                weatherService.getCurrentLocation(latitude, longitude).then(data => {
                    props.dispatch(setCurrentLocationName(data.LocalizedName));
                    setLocationKey(data.Key)

                    locations && locations.forEach((location: Location) => {
                        if(location.locationKey === data.key){
                            setIsFavorite(true)
                        } else {
                            setIsFavorite(false)
                        }
                    })
                })
            },
            function(error) {
                setLocationKey('1494045')
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
        if(locationKey !== ''){
            weatherService.getCurrentConditions(locationKey).then(data => {
                props.dispatch(setCurrentCondition(data))
            })
            weatherService.getFiveDayForecast(locationKey).then(data => {
                props.dispatch(setForecast(data))
            })
        }
    }, [locationKey])

    return (
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
    )
}

const mapStateToProps = (state: any) => {
    return {
        weather: state.weather
    }
};

export default connect(mapStateToProps)(WeatherPageController);
