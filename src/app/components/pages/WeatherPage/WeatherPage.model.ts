import { RefObject } from "react"
import { Temperature, CurrentDay } from "../../../common/models/common"

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
    modalOpen: boolean,
    setOpen: (value: boolean) => void,
    locationKey: string,
    onFavoriteClick: (value: string) => void,
    unit: string,
    locationName: string,
    showOptions: boolean,
    onUnitChange: (value: string) => void,
    onItemClick: (value: {text: string, key: string}) => void,
    isFavorite: boolean,
    
    wrapperRef: any,
    dispatch: any,
    weather: any,
}