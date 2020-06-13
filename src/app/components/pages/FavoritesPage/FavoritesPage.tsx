import React from 'react';
import { CurrentDay } from '../../../common/models/common';
import { Typography, Elevation } from 'rmwc';
import { getIcon } from '../../../common/services/weatherIconService';
import './FavoritePage.scss';

const FavoritesPage = (props: any) => (
    <div className="favorite-page">
        {props.locationsData.map((location: CurrentDay, i: number) => (
            <Elevation className="favorite-page__item" z={3} key="i">
                <Typography use="headline5">{props.locations[i].locationName}</Typography>
                
                <img src={getIcon(location.WeatherIcon)} />
                
                <Typography use="body2">
                    {`${Math.round(location.Temperature.Metric.Value)} C`}
                </Typography>

                <Typography use="headline4">{location.WeatherText}</Typography>
            </Elevation>
        ))}
    </div>
)


export default FavoritesPage;