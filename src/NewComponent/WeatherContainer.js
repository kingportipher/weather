import React, {useState} from 'react';
import '../Styles/Weather.css';
import './WeatherInfo';

 

function WeatherContainer(){
    const API_KEY = 'c16f11d0a9377b2ffc771286bccfe233';

    const [searchQuery, setSearchQuery] = useState('');
    const [weatherData, setWeatherData] = useState({
        temp: null,
        humidity:null,
        desc: null,
        city: null

    });
    const [isValidZipCode, setIsValidZipCode] = useState(true);

    function updateSearcQuery(event){
        let zipCode = event.target.value;
        let isValid = validateZipCode(zipCode)
        setSearchQuery(zipCode)

        if (isValid || zipCode === '' || isValid.length === 5){
            setSearchQuery();
            setIsValidZipCode(true);
                
        } else{
            setIsValidZipCode(false);

        }
     


    }
    function validateZipCode(zipCode){
        let regex = /[0-9]{5}/;
        return regex.test(zipCode);
    }

    function getWeatherData(){
        if(!isValidZipCode || searchQuery === ''){
            setIsValidZipCode (false);
            return 
        }
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={c16f11d0a9377b2ffc771286bccfe233}')
        .then(response => response.json())
        .then(data => setWeatherData({
            temp: convertToFahrenheit( data.main.temp),
            humidity: data.main.humidity,
            desc: data.weather[0].main,
            city: data.main
                
        }));


    
    }
    function convertToFahrenheit(temp){
        return ((temp -273.15) * (9.0/5.0) + 32).toFixed(0)
    }

    return (
    <section className='weather-container'>
        <header className="weather-header">
            <h3>Weather App</h3>
            <div>
                <iput 
                placeholder="zip Code" 
                className="search-input"
                onChange={updateSearcQuery}
                maxLength = '5'
                />

                <button onclick={getWeatherData} className="material-icons">search</button>
            </div>

            <p className="error">{isValidZipCode? '' : 'Invalid Zip Code'}</p>
            </header>
            <section className="weather-info">
                {weatherData.temp === null ? (
                    <p>No weather to Display <i className="material-icons">wb_sunny</i></p>
                ):''
            }

                </section>


    </section>
        );
}

export default WeatherContainer;