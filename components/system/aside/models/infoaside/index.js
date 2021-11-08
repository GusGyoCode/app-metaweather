import moment from 'moment'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import Context from '../../../../../context/global/context'
import Nube from '../../../../icons/nube'

export default function InfoAside ({ handleFunction }) {
  const { isDark, setIsDark, data, convertTemp } = useContext(Context)
  const router = useRouter()
  function infoAsideData () {
    if (data.length === 0) {
      return (
        <div className="flex flex-col justify-center h-5/6 items-center px-4 text-gray-400">
          <i className="icon-location text-9xl"></i>
          <h3 className="mt-12 text-2xl text-center font-semibold">Please search for a city or activate the location to show you the weather forecast</h3>
        </div>
      )
    } else {
      return (
        <>
      <div className="relative p-4 pb-12">
        <div className="relative z-10 flex justify-center items-center">
          <img
            src={`https://openweathermap.org/img/wn/${data[0].weather[0].icon}@4x.png`}
            alt="nube"
            className="w-32 h-32 md:w-64 md:h-64 lg:w-36 lg:h-36 xl:w-64 xl:h-64"
          />
        </div>
        {isDark === 'dark'
          ? <>
            <Nube
            fill="#292C44"
            className="absolute top-0 -right-0 md:-right-12 z-0 w-24 h-24 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
            />
            <Nube
              fill="#292C44"
              className="absolute bottom-0 -right-0 md:-right-8 z-0 w-16 h-16 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
            />
            <Nube
              fill="#292C44"
              className="absolute top-0 -left-0 md:-left-12 z-0 w-16 h-16 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
            />
            <Nube
              fill="#292C44"
              className="absolute bottom-4 md:bottom-8 lg:bottom-4 -left-0 md:-left-8 z-0 w-24 h-24 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
            />
          </>
          : <>
            <Nube
              fill="#e5e6e6"
              className="absolute top-0 -right-0 md:-right-12 z-0 w-24 h-24 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
            />
            <Nube
              fill="#e5e6e6"
              className="absolute bottom-0 -right-0 md:-right-8 z-0 w-16 h-16 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
            />
            <Nube
              fill="#e5e6e6"
              className="absolute top-0 -left-0 md:-left-12 z-0 w-16 h-16 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
            />
            <Nube
              fill="#e5e6e6"
              className="absolute bottom-4 md:bottom-8 lg:bottom-4 -left-0 md:-left-8 z-0 w-24 h-24 md:w-32 md:h-32 lg:w-24 lg:h-24 xl:w-32 xl:h-32"
            />
          </>
        }
      </div>
      <div className="text-gray-400 grid -grd-cols-1 gap-10 md:gap-20 pb-8">
          <h2 className="text-8xl md:text-9xl text-center text-gray-300 dark:text-white">
            {convertTemp ? ((data[0].main.temp * 1.8) + 32).toFixed(0) : data[0].main.temp.toFixed(0)}<span className="text-4xl text-gray-400">{convertTemp ? '°F' : '°C'}</span>
          </h2>
        <h3 className="text-4xl text-center font-bold">{data[0].weather[0].description}</h3>
        <h3 className="text-xl text-center">Today . {moment.unix(data[0].dt).format('Do MMMM')}</h3>
        <h4 className="text-xl font-light text-center"><i className="icon-location text-red-600 dark:text-red-400"></i> {data[0].name}</h4>
      </div>
      </>
      )
    }
  }

  function handleLocations () {
    if (typeof window !== 'undefined') {
      navigator.geolocation.getCurrentPosition(function showPosition (position) {
        router.push(`/weather/locations/${position.coords.latitude}&${position.coords.longitude}`)
      })
    }
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap w-full p-4 justify-between items-center">
        <button className="px-4 py-2 bg-blue-light dark:bg-gray-400 text-white rounded hover:bg-blue-light-hover dark:hover:bg-gray-300 transition duration-500"onClick={handleFunction} >Search for place <i className="icon-search"></i></button>
        <div className="flex">
          <div className="lg:hidden">
            {
              isDark === 'dark'
                ? <button onClick={() => { setIsDark('light') }} className="bg-blue-light dark:bg-gray-400 text-white p-2 rounded-full hover:bg-blue-light-hover dark:hover:bg-gray-300 transition duration-500">
                  <i className="icon-sun block h-5 w-5 flex justify-center items-center"></i>
                </button>
                : <button onClick={() => { setIsDark('dark') }} className="bg-blue-light dark:bg-gray-400 text-white p-2 rounded-full hover:bg-blue-light-hover dark:hover:bg-gray-300 transition duration-500">
                  <i className="icon-moon block h-5 w-5 flex justify-center items-center"></i>
                </button>
            }
          </div>
          <button className="p-2 bg-blue-light dark:bg-gray-400 text-white rounded-full hover:bg-blue-light-hover dark:hover:bg-gray-300 transition duration-500 ml-2 hint--bottom-left hint--rounded hint--bounce hint--medium" onClick={() => handleLocations()} disabled aria-label="Soon find location in real time...."><i className="icon-target block h-5 w-5 flex justify-center items-center"></i></button>
        </div>
      </div>
      {infoAsideData()}
    </div>
  )
}
