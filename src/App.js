import "./styles.css";
import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function App(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
      humidity: Math.round(response.data.temperature.humidity),
      wind: Math.round(response.data.wind.speed)
    });
    setReady(true);
  }

  function search() {
    let apiKey = "5c3b44fd3211f47fodb530a25ba78e2t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="all-body">
        <div className="head">
          <div className="row justify-content-around">
            <div className="col-6">
              <div className="search">
                <form onSubmit={handleSubmit}>
                  <div className="search-box">
                    <button className="btn-search">
                      <input
                        className="input"
                        placeholder="Type a city.."
                        onChange={handleCityChange}
                      />
                    </button>
                  </div>

                  <button className="submit">Search</button>

                  <WeatherInfo data={weatherData} />
                </form>
              </div>
            </div>
          </div>
        </div>
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}
