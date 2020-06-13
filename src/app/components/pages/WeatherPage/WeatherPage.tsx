import React from 'react';

import {
    TextField,
    Typography,
    ListItem,
    List,
    Elevation,
    TopAppBar,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarNavigationIcon,
    TopAppBarActionItem,
    Drawer,
    DrawerHeader,
    DrawerTitle,
    DrawerSubtitle,
    DrawerContent,
} from 'rmwc';
import {IWetherPageProps} from './WeatherPage.model';
import './WeatherPage.scss';

import {getIcon} from '../../../common/services/weatherIconService'
import StatusBlock from '../../StatusBlock/StatusBlock';
import { toggleTheme } from '../../../common/redux/actions';

const WeatherPage = (props: IWetherPageProps) => (
    <>
        <Drawer modal open={props.modalOpen} onClose={() => props.setOpen(false)}>
            <DrawerHeader>
                <DrawerTitle>UnitType</DrawerTitle>
                <DrawerSubtitle>Select celsius or fahrenheit</DrawerSubtitle>
            </DrawerHeader>
            <DrawerContent>
                <List>
                    <ListItem selected={props.unit === 'F'} onClick={() => props.onUnitChange('F')}>Imperial</ListItem>
                    <ListItem selected={props.unit === 'C'} onClick={() => props.onUnitChange('C')}>Metric</ListItem>
                </List>
            </DrawerContent>

            <DrawerHeader>
                <DrawerTitle>Theme</DrawerTitle>
                <DrawerSubtitle>Select dark or light theme</DrawerSubtitle>
            </DrawerHeader>
            <DrawerContent>
                <List>
                    <ListItem selected={props.weather.themeIsLight} onClick={() => props.dispatch(toggleTheme())}>Light</ListItem>
                    <ListItem selected={!props.weather.themeIsLight} onClick={() => props.dispatch(toggleTheme())}>Dark</ListItem>
                </List>
            </DrawerContent>
        </Drawer>

        <div className="weather-page">
            <TopAppBar className="weather-page__header">
                <TopAppBarRow>
                    <TopAppBarSection alignStart>
                        <TopAppBarNavigationIcon onClick={() => props.setOpen(!props.modalOpen)} icon="menu" />

                        <div className="weather-page__text-field" ref={props.wrapperRef}>
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
                    </TopAppBarSection>

                    <TopAppBarSection alignEnd>
                        <TopAppBarActionItem
                            style={{color: `${props.isFavorite ? 'red' : 'var(--mdc-theme-text-primary-on-background)'}`}}
                            onClick={() => props.onFavoriteClick(props.locationKey)}
                            icon="favorite" />
                    </TopAppBarSection>
                </TopAppBarRow>
            </TopAppBar>
            
            <div className="weather-page__content">
                <div className="weather-page__current-day-status">
                    <img src={getIcon(props.currentDay.WeatherIcon)} />
                    <div>
                        <Typography tag="div" use="body1">{props.locationName}</Typography>
                        <Typography tag="div" use="body1">
                            {`${props.unit === 'C' ? props.currentDay.Temperature.Metric.Value : props.currentDay.Temperature.Imperial.Value}
                                ${props.unit === 'C' ? props.currentDay.Temperature.Metric.Unit : props.currentDay.Temperature.Imperial.Unit}
                            `}
                        </Typography>

                        <Typography tag="div" className="weather-page__status" use="headline3">{props.currentDay.WeatherText}</Typography>

                    </div>
                </div>

                <div className="weather-page__content-body">
                    <div className="weather-page__week-status-container">
                        {
                            props.forecast.DailyForecasts && props.forecast.DailyForecasts.map((dayValue, i) => (
                                <StatusBlock showDate celsius={props.unit === 'C'} key={i} {...dayValue} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    </>
)


export default WeatherPage;