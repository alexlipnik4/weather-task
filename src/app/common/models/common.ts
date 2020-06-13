export type Location = {locationKey: string, locationName: string};

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

export type Temperature = {
    Value: number,
    Unit: string,
    UnitType: number
}