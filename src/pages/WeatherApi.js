import { useState } from "react";

import { ApiKey } from "../apiKey";

import DisplayWeather from "../components/DisplayWeather";

export default function WeatherAPI() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  async function weatherData(e) {
    e.preventDefault();

    if (form.city === "" || form.country === "") {
      alert("Add Values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${ApiKey}&units=imperial`
      )
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.error("Get Weather Error: ", err));

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }

    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };

  return (
    <div className="weather-app-container">
      <div className="title">
        <h1>WeatherAPI</h1>
      </div>

      <div className="form-wrapper">
        <form>
          <div>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <input
              type="text"
              name="country"
              placeholder="Enter Country"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button className="get-weather" onClick={(e) => weatherData(e)}>
            Get Weather
          </button>
        </form>
      </div>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}
