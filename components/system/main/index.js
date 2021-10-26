import { useContext } from 'react'
import moment from 'moment'
import Context from '../../../context/global/context'
import Nube from '../../icons/nube'

export default function Main () {
  const { isDark, setIsDark, data } = useContext(Context)

  return (
    <main className="w-full lg:w-3/4 lg:h-screen bg-gray-bg dark:bg-morado-oscuro lg:overflow-hidden lg:overflow-y-auto pt-2 style_main__1l transition duration-300">
      {data.length === 0
        ? <>
          <div className="flex flex-wrap justify-between items-center pt-4 max-w-screen-xl mx-auto px-4">
              <div className="invisible lg:visible w-full">
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
            </div>
        <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto px-4 animate-pulse">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 max-w-screen-xl py-8 px-4 w-full">
            <div className="w-full rounded-xl flex flex-wrap flex-col justify-center items-center bg-white dark:bg-morado-azulado text-blue-oscuro dark:text-gray-400 p-2 md:p-8 lg:p-2 xl:p-4 transition duration-300">
              <div className="w-full bg-gray-400 dark:bg-loading-blue-dark p-4 mb-4 rounded-xl"></div>
              {
                isDark === 'dark'
                  ? <Nube
                      fill="#292C44"
                      className="w-16 h-16 mb-4"
                    />
                  : <Nube
                      fill="#e5e6e6"
                      className="w-16 h-16 mb-4"
                    />
              }
              <div className="flex justify-between items-center w-8/12 lg:w-10/12 2xl:w-8/12"><span className="bg-gray-400 dark:bg-loading-blue-dark p-4 rounded"></span><span className="bg-gray-400 dark:bg-loading-blue-dark p-4 rounded"></span></div>
            </div>
            <div className="w-full rounded-xl flex flex-wrap flex-col justify-center items-center bg-white dark:bg-morado-azulado text-blue-oscuro dark:text-gray-400 p-2 md:p-8 lg:p-2 xl:p-4 transition duration-300">
              <div className="w-full bg-gray-400 dark:bg-loading-blue-dark p-4 mb-4 rounded-xl"></div>
              {
                isDark === 'dark'
                  ? <Nube
                      fill="#292C44"
                      className="w-16 h-16 mb-4"
                    />
                  : <Nube
                      fill="#e5e6e6"
                      className="w-16 h-16 mb-4"
                    />
              }
              <div className="flex justify-between items-center w-8/12 lg:w-10/12 2xl:w-8/12"><span className="bg-gray-400 dark:bg-loading-blue-dark p-4 rounded"></span><span className="bg-gray-400 dark:bg-loading-blue-dark p-4 rounded"></span></div>
            </div>
            <div className="w-full rounded-xl flex flex-wrap flex-col justify-center items-center bg-white dark:bg-morado-azulado text-blue-oscuro dark:text-gray-400 p-2 md:p-8 lg:p-2 xl:p-4 transition duration-300">
              <div className="w-full bg-gray-400 dark:bg-loading-blue-dark p-4 mb-4 rounded-xl"></div>
              {
                isDark === 'dark'
                  ? <Nube
                      fill="#292C44"
                      className="w-16 h-16 mb-4"
                    />
                  : <Nube
                      fill="#e5e6e6"
                      className="w-16 h-16 mb-4"
                    />
              }
              <div className="flex justify-between items-center w-8/12 lg:w-10/12 2xl:w-8/12"><span className="bg-gray-400 dark:bg-loading-blue-dark p-4 rounded"></span><span className="bg-gray-400 dark:bg-loading-blue-dark p-4 rounded"></span></div>
            </div>
            <div className="w-full rounded-xl flex flex-wrap flex-col justify-center items-center bg-white dark:bg-morado-azulado text-blue-oscuro dark:text-gray-400 p-2 md:p-8 lg:p-2 xl:p-4 transition duration-300">
              <div className="w-full bg-gray-400 dark:bg-loading-blue-dark p-4 mb-4 rounded-xl"></div>
              {
                isDark === 'dark'
                  ? <Nube
                      fill="#292C44"
                      className="w-16 h-16 mb-4"
                    />
                  : <Nube
                      fill="#e5e6e6"
                      className="w-16 h-16 mb-4"
                    />
              }
              <div className="flex justify-between items-center w-8/12 lg:w-10/12 2xl:w-8/12"><span className="bg-gray-400 dark:bg-loading-blue-dark p-4 rounded"></span><span className="bg-gray-400 dark:bg-loading-blue-dark p-4 rounded"></span></div>
            </div>
            <div className="w-full rounded-xl flex flex-wrap flex-col justify-center items-center bg-white dark:bg-morado-azulado text-blue-oscuro dark:text-gray-400 p-2 md:p-8 lg:p-2 xl:p-4 transition duration-300">
              <div className="w-full bg-gray-400 dark:bg-loading-blue-dark p-4 mb-4 rounded-xl"></div>
              {
                isDark === 'dark'
                  ? <Nube
                      fill="#292C44"
                      className="w-16 h-16 mb-4"
                    />
                  : <Nube
                      fill="#e5e6e6"
                      className="w-16 h-16 mb-4"
                    />
              }
              <div className="flex justify-between items-center w-8/12 lg:w-10/12 2xl:w-8/12"><span className="bg-gray-400 dark:bg-loading-blue-dark p-4 rounded"></span><span className="bg-gray-400 dark:bg-loading-blue-dark p-4 rounded"></span></div>
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto text-blue-oscuro dark:text-white mb-4 px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-4">
              <div className="p-4 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
                <div className="w-full bg-gray-400 dark:bg-loading-blue-dark p-4 mb-4 rounded-xl"></div>
                <div className="w-1/2 bg-gray-400 dark:bg-loading-blue-dark p-12 mb-4 rounded-xl"></div>
                <div className="w-full bg-gray-400 dark:bg-loading-blue-dark p-4 mb-4 rounded-xl"></div>
              </div>
              <div className="p-4 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
                <div className="w-full bg-gray-400 dark:bg-loading-blue-dark p-4 mb-4 rounded-xl"></div>
                <div className="w-1/2 bg-gray-400 dark:bg-loading-blue-dark p-12 mb-4 rounded-xl"></div>
                <div className="w-full bg-gray-400 dark:bg-loading-blue-dark p-4 mb-4 rounded-xl"></div>
              </div>
              <div className="p-4 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
                <div className="w-full bg-gray-400 dark:bg-loading-blue-dark p-4 mb-4 rounded-xl"></div>
                <div className="w-1/2 bg-gray-400 dark:bg-loading-blue-dark p-10 rounded-xl"></div>
              </div>
              <div className="p-4 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
                <div className="w-full bg-gray-400 dark:bg-loading-blue-dark p-4 mb-4 rounded-xl"></div>
                <div className="w-1/2 bg-gray-400 dark:bg-loading-blue-dark p-10 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
        </>
        : <>
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
        {data[1].daily.map(daily => (
          <div className="w-full rounded-xl flex flex-wrap flex-col justify-center items-center bg-white dark:bg-morado-azulado text-blue-oscuro dark:text-gray-400 p-2 md:p-8 lg:p-2 xl:p-4 transition duration-300" key={daily.dt}>
          <h2 className="text-xl mb-4 text-blue-oscuro dark:text-white">{moment.unix(daily.dt).format('Do MMMM')}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@4x.png`}
            alt="nube"
            className="w-20 h-20"
          />
          <div className="flex justify-between items-center w-8/12 lg:w-10/12 2xl:w-8/12"><span className="text-gray-700 dark:text-white">{daily.temp.max.toFixed(0)}°C</span><span>{daily.temp.min.toFixed(0)}°C</span></div>
        </div>
        ))}
      </div>
      <div className="max-w-screen-xl mx-auto text-blue-oscuro dark:text-white mb-4 px-4 ">
        <h2 className="text-3xl font-semibold">Today&apos;s Hightlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full py-4">
          <div className="p-4 pb-8 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
            <h2 className="text-2xl pb-4">Wind Status</h2>
            <h3 className="text-6xl pb-8">{data[0].wind.deg}<span className="text-4xl">mps</span></h3>
            <div><i className="icon-paper-plane p-2 bg-blue-light dark:bg-gray-400 rounded-full text-white"></i> WSW</div>
          </div>
          <div className="p-4 pb-8 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
            <h2 className="text-2xl pb-4">Humidity</h2>
            <h3 className="text-6xl pb-8">{data[0].main.humidity}<span className="text-4xl">%</span></h3>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-center">
                <span>0</span>
                <span>50</span>
                <span>100</span>
                <div className="bg-gray-300 dark:bg-white rounded-full overflow-hidden w-full">
                  <div className="bg-yellow-300 p-2" style={{ width: `${data[0].main.humidity}%` }}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 pb-8 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
            <h2 className="text-2xl pb-4">Visibility</h2>
            <h3 className="text-6xl">{data[0].visibility}<span className="text-4xl"> meter</span></h3>
          </div>
          <div className="p-4 pb-8 rounded-xl flex flex-col bg-white dark:bg-morado-azulado justify-center items-center">
            <h2 className="text-2xl pb-4">Air Pressure</h2>
            <h3 className="text-6xl">{data[0].main.pressure}<span className="text-4xl"> hPa</span></h3>
          </div>
        </div>
      </div></>}
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
