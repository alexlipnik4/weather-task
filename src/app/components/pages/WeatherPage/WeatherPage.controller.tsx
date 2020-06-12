import React, { useRef, useEffect, useState, Ref } from 'react';

import WeatherPage from './WeatherPage';

import weatherService from '../../../common/services/weatherService';
import { connect } from 'react-redux'
import { setCurrentCondition, setForecast, setCurrentLocationName} from '../../../common/redux/actions'

const WeatherPageController = (props: any) => {
    const [inputValue, setInputValue] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [locationKey, setLocationKey] = useState('');
    const [unit, setUnit] = useState('C');

    const [options, setOptions] = useState([
        {
            AdministrativeArea: {
                ID: 'string',
                LocalizedName: 'string',
            },
            Country: {
                ID: 'string',
                LocalizedName: 'Isreal',
            },
            Key: '213225',
            LocalizedName: 'Jerusalem',
            Rank: 123,
            Type: 'string',
        }
    ])



    // useEffect(() => {
    //     if(inputValue !== ''){
    //         weatherService.getCityAutocomplete(inputValue).then(data => {
    //             setOptions(data)
    //         })
    //     }
    // }, [inputValue])

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


    const onUnitChange = (value: string) => {
        setUnit(value);
    }

    const wrapperRef = useRef(null);
    OutsideInputClick(wrapperRef);

    const onTextChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLTextAreaElement;
        setShowOptions(true);
        setInputValue(target.value)
    }

    const onItemClick = (value: {text: string, key: string}) => {
        setInputValue(value.text)
        setLocationKey(value.key)
    }

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
        />
    )
}

const mapStateToProps = (state: any) => {
    return {
        weather: state.weather
    }
};

export default connect(mapStateToProps)(WeatherPageController);
