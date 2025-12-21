import Card from '@mui/material/Card';
import "./InfoBox.css"
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }){
    const init_url="https://th.bing.com/th/id/OIP.5hTqErYst6jgvhyazgzK7QAAAA?w=245&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1";

    const HOT_URL="";
    const COLD_URL="";
    const RAIN_URL="";

    return(
         <div className="InfoBox">
           
              <div className='cardContainer'>
             <Card sx={{ maxWidth: 345 }}>
              
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 
            ? RAIN_URL
            : info.temp>15
            ?HOT_URL
            :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
            info.humidity >80 
            ? <ThunderstormIcon/>
            : info.temp>15
            ?<WbSunnyIcon/>
            :<AcUnitIcon/>
          }
        </Typography>
        <Typography component={"spsan"} variant="body2" sx={{ color: 'text.secondary' }}>
         <p>Temperature={info.temp}</p>
         <p>Humidity={info.humidity}&deg;C</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The weather can be described <i>{info.weather}</i> as feels like= {info.feelslike}&deg;C</p>


        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
    )
}