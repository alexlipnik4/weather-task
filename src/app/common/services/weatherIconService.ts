
import partlySunnyDay from '../assets/weatherIcons/cloudy-day-3.svg';
import partlySunnyNight from '../assets/weatherIcons/cloudy-night-3.svg';
import cloudy from '../assets/weatherIcons/cloudy.svg';
import sunny from '../assets/weatherIcons/day.svg';
import rainy from '../assets/weatherIcons/rainy-5.svg';
import snowy from '../assets/weatherIcons/snowy-5.svg';
import thunder from '../assets/weatherIcons/thunder.svg';
import clearNight from '../assets/weatherIcons/night.svg';

export const iconIndex = {
    partlySunnyDay,
    partlySunnyNight,
    cloudy,
    sunny,
    rainy,
    snowy,
    thunder,
    clearNight,
}

export const getIcon = (iconNumber: number) => {
    switch(iconNumber) {
        case 1:
        case 2: {
            return sunny;
        }
        case 3:
        case 4:
        case 5:
        case 6: {
            return partlySunnyDay;
        }
        case 7:
        case 8:
        case 11:
        case 19:
        case 20:
        case 21:
        case 38: {
            return cloudy;
        }
        case 12:
        case 13:
        case 14:
        case 17:
        case 18:
        case 39:
        case 40:
        case 43: {
            return rainy;
        }
        case 22:
        case 25:
        case 26:
        case 29: {
            return snowy;
        }
        case 33:
        case 34: {
            return clearNight;
        }
        case 35:
        case 36:
        case 37: {
            return partlySunnyNight;
        }

        case 15:
        case 16:
        case 41:
        case 42: {
            return thunder;
        }

        default: {
            return iconIndex.sunny;
        }
    }
}

