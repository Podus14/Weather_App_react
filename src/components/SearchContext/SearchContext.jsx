import {useState, createContext} from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchCurrentWeather, setSearchCurrentWeather] = useState(null);
    const [searchForecast, setSearchForecast] = useState(null);
    return (
        <SearchContext.Provider value = {{searchCurrentWeather, setSearchCurrentWeather, searchForecast, setSearchForecast}}>
            {children}
        </SearchContext.Provider>
    );
}
