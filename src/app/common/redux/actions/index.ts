import { ForecastHeadline, DailyForecast } from "../../../components/pages/WeatherPage/WeatherPage.model"
import { CurrentDay } from "../../models/common"

export const setCurrentCondition = (day: CurrentDay) => ({
  type: 'SET_CURRENT_CONDITION',
  day
})

export const setForecast = (forecast: {
  Headline: ForecastHeadline,
  DailyForecasts: DailyForecast[],
}) => ({
  type: 'SET_FORECAST',
  forecast
})

export const setCurrentLocationName = (locationName: string) => ({
  type: 'SET_CURRENT_LOCATION_NAME',
  locationName
})

export const toggleTheme = () => ({
  type: 'TOGGLE_THEME',
})