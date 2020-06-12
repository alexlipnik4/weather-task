
const defaultState = {
    locationName: "Tel-Aviv",
    condition: {
        EpochTime: 1591987260,
        HasPrecipitation: false,
        IsDayTime: false,
        Link: "http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us",
        LocalObservationDateTime: "2020-06-12T21:41:00+03:00",
        MobileLink: "http://m.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us",
        PrecipitationType: null,
        Temperature: {
            Imperial: {Value: 71, Unit: "F", UnitType: 18},
            Metric: {Value: 21.8, Unit: "C", UnitType: 17}
        },
        WeatherIcon: 34,
        WeatherText: "Mostly clear"
    },
    forecast: {
        "Headline": {
          "EffectiveDate": "2020-06-13T02:00:00+03:00",
          "EffectiveEpochDate": 1592002800,
          "Severity": 4,
          "Text": "Air quality will be unhealthy for sensitive groups late Friday night through Saturday afternoon",
          "Category": "air quality",
          "EndDate": "2020-06-13T20:00:00+03:00",
          "EndEpochDate": 1592067600,
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/extended-weather-forecast/215793?lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?lang=en-us"
        },
        "DailyForecasts": [
          {
            "Date": "2020-06-11T07:00:00+03:00",
            "EpochDate": 1591848000,
            "Temperature": {
              "Minimum": {
                "Value": 70,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 83,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 3,
              "IconPhrase": "Partly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 35,
              "IconPhrase": "Partly cloudy",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=1&lang=en-us"
          },
          {
            "Date": "2020-06-12T07:00:00+03:00",
            "EpochDate": 1591934400,
            "Temperature": {
              "Minimum": {
                "Value": 70,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 83,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 2,
              "IconPhrase": "Mostly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 34,
              "IconPhrase": "Mostly clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=2&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=2&lang=en-us"
          },
          {
            "Date": "2020-06-13T07:00:00+03:00",
            "EpochDate": 1592020800,
            "Temperature": {
              "Minimum": {
                "Value": 68,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 85,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 5,
              "IconPhrase": "Hazy sunshine",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 33,
              "IconPhrase": "Clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=3&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=3&lang=en-us"
          },
          {
            "Date": "2020-06-14T07:00:00+03:00",
            "EpochDate": 1592107200,
            "Temperature": {
              "Minimum": {
                "Value": 68,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 81,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 1,
              "IconPhrase": "Sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 34,
              "IconPhrase": "Mostly clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=4&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=4&lang=en-us"
          },
          {
            "Date": "2020-06-15T07:00:00+03:00",
            "EpochDate": 1592193600,
            "Temperature": {
              "Minimum": {
                "Value": 68,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 81,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 1,
              "IconPhrase": "Sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 34,
              "IconPhrase": "Mostly clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=5&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv-port/215793/daily-weather-forecast/215793?day=5&lang=en-us"
          }
        ]
    }
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
    default:
        return state
    }
}

export default weather