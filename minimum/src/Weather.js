import { useState, useEffect } from "react";

function Weather() {
  const [data, setData] = useState("");
  async function getWeather() {
    const data = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=[KEYS]"
    );
    const json = await data.json();
    const weather = json["weather"][0]["main"];
    setData(weather);
  }

  useEffect(() => {
    getWeather();
  }, []);

  return <div>{data}</div>;
}

export default Weather;
