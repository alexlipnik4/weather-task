import React from 'react';
import { Typography } from 'rmwc';
import moment from 'moment';
import {getIcon} from '../../common/services/weatherIconService'

import { DailyForecast } from '../pages/WeatherPage/WeatherPage.model';
import './Day.scss';

const Day = (props: DailyForecast) => (
    <div className="day">
        <img src={getIcon(props.Day.Icon)} />
        <Typography use="body2">{moment(props.Date).format('dddd')}</Typography>
        <Typography use="body2">
            {`${props.Temperature.Maximum.Value} ${props.Temperature.Maximum.Unit}`}
        </Typography>
    </div>
);

export default Day;