import React, { useContext, useEffect, useState } from "react";
import Style from "./search.module.css"
import SearchIcon from "@icons/search.svg"
import {toUpperFirstLetter} from "@utils/toUpperFirstLetter.js"
import { SearchContext } from "@searchContext/SearchContext";

export const Search = () => {
    
    const {setSearchCurrentWeather, setSearchForecast} = useContext(SearchContext);
    const [searchText, setSearchText] = useState("London");

    useEffect(() => {
        handleSearch();
    }, []);


    async function searchCurrentWeatherF(searchText) {
        const response = await fetch(
            `https://open-weather13.p.rapidapi.com/city/${searchText}/EN`,
        {
            headers: {
                "x-rapidapi-host": "open-weather13.p.rapidapi.com",
                "x-rapidapi-key": "ec97380d86msh71e5249855cad1bp141c7ejsn883e4091c130"
            }
        }
        );
        const data = await response.json();
        return data;
    }

    async function searchForecast(lon, lat) {
        const response = await fetch(
            `https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${lat}/${lon}`,
        {
            headers: {
                "x-rapidapi-host": "open-weather13.p.rapidapi.com",
                "x-rapidapi-key": "ec97380d86msh71e5249855cad1bp141c7ejsn883e4091c130"
            }
        }
        );
        const data = await response.json();
        return data;
    }

    async function handleSearch () {
        if (searchText === "") return
        
        const currentWeatherData = await searchCurrentWeatherF(searchText);
    
        if (currentWeatherData.cod === "404") {
            setSearchCurrentWeather(currentWeatherData);
            return;
        }
        const dataForecast = await searchForecast(currentWeatherData.coord.lon, currentWeatherData.coord.lat);
        const selectedIndices = [7, 15, 23, 31, 39];
        const filteredDataForecast = selectedIndices.map(index => {
        const item = dataForecast.list[index];
        const date = new Date(item.dt_txt);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
        const fahrenheit = (item.main.temp - 273.15) * 9/5 + 32;
        return {
            day: dayOfWeek,
            temperature: Math.round(fahrenheit),
            description: item.weather[0].description
        };
        });
        setSearchCurrentWeather( {
            city: currentWeatherData.name,
            temperature: Math.round(currentWeatherData.main.temp),
            description: toUpperFirstLetter(currentWeatherData.weather[0].description),
            humidity: currentWeatherData.main.humidity,
            windSpeed: Math.round(currentWeatherData.wind.speed),
            coordinates: {
                lat: currentWeatherData.coord.lat,
                lon: currentWeatherData.coord.lon
            }
        });
        setSearchForecast({filteredDataForecast})
    }

    return (
        <div className={Style.container}>
            <input type="text" className={Style.input} placeholder="Entry city name" onChange={e => setSearchText(e.target.value.trim())} onKeyDown={(e) => {
                const trimmedText = e.target.value.trim();
                if (e.key === "Enter"){
                    setSearchText(trimmedText);
                    handleSearch();
                }
                }}/>
            <button className={Style.button} onClick={handleSearch}>
                <img className={Style.img} src={SearchIcon} alt="searchIcon"/>
                <span className={Style.text}>Search</span>
            </button>
        </div>
    )
}