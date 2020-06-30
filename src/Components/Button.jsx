
import React, { Component } from 'react';

class Button extends Component {


    render() {
        return (
            <div>
                <button className="celsius" onClick={this.toCelsius}>&deg;C</button>
                <button className="fahrenheit" onClick={this.toFahrenheit} >&deg;F</button>
            </div>
        )
    }
}

export default Button;