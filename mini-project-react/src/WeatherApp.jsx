import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from 'react';
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
          city:"Giridih",
       feelslike:24.4,
        temp:25.45,
        tempMin:24.34,
        tempMax:28.09,
        humidity:47,
        weather:"haze",
    });
    let updateInfo=(info)=>{
        setWeatherInfo(info);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}