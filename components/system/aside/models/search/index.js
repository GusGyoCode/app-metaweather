import Link from 'next/link'

export default function Search ({ handleFunction }) {
  return (
    <div className="w-full fixed lg:relative overflow-hidden overflow-y-auto top-0 left-0 h-screen bg-white dark:bg-morado-azulado style_sidenavScrollbar__3m">
      <div className="flex justify-end items-center p-4">
        <button onClick={handleFunction}><i className="icon-cancel text-2xl"></i></button>
      </div>
      <div className="p-4 flex flex-wrap items-center justify-between">
        <div className="w-9/12 border-solid border-gray-400 border rounded-md">
          <i className="icon-search text-2xl text-gray-300"></i>
          <input type="text" className="p-2 mr-3 w-10/12 bg-transparent focus:outline-none text-black dark:text-white"/>
        </div>
        <Link href="/">
          <a className="w-2/12 p-2 bg-blue-light dark:bg-blue-400 text-center rounded-md text-white hover:bg-blue-light-hover dark:hover:bg-blue-300 transition duration-500">
            Search
          </a>
        </Link>
      </div>
      <div className="p-4">
        <ul className="w-full dark:text-white text-blue-oscuro">
          <li className="w-full">
            <Link href="/">
              <a className="p-4 border border-solid border-transparent hover:border-gray-400 text-2xl transition duration-500 w-full block flex justify-between">
                London
                <i className="icon-arrow-right"></i>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
