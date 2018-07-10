import React from 'react'
import WeatherIcons from 'react-weathericons'

const WeatherExtraInfo = ({humidity, wind}) => (
    <div>
        <WeatherIcons name="humidity" size="1x"/>
        <span>{` ${humidity} | `}</span>
        <WeatherIcons name="strong-wind" size="1x"/>
        <span>{` ${wind}`}</span>
    </div>
)

export default WeatherExtraInfo