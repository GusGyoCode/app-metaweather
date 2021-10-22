// import { useContext } from "react";
// import Context from "../../../context/global/context";
import Nube from "../../icons/nube";
import Image from "next/image";

export default function Aside() {
  // const {isDark, setIsDark} = useContext(Context)
  // {isDark === 'dark' ? <li><button onClick={() => setIsDark('ligth') }>Visitar Sitio en Ingles</button></li> : <li><button onClick={() => setIsDark('dark')}>Visit Website in Spanish</button></li>}

  if (typeof window !== "undefined") {
    navigator.geolocation.watchPosition(function showPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }

  return (
    <aside className="w-full lg:w-1/4 h-screen bg-morado-azulado overflow-hidden relative overflow-y-auto style_sidenavScrollbar__3m">
      <div className="flex flex-wrap w-full p-4 justify-between items-center">
        <button className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-300 transition duration-500">Search for place <i className="icon-search"></i></button>
        <button className="p-2 bg-gray-400 text-white rounded-full hover:bg-gray-300 transition duration-500"><i className="icon-target"></i></button>
      </div>
      <div className="relative p-4 pb-12">
        <div className="relative z-10 flex justify-center items-center">
          <img
            src="https://www.metaweather.com/static/img/weather/s.svg"
            alt="nube"
            className="w-32 h-32 md:w-64 md:h-64 lg:w-36 lg:h-36 xl:w-64 xl:h-64"
          />
        </div>
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
      </div>
      <div className="text-gray-400 grid -grd-cols-1 gap-10 md:gap-20 pb-8">
        <h2 className="text-8xl md:text-9xl text-center text-white">
          15<span className="text-4xl text-gray-400">°C</span>
        </h2>
        <h3 className="text-4xl text-center font-bold">Shower</h3>
        <h3 className="text-xl text-center">Today . Fri, 5 Jun</h3>
        <h4 className="text-xl font-light text-center"><i className="icon-location"></i> Helsinki</h4>
      </div>
    </aside>
  );
}
