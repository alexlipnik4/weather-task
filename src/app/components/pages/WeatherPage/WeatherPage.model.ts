import { RefObject } from "react"

export type ForecastHeadline = {
    EffectiveDate: string,
    EffectiveEpochDate: number,
    Severity: number,
    Text: string,
    Category: string,
    EndDate: string,
    EndEpochDate: number,
    MobileLink: string,
    Link: string,
}

export type Temperature = {
    Value: number,
    Unit: string,
    UnitType: number
}

export type DailyForecast = {
    Date: string,
    EpochDate: number,
    Temperature: {
        Minimum: Temperature,
        Maximum: Temperature
    },
    Day: {
        Icon: number,
        IconPhrase: string,
        HasPrecipitation: boolean,
      },
      Night: {
        Icon: number,
        IconPhrase: string,
        HasPrecipitation: boolean
      },
      Sources: string[],
      MobileLink: string,
      Link: string,
}

export type CurrentDay = {
    EpochTime: number,
    HasPrecipitation: boolean,
    IsDayTime: boolean,
    Link: string,
    LocalObservationDateTime: string,
    MobileLink: string,
    PrecipitationType: string | null,
    Temperature: {
        Imperial: Temperature,
        Metric: Temperature
    },
    WeatherIcon: number,
    WeatherText: string
}

export interface IWetherPageProps {
    forecast: {
        Headline: ForecastHeadline,
        DailyForecasts: DailyForecast[],
    },
    currentDay: CurrentDay,
    onTextChange: (e: any) => void,
    inputValue: string,
    options: {
        AdministrativeArea: {
            ID: string,
            LocalizedName: string,
        }
        Country: {
            ID: string,
            LocalizedName: string,
        }
        Key: string,
        LocalizedName: string,
        Rank: number,
        Type: string,
    }[],
    unit: string,
    locationName: string,
    wrapperRef: any,
    showOptions: boolean,
    onUnitChange: (value: string) => void,
    onItemClick: (value: {text: string, key: string}) => void,
}