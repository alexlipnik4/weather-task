
const defaultState = {
    locationName: "Tel-Aviv",
    condition: {
        EpochTime: 0,
        HasPrecipitation: false,
        IsDayTime: false,
        Link: "",
        LocalObservationDateTime: "",
        MobileLink: "",
        PrecipitationType: null,
        Temperature: {
            Imperial: {Value: null, Unit: "F", UnitType: null},
            Metric: {Value: null, Unit: "C", UnitType: null}
        },
        WeatherIcon: null,
        WeatherText: ""
    },
    forecast: {
        Headline: {
        },
        DailyForecasts: [
        ]
    },
    themeIsLight: true
}

const weather = (state = defaultState, action: any) => {
    switch (action.type) {
    case 'SET_CURRENT_CONDITION':
        return {
            ...state,
            condition: action.day
        }
    case 'SET_FORECAST':
        return {
            ...state,
            forecast: action.forecast
        }
    case 'SET_CURRENT_LOCATION_NAME':
      return {
          ...state,
          locationName: action.locationName
      }
    case 'TOGGLE_THEME':
      return {
          ...state,
          themeIsLight: !state.themeIsLight
      }
    default:
        return state
    }
}

export default weather