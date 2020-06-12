import React from 'react';
import { Typography, Elevation } from 'rmwc';
import moment from 'moment';
import {getIcon} from '../../common/services/weatherIconService'

import { DailyForecast } from '../pages/WeatherPage/WeatherPage.model';
import './Day.scss';

interface IDayProps extends DailyForecast {
    celsius: boolean,
}

const Day = (props: IDayProps) => {
    const temperature = props.celsius ? (props.Temperature.Maximum.Value - 32)*5/9 : props.Temperature.Maximum.Value;
    return (
        <Elevation z={2} className="day">
            <img src={getIcon(props.Day.Icon)} />
            <Typography use="body2">{moment(props.Date).format('dddd')}</Typography>
            <Typography use="body2">
                {`${Math.round(temperature)} ${props.celsius ? 'C' : props.Temperature.Maximum.Unit}`}
            </Typography>
        </Elevation>
    )
};

export default Day;