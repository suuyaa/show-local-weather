import React, { Component } from 'react';
import Weather from './Components/Weather';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
// import DegreeToggle from './Components/DegreeToggle';

const API_key = "eb1bf46af9d73715c31e3645e772dd3c";
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      degreeType: 'celsius',
      city: null,
      icon: null,
      country: null,
      temp: null,
      temp_min: null,
      temp_max: null,
      feelslike: null,
      description: null,
      error:""
    };
    // this.getWeather();
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain:"wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  getWeatherIcon(icons, rangeID) {
    switch(true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({icon: icons.Thunderstorm});
        break;
        case rangeID >= 300 && rangeID <= 321:
        this.setState({icon: icons.Drizzle});
        break;
        case rangeID >= 500 && rangeID <= 531:
        this.setState({icon: icons.Rain});
        break;
        case rangeID >= 600 && rangeID <= 622:
        this.setState({icon: icons.Snow});
        break;
        case rangeID >= 701 && rangeID <= 781:
        this.setState({icon: icons.Atmosphere});
        break;
        case rangeID === 800:
        this.setState({icon: icons.Clear});
        break;
        case rangeID >= 801 && rangeID <= 804:
        this.setState({icon: icons.Clouds});
        break;
        default: this.setState({icon: icons.Clouds});
    }
  }

  componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			position => {
				this.fetchWeather(position.coords.latitude, position.coords.longitude);
			},
			error => {
				this.setState({
					error: 'Error Getting Weather Conditions'
				});
			}
		);
	}

	fetchWeather(lat = 25, lon = 25) {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`
		)
			.then(res => res.json())
			.then(json => {
			  console.log(json.weather[0].id);
				this.setState({
          city: json.name,
          country: json.sys.country,
          temp: this.calCelsius(json.main.temp),
          temp_min: this.calCelsius(json.main.temp_min),
          temp_max: this.calCelsius(json.main.temp_max),
          feelslike: this.calCelsius(json.main.feels_like),
          description: json.weather[0].description,
					isLoading: false
        });

        this.getWeatherIcon(this.weatherIcon, json.weather[0].id);

      });
  }
  
  updateForecastDegree = event => {
    this.setState({
      degreeType: event.target.value
    })
  }
  
  calCelsius(temp) {
    return Math.floor(temp);
  }

  render() {
    return (
      <div className="App">
      <Weather Clicked={this.updateForecastDegree} city={this.state.city} country={this.state.country} temp={this.state.temp} temp_min={this.state.temp_min} temp_max={this.state.temp_max} feels_like={this.state.feelslike} description={this.state.description} icon={this.state.icon} degreeType={this.state.degreeType}  />
      </div>
    )
  }
}

export default App;
