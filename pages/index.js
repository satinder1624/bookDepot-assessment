import { Container } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import CurrentWeather from "../components/currentWeather/currentWeather";
import Dailyweather from "../components/dailyWeather/dailyweather";
import LocationSelect from "../components/locationSelect";
import Head from "next/head";

export default function Home() {
  const [dailyweatherData, setDailyWeatherData] = useState();
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [cityName, setCityName] = useState();

  const fetchAPI = (value) => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${value.lat}&longitude=${value.lng}&current_weather=true&timezone=EST&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,weathercode`
      )
      .then((res) => {
        setDailyWeatherData(res.data.daily);
        setCurrentWeatherData(res.data.current_weather);
      })
      .catch((err) => {
        console.log(err);
      });

    setCityName(value.name);
  };

  return (
    <Container>
      {/* Font Awesome cdn */}
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <LocationSelect onChange={fetchAPI} />
      <CurrentWeather data={currentWeatherData} name={cityName} />
      <Dailyweather data={dailyweatherData} />
    </Container>
  );
}
