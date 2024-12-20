import React from "react";
import Style from "./ForecastCard.module.css"
import BrokenClouds from "@icons/broken_clouds.svg"
import LightRain from "@icons/light_rain.svg"
import ModerateRain from "@icons/moderate_rain.svg"
import OvercastClouds from "@icons/overcast_clouds.svg"
import ScatteredClouds from "@icons/scattered_clouds.svg"
import ClearSky from "@icons/clear_sky.svg"
import LightSnow from "@icons/light_snow.svg"
import FewClouds from "@icons/few_clouds.svg"

export const ForecastCard = ( {day} ) => {

    const icons = {
        "broken clouds": BrokenClouds,
        "light rain": LightRain,
        "moderate rain": ModerateRain,
        "overcast clouds": OvercastClouds,
        "scattered clouds": ScatteredClouds,
        "clear sky": ClearSky,
        "light snow": LightSnow,
        "few clouds": FewClouds
    };

    const iconSrc = icons[day.description] || "";
    return (
        <div className={Style.container}>
            <span className={Style.day}>{day.day}</span>
            <span><img className={Style.svg} src={iconSrc} alt={day.description}/></span>
            <span className={Style.temperature}>{day.temperature}°F</span>
        </div>
    )
}
