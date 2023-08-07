import React from "react";
import "./styles.css";

import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="data-head">
        <h3 className="location">{props.data.city}</h3>
        <h5 className="time-date">
          <FormattedDate date={props.data.date} />
        </h5>

        <p className="description">{props.data.description}</p>
      </div>

      <span className="today-weather">
        <div className="row justify-content-around">
          <div className="col-4">
            <h1 className="temp-now">{props.data.temperature}°C</h1>
          </div>

          <div className="col-4">
            <img
              className="icon-today"
              src={props.data.iconUrl}
              alt={props.data.icon}
            />
          </div>
        </div>
      </span>

      <div className="container">
        <div className="row justify-content-md-center ">
          <div className="col col-md-4">
            <span className="precipitations">
              <div>
                <FontAwesomeIcon icon={faDroplet} size="1x" />
              </div>
              <h6>{props.data.humidity}%</h6>
              <p>Humidity</p>
              <div>
                <FontAwesomeIcon icon={faWind} size="1x" />
              </div>
              <h6>{props.data.wind}km/h</h6>
              <p>Wind</p>
              <h5> Daily Forecast </h5>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
