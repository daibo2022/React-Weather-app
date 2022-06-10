import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind
  } from "@iconscout/react-unicons";





function TemperatureAndDetails(data) {
  const {props} = data

const iconUrlFromCode = (code) =>
`http://openweathermap.org/img/wn/${code}@2x.png`;
 
  return (
   
    <div>
       {props.name !== undefined &&
      <div>
      <div className='flex items-center justify-center py-6 text-xl text-cyan-100'>
        <p>{props.weather? props.weather[0].description:null}</p>
      </div>
      <div className='flex flex-row justify-between items-center py-3 text-xl text-white'>
        {props.weather? <img src={iconUrlFromCode(props.weather[0].icon)} alt="" className="w-20" />:null}
      
       <div className='text-5xl'>
         {props.main? <p> {props.main.temp.toFixed()}°F</p>:null}
       </div>
       <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel: {props.main? <span className="font-medium ml-1"> {props.main.feels_like.toFixed()} °F</span>:null}
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity: {props.main? <span className="font-medium ml-1"> {props.main.humidity} % </span>:null}
          </div>
          <div className="flex font-light text-sm items-center justify-center ">
            <UilWind size={18} className="mr-1" />
            Wind: {props.wind? <span className="font-medium ml-1"> {props.wind.speed.toFixed()} MPH</span>:null}
          </div>
        </div>
    </div>
  </div>
    }
      
    </div>


  )
}

export default TemperatureAndDetails