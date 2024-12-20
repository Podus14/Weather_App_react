import React, { useContext } from "react";
import Style from "./Forecast.module.css"
import { ForecastCard } from "./components/ForecastCard";
import { SearchContext } from "@searchContext/SearchContext";

export const Forecast = () => {
    const {searchForecast} = useContext(SearchContext);
    return (
        <>
            <h3 className={Style.text}>5-Day Forecast</h3>
            <div className={Style.container}>
                {searchForecast.filteredDataForecast.map((day) => {
                    return <ForecastCard key= {day.day} day = {day}/>
                }            
                )}
            </div>
        </>
    )
}