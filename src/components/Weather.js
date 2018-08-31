import React from "react";

const Weather = (props)=>{
    return(
    <div className = "weather_info" >
        {props.city && props.country && <p className = "weather__key">Location: { props.city},{ props.country}</p>}
        {props.temperature && <p className = "weather__key">Temperature: { props.temperature}</p>}
        {props.humidity && <p className = "weather__key">Humidity: { props.humidity}</p>}
        {props.description && <p className = "weather__key" >Condition: { props.description}</p>}
        {props.error && <p className = "weather__key" >{props.error}</p>}
    </div>
    );
}

export default Weather;