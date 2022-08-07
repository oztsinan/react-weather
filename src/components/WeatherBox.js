import React , {useState, useEffect} from "react";
import axios from "axios";



const WeatherBox = ({inputCityName}) =>{

    const [cityName,setCityName] = useState('')
    const [cityTemp,setCityTemp] = useState('')
    const [cityStatus,setCityStatus] = useState('')
    const [cityStatusIcon,setCityStatusIcon] = useState('')
    const [cityCountry,setCityCountry] = useState('')
    const [cityRegion,setCityRegion] = useState('')

    const [translateStatus,setTranslateStatus] = useState('')
    
    const apiKey = '63e04988a58b4442ac4181432220508';
    const weatherApi = 'https://api.weatherapi.com/v1/current.json?key='+ apiKey+'&q='+inputCityName +'&aqi=no'

    useEffect(()=>{
        if(inputCityName.length > 1){
            axios.get(weatherApi)
            .then((response)=>{
                setCityName(response.data.location.name)
                setCityTemp(response.data.current.temp_c+'°')
                setCityStatus(response.data.current.condition.text)
                setCityStatusIcon(response.data.current.condition.icon)
                setCityCountry(response.data.location.country)
                setCityRegion(response.data.location.region)
                console.log(response.data);
            })
        }else{

        }

    },[inputCityName])

    useEffect(()=>{
        if(cityStatus == 'Partly cloudy'){
            setTranslateStatus('Parçalı Bulutlu')
        }else if(cityStatus == 'Sunny'){
            setTranslateStatus('Güneşli')
        }else if(cityStatus == 'Patchy rain possible'){
            setTranslateStatus('Parçalı yağmur mümkün')
        }
        else{
            setTranslateStatus(cityStatus)
        }
    },[cityStatus])


    return(
        <div className="weather-box">
            <div style={inputCityName.length > 1 ? {display :'flex'} : {display : 'none'}} className="weather-box-center">
                <div className="weather-box-icon">
                    <img src={cityStatusIcon} alt="" />
                </div>
                <div className="weather-box-left">
                    <h2> {cityName} </h2>
                    <p> {cityRegion} , {cityCountry} </p>

                </div>
                <div className="weather-box-right">
                <h3>  {cityTemp} </h3>
                <p> {translateStatus} </p>
                </div>
            </div>

            <div style={inputCityName.length < 1 ? {display :'flex'} : {display : 'none'}} className="veri-bekleniyor">
                <p>Şehir Giriniz...</p>
            </div>
        </div>
    )
}

export default WeatherBox;