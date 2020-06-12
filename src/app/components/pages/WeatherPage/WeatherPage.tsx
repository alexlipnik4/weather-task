import React, { useRef, useEffect } from 'react';

import {TextField, Typography, Button, Icon, ListItem, List, Elevation} from 'rmwc';
import {IWetherPageProps} from './WeatherPage.model';
import './WeatherPage.scss';
import Day from '../../Day/Day';

import {getIcon} from '../../../common/services/weatherIconService'

const WeatherPage = (props: IWetherPageProps) => (
    <div className="weather-page">
        <div  className="weather-page__header">
            <div ref={props.wrapperRef}>
                <TextField
                    value={props.inputValue}
                    onChange={props.onTextChange}
                    icon="search"
                    outlined
                    placeholder="Search location"
                >
                    <List className={`${props.showOptions ? 'weather-page__search-options' : 'weather-page__search-options--disabled'}`}>
                        <Elevation className="weather-page__search-options-elevation" z={3}>
                            {props.options.map((location, i) => (
                                <ListItem
                                    key={i}
                                    onClick={() => props.onItemClick({
                                        text: `${location.LocalizedName} ${location.Country.LocalizedName}`,
                                        key: location.Key
                                    })}
                                    className="weather-page__list-item"
                                >
                                    {`${location.LocalizedName} ${location.Country.LocalizedName}`}
                                </ListItem>
                            ))}
                        </Elevation>
                    </List>
                </TextField>
            </div>
        </div>

        <div className="weather-page__content">
            <div className="weather-page__content-header">
                <div className="weather-page__content-actions">
                    <Icon icon="favorite" />
                    <Button outlined>Add to favorites</Button>
                </div>
            </div>

            <div className="weather-page__current-day-status">
                <img src={getIcon(props.currentDay.WeatherIcon)} />
                <div>
                    <Typography tag="div" use="body1">{props.locationName}</Typography>
                    <Typography tag="div" use="body1">
                        {`${props.currentDay.Temperature.Metric.Value} ${props.currentDay.Temperature.Metric.Unit}`}
                    </Typography>

                    <Typography tag="div" className="weather-page__status" use="headline3">{props.currentDay.WeatherText}</Typography>

                </div>
            </div>

            <div className="weather-page__content-body">
                <div className="weather-page__week-status-container">
                    {
                        props.forecast.DailyForecasts.map((dayValue, i) => (
                            <Day key={i} {...dayValue} />
                        ))
                    }
                </div>
            </div>

        </div>
    </div>
)


export default WeatherPage;