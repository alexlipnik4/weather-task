import { CurrentDay, ForecastHeadline, DailyForecast } from "../../../components/pages/WeatherPage/WeatherPage.model"

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