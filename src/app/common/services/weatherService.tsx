import API_KEY from "../consts/apikey"
import API_URL from "../consts/apiUrl"

export default {
    getCityAutocomplete: (query: string) => {
        return fetch(`${API_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`).then(res => {
            if(res.ok) {
                return res.json().then(data => data)
            }
            else {
                alert(`Error ${res.status}, ${res.statusText}`)
                return 'error'
            }
        })
    },
    getCurrentConditions: (locationKey: string | number) => {
        return fetch(`${API_URL}/currentconditions/v1/${locationKey}?apikey=${API_KEY}`).then(res => {
            if(res.ok) {
                return res.json().then(data => data[0])
            }
            else {
                alert(`Error ${res.status}, ${res.statusText}`)
                return 'error'
            }
        })
    },
    getFiveDayForecast: (locationKey: string | number) => {
        return fetch(`${API_URL}/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`).then(res => {
            if(res.ok) {
                return res.json().then(data => data)
            }
            else {
                alert(`Error ${res.status}, ${res.statusText}`)
                return 'error'
            }
        })
    },
    getCurrentLocation: (lat: string | number, long: string | number) => {
        return fetch(`${API_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat},${long}`).then(res => {
            if(res.ok) {
                return res.json().then(data => data)
            }
            else {
                alert(`Error ${res.status}, ${res.statusText}`)
                return 'error'
            }
        })
    }
}