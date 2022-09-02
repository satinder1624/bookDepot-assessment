import React from 'react'
import SinlgeWeatherCard from './sinlgeWeatherCard'

export default function Dailyweather({data}) {
  return (
    <>
        <h2>Daily</h2>
        {
          data?.time?.map((element,i) => <SinlgeWeatherCard key={i} sunrise={data?.sunrise[i]} sunset={data?.sunset[i]} maxTem={data?.temperature_2m_max[i]} minTem={data?.temperature_2m_min[i]} code={data?.weathercode[i]} time={element}/>)
        }
    </>
  )
}
