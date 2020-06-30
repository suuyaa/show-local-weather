import React from 'react';
import DegreeToggle from './DegreeToggle';

const Weather = (props) => {

    const celsius = Math.round(props.temp);
    const fahrenheit  = Math.round((9/5*celsius+32));

    console.log(props);

    return (
        <div className="container">
            <div className="cards pt-4">
                <h1>{props.city}, {props.country}</h1>
                <DegreeToggle Click={props.Clicked} />
                <h5 className="py-4">
                    <i className={`wi ${props.icon} display-1`}></i>
                </h5>
                <h1 className="py-2">Now: {props.degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h1>
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-2">Feels like: {props.feels_like}</h4>
                <h4 className="py-4">{props.description}</h4>
            </div>
        </div>
    )
}

function minmaxTemp(min, max) {
return(
    <h3>
        <span className="px-4">Min: {min}&deg;</span>
        <span className="px-4">Max: {max}&deg;</span>
    </h3>
    
)
}

export default Weather;