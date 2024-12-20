import React, { useContext } from "react"
import Style from "./CurrentWeather.module.css"
import HumidityIcon from "@icons/humidity.svg"
import WindIcon from "@icons/wind.svg"
import { SearchContext } from "@searchContext/SearchContext"


export const CurrentWeather = () => {
    const {searchCurrentWeather} = useContext(SearchContext)
    return (
        
        <div className={Style.container}>
            <h3 className={Style.h3}>
            Current Weather in {searchCurrentWeather.city}
            </h3>
            <div className={Style.weather_info}>
                <span className={Style.temp}>{searchCurrentWeather.temperature}°F</span>
                <div className={Style.weather_wrapper}>
                    <span className={Style.description}>{searchCurrentWeather.description}</span>
                    <span className={Style.svg_wrapper+ ' ' + Style.humidity}><img className={Style.svg} src={HumidityIcon} alt="humidity-icon" /> Humidity: {searchCurrentWeather.humidity}</span>
                    <span className={Style.svg_wrapper}><img className={Style.svg} src={WindIcon} alt="wind-icon" /> Wind: {searchCurrentWeather.windSpeed} mph</span>
                </div>
            </div>
        </div>
    )

}