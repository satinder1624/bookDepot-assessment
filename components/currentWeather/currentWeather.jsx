import React from 'react'
import styles from '../currentWeather/styles.module.css'
import CloudIcon from '@mui/icons-material/Cloud';
import {resultCode} from '../../utils/checkingWeatherCode';
import setIcon from '../../utils/weatherIcon';

export default function CurrentWeather({data, name}) {
  const codeStatement = resultCode(data?.weathercode);
  return (
    <div className={styles.box}>
    <h1>Current</h1>
    <div className={styles.container}>
      <div>
        <div className={styles.currentContainer}>
          <span className={styles.currentTemperature}>{data?.temperature}</span>
          <span>&#176;C</span>
        </div>
        <span className={styles.cityName}>{name}</span>
      </div>
      <div className={styles.iconContaienr}>
        {<i className={setIcon(data?.weathercode)}></i>}
        <span>{codeStatement}</span>
      </div>
    </div>
    </div>
  )
}
