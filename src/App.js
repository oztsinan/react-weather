import React, { useEffect, useState } from "react";
import './style/style.css'
import WeatherBox from './components/WeatherBox'
const App = () =>{

    const [cityName,setCityName] = useState('');
    const [sendCityName,setSendCityName] = useState('')
    
    return(
        <div className="app-box">
            <input
                placeholder="enter a city name..."
                type="text" 
                onChange={(e)=>{
                    setCityName(e.target.value)                
                }}
                onKeyPress={(e)=>{
                    if(e.key === 'Enter')
                        setSendCityName(cityName)
                }}
                
            />
            <WeatherBox
                inputCityName={sendCityName}
            />
        </div>
    )
}

export default App;