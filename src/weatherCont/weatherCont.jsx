import search from "./image/search.png";
import axios from "axios";
import wind from "./image/wind.png";
import humidity from "./image/humidity.png";
import "./weatherCont.css";
import { useState } from "react";

import clouds_weather from "./image/clouds.png";
import sunny_weather from "./image/clear.png";
import rain_weather from "./image/rain.png";
import drizzle_weather from "./image/drizzle.png";
import mist_weather from "./image/mist.png";

const WeatherContainer = () => {
  const [data, setData] = useState({
    celcius: 10,
    name_city: "Moscow",
    humidity: 10,
    speed_wind: 4,
    image: drizzle_weather,
  });

  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    try {
      if (name !== "") {
        const urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&lang=ru&appid=cee670bb4d5aa731678042eed8ba2c28`;
        axios.get(urlAPI).then((res) => {
          let imagePath;
          if (res.data.weather[0].main == "Clear") {
            imagePath = sunny_weather;
          } else if (res.data.weather[0].main == "Clouds") {
            imagePath = clouds_weather;
          } else if (res.data.weather[0].main == "Rain") {
            imagePath = rain_weather;
          } else if (res.data.weather[0].main == "Drizzle") {
            imagePath = drizzle_weather;
          } else if (res.data.weather[0].main == "Mist") {
            imagePath = mist_weather;
          } else {
            imagePath = rain_weather;
          }
          setData({
            ...data,
            celcius: res.data.main.temp,
            name_city: res.data.name,
            humidity: res.data.main.humidity,
            speed_wind: res.data.wind.speed,
            image: imagePath,
          });
        });
      }
    } catch (e) {
      if (e.response.status == 404) {
        setError("Неправильно введенный город!!!");
      } else {
        setError("");
      }
      // console.log(e);
    }
  };
  return (
    <div className="weather">
      <div className="search">
        <input
          type="text"
          placeholder="Введите название города"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="but_search" onClick={handleClick}>
          <img className="container_search" src={search}></img>
        </button>
      </div>
      <div className="error">
        <p>{error}</p>
      </div>
      <div className="winfo">
        <div className="cont_weather_img">
          <img className="weather_img" src={data.image}></img>
        </div>

        <h1>{Math.round(data.celcius)}°C</h1>
        <h2>{data.name_city}</h2>
        <div className="details">
          <div className="col">
            <div className="cont_wind">
              <img className="wind_img" src={wind}></img>
              <div>
                <p>{data.speed_wind} км/ч</p>
                <p>Скорость ветра</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="cont_humid">
              <img className="humid_img" src={humidity}></img>
              <div>
                <p>{Math.round(data.humidity)}%</p>
                <p>Влажность</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherContainer;
