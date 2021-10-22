import { useContext } from 'react'
import Context from '../../../context/global/context'

export default function Main () {
  const { isDark, setIsDark } = useContext(Context)

  return (
    <main className="w-full lg:w-3/4 lg:h-screen bg-gray-bg dark:bg-morado-oscuro lg:overflow-hidden lg:overflow-y-auto pt-2 style_main__1l transition duration-300">
      <div className="flex justify-between items-center pt-4 max-w-screen-xl mx-auto px-4 ">
        <div className="invisible lg:visible">
        {
          isDark === 'dark'
            ? <button onClick={() => { setIsDark('light') }} className="bg-gray-400 text-white p-4 rounded-full hover:bg-gray-300 transition duration-500">
              <i className="icon-sun text-xl block h-5 w-5 flex justify-center items-center"></i>
            </button>
            : <button onClick={() => { setIsDark('dark') }} className="bg-blue-light text-white p-4 rounded-full hover:bg-blue-light-hover transition duration-500">
              <i className="icon-moon text-xl block h-5 w-5 flex justify-center items-center"></i>
            </button>
        }
        </div>
        <div>
          <button className="text-white bg-blue-light dark:bg-gray-400 rounded-full p-4 leading-none font-bold text-xl mr-4 hover:bg-blue-light-hover dark:hover:bg-gray-300 transition duration-500">°C</button>
          <button className="text-white bg-blue-light dark:bg-gray-400 rounded-full p-4 leading-none font-bold text-xl mr-4 hover:bg-blue-light-hover dark:hover:bg-gray-300 transition duration-500">°F</button>
          <button className="text-white bg-blue-light dark:bg-gray-400 rounded-full p-4 leading-none font-bold text-xl hover:bg-blue-light-hover dark:hover:bg-gray-300 transition duration-500"><i className="icon-bookmark block h-5 w-5 flex justify-center items-center"></i></button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 max-w-screen-xl mx-auto py-8 px-4 ">
        <div className="w-full rounded-xl flex flex-wrap flex-col justify-center items-center bg-white dark:bg-morado-azulado text-blue-oscuro dark:text-gray-400 p-2 md:p-8 lg:p-2 xl:p-4 transition duration-300">
          <h2 className="text-xl mb-4 text-blue-oscuro dark:text-white">Tomorrow</h2>
          <img
            src="https://www.metaweather.com/static/img/weather/s.svg"
            alt="nube"
            className="w-16 h-16 mb-4"
          />
          <div className="flex justify-between items-center w-8/12 lg:w-10/12 2xl:w-8/12"><span className="text-gray-700 dark:text-white">16°C</span><span>11°C</span></div>
        </div>
        <div className="w-full rounded-xl flex flex-wrap flex-col justify-center items-center bg-white dark:bg-morado-azulado text-blue-oscuro dark:text-gray-400 p-2 md:p-8 lg:p-2 xl:p-4 transition duration-300">
          <h2 className="text-xl mb-4 text-blue-oscuro dark:text-white">Tomorrow</h2>
          <img
            src="https://www.metaweather.com/static/img/weather/s.svg"
            alt="nube"
            className="w-16 h-16 mb-4"
          />
          <div className="flex justify-between items-center w-8/12 lg:w-10/12 2xl:w-8/12"><span className="text-gray-700 dark:text-white">16°C</span><span>11°C</span></div>
        </div>
        <div className="w-full rounded-xl flex flex-wrap flex-col justify-center items-center bg-white dark:bg-morado-azulado text-blue-oscuro dark:text-gray-400 p-2 md:p-8 lg:p-2 xl:p-4 transition duration-300">
          <h2 className="text-xl mb-4 text-blue-oscuro dark:text-white">Tomorrow</h2>
          <img
            src="https://www.metaweather.com/static/img/weather/s.svg"
            alt="nube"
            className="w-16 h-16 mb-4"
          />
          <div className="flex justify-between items-center w-8/12 lg:w-10/12 2xl:w-8/12"><span className="text-gray-700 dark:text-white">16°C</span><span>11°C</span></div>
        </div>
        <div className="w-full rounded-xl flex flex-wrap flex-col justify-center items-center bg-white dark:bg-morado-azulado text-blue-oscuro dark:text-gray-400 p-2 md:p-8 lg:p-2 xl:p-4 transition duration-300">
          <h2 className="text-xl mb-4 text-blue-oscuro dark:text-white">Tomorrow</h2>
          <img
            src="https://www.metaweather.com/static/img/weather/s.svg"
            alt="nube"
            className="w-16 h-16 mb-4"
          />
          <div className="flex justify-between items-center w-8/12 lg:w-10/12 2xl:w-8/12"><span className="text-gray-700 dark:text-white">16°C</span><span>11°C</span></div>
        </div>
        <div className="w-full rounded-xl flex flex-wrap flex-col justify-center items-center bg-white dark:bg-morado-azulado text-blue-oscuro dark:text-gray-400 p-2 md:p-8 lg:p-2 xl:p-4 transition duration-300">
          <h2 className="text-xl mb-4 text-blue-oscuro dark:text-white">Tomorrow</h2>
          <img
            src="https://www.metaweather.com/static/img/weather/s.svg"
            alt="nube"
            className="w-16 h-16 mb-4"
          />
          <div className="flex justify-between items-center w-8/12 lg:w-10/12 2xl:w-8/12"><span className="text-gray-700 dark:text-white">16°C</span><span>11°C</span></div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-blue-oscuro dark:text-white mb-4 px-4 ">
        <h2 className="text-3xl font-semibold">Today&apos;s Hightlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-4">
          <div className="p-4 pb-8 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
            <h2 className="text-2xl pb-4">Wind Status</h2>
            <h3 className="text-6xl pb-8">7<span className="text-4xl">mph</span></h3>
            <div><i className="icon-paper-plane p-2 bg-blue-light dark:bg-gray-400 rounded-full text-white"></i> WSW</div>
          </div>
          <div className="p-4 pb-8 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
            <h2 className="text-2xl pb-4">Humidity</h2>
            <h3 className="text-6xl pb-8">84<span className="text-4xl">%</span></h3>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-center">
                <span>0</span>
                <span>50</span>
                <span>100</span>
                <div className="bg-gray-300 dark:bg-white rounded-full overflow-hidden w-full">
                  <div className="bg-yellow-300 p-2" style={{ width: '84%' }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 pb-8 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
            <h2 className="text-2xl pb-4">Visibility</h2>
            <h3 className="text-6xl">6,4<span className="text-4xl"> miles</span></h3>
          </div>
          <div className="p-4 pb-8 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
            <h2 className="text-2xl pb-4">Air Pressure</h2>
            <h3 className="text-6xl">998<span className="text-4xl"> mb</span></h3>
          </div>
        </div>
      </div>
      <footer className="w-full py-4 flex flex-wrap justify-center items-center">
        <h2 className="text-blue-oscuro dark:text-gray-400 font-semibold w-full text-center">created by GusGyoCode - GusGyoCode.dev</h2>
        <div className="w-full flex justify-center items-center text-blue-oscuro dark:text-gray-300"><i className="icon-github-squared text-xl"></i>
          <i className="icon-linkedin-squared text-xl"></i>
          <i className="icon-facebook-squared text-xl"></i>
          <i className="icon-twitter-squared text-xl"></i>
          <i className="icon-instagram-filled text-lg"></i></div>
      </footer>
    </main>
  )
}
