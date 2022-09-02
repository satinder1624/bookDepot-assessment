import React, { useState } from 'react'
import styles from '../dailyWeather/styles/singleWeatherCard.module.css'
import CloudIcon from '@mui/icons-material/Cloud';
import moment from 'moment';
import setIcon from '../../utils/weatherIcon';
import { style } from '@mui/system';

export default function SinlgeWeatherCard({sunrise, sunset, maxTem, minTem, code, time}) {
  
  
  const [isVisible, setIsVisisble] = useState(false);

  const clickVisibleContent = 
    <div className={styles.sunContainer}>
        <span><span className={styles.sunrise}>Sunrise</span> {moment(sunrise).format('h:mm A')}</span>
        <span><span className={styles.sunset}>Sunset</span>  {moment(sunset).format('h:mm A')}</span>
    </div>

  return (
    <>
    <div className={styles.contaienr} onClick={() => setIsVisisble(!isVisible)}>
        <div className={styles.weekDayContainer}>
            <span>{<i className={setIcon(code)}></i>}</span>
            <span>{moment(time).format('dddd')}</span>
        </div>
        <div>
            <span>{maxTem}&#176;C / {minTem}&#176;C</span>
        </div>
    </div>
    {
        isVisible ? clickVisibleContent : null
    }
    <div className={styles.spaceContainer}></div>
    </>
  )
}
