import React from 'react'
import '../styles/Weather.css';

function WeatherInfo(props){
    const{temp, humidity, desc, city} = props.data;

    return (
        <React.Fragment>
            <h3>{desc}</h3>
            <div className="header-description">
                <h4>City</h4>
                <p>{city}</p>
            </div>
            <div className="header-description"> 
                <h4>Temperature</h4>
                <p>{temp}<span className="degree-symbol">F</span></p>
            </div>
                <div className="header-description">
                    <h4>Humidity</h4>
                    <p>{humidity}%</p>
                </div>


            </React.Fragment>
    );
}

export default WeatherInfo;