import './App.css';
import { UilSearch, UilClouds } from '@iconscout/react-unicons'
import TemperatureAndDetails from './components/TemperatureAndDetails';
import axios from 'axios'
import React, {useState}  from 'react'


function App() {
  const [data, setData]=useState({})
  const [location, setLocation] = useState('')


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1029749435f37473e4f52bc319f991c2`
  
  const searchLocation = async (req, res)=>{
    try{ 
      
    const {data}= await axios.get(url)
    if(data){
      setData(data)
    }
    else {return }
    }
    catch (err){
      setLocation('City not found!')
    }
     
      console.log('data',data)
      // setLocation('')
  }

 

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }


  return (
    <div className='mx-auto max-w-screen-md mt-6 py-8 px-48
    bg-gradient-to-br from-cyan-700 to-green-700 h-fit shadow-xl shadow-gray-400' >
       <div className='flex items-center justify-center mt-10'>
          <UilClouds size={40} className='text-white mr-1'/>
          <p className='text-white text-4xl font-small'> Weather</p>
          
      </div>
      <div className='flex items-center justify-center mt-3 text-white text-1xl font-samll'>{dateBuilder(new Date())}</div>
      <div>
        <div className='flex flex-row justify-center my-6'>
          <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
          <input 
         type='text' 
         className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
         placeholder='search for city...' 
         value={location}
         onChange = {(event)=>setLocation(event.target.value)} />
         <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' onClick={searchLocation}  />
        </div>

      </div>

      <div className='flex items-center justify-center mt-10'>
          <p className='text-white text-5xl font-medium'> {data.name} {(data.sys)? data.sys.country:null}</p>
      </div>
      
    </div>
       <TemperatureAndDetails  props={data} />
    </div>
    
  );
}

export default App;
