import "./Weather.css";
import { useState, useEffect } from "react";

function Weather(props) {
  const [data, setData] = useState({});
  async function getWeather() {
    const data = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        props.country +
        "&APPID=[KEYS]"
    );
    const json = await data.json();
    const weather = json["weather"][0]["main"];
    const temp = (json["main"]["temp"] - 273.15).toFixed(1);
    const description = json["weather"][0]["description"];
    const icon = json["weather"][0]["icon"];
    setData({
      weather: weather,
      temp: temp,
      description: description,
      icon: icon,
    });
  }
  // function emoji(icon){
  //   if
  // }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div class="wrapper-weather">
      <div class="weather">
        <div class="country">{props.country}</div>
        <div class="weather-info">
          <img
            src={"http://openweathermap.org/img/wn/" + data.icon + "@2x.png"}
            alt="icon"
          />
          <span class="temp">{data.temp}°C</span>
        </div>
      </div>
    </div>
  );
}

export default Weather;
