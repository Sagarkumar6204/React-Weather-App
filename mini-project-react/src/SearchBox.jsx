import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let[error,setError]=useState(false);
      let[city, setCity]=useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="a16a811e94c3b699aee63048a83a8f07";
    let getWeatherInfo=async()=>{
        try
        {
      let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
     let jsonResponse= await response.json();
     console.log(jsonResponse);
     let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_max,
        tempMax: jsonResponse.main.temp_max,
        huumidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
     }
     console.log(result);
     return result;
    }
    catch(err){
       throw err
    }
    };

  
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };
    let handleSubmit=async(evt)=>{
       try{
         evt.preventDefault();
        console.log(city);
        setCity("");
      let info= await getWeatherInfo();
      updateInfo(info);
       }catch(err){
setError(true);
       }
        
    };
return(
    <div className='searchBox'>
      
        <form action="" onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br /><br />
        <Button variant="contained" type='submit' >
        Search
      </Button>
      {error && <p style={{color:"red"}}>No Such Place in Our API</p>}
        </form>
    </div>
);
}