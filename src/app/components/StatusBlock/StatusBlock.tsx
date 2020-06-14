import React from 'react';
import { Typography, Elevation } from 'rmwc';
import moment from 'moment';
import {getIcon} from '../../common/services/weatherIconService'

import { DailyForecast } from '../pages/WeatherPage/WeatherPage.model';
import './StatusBlock.scss';

interface IStatusBlockProps extends DailyForecast {
    celsius: boolean,
    showDate: boolean,
    headline?: string,
}

const StatusBlock = (props: IStatusBlockProps) => {
    const temperatureMax = props.celsius ? (props.Temperature.Maximum.Value - 32)*5/9 : props.Temperature.Maximum.Value;
    const temperatureMin = props.celsius ? (props.Temperature.Minimum.Value - 32)*5/9 : props.Temperature.Minimum.Value;
    return (
        <Elevation z={2} className="status-block">
            {!!props.headline && <Typography use="headline4">{props.headline}</Typography>}

            <img alt="" src={getIcon(props.Day.Icon)} />
            {props.showDate && 
                <Typography use="body2">{moment(props.Date).format('dddd')}</Typography>
            }
            <Typography use="body2">
                {`${Math.round(temperatureMin)} - ${Math.round(temperatureMax)} ${props.celsius ? 'C' : props.Temperature.Maximum.Unit}`}
            </Typography>
        </Elevation>
    )
};

export default StatusBlock;