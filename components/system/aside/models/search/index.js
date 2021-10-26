import { countries } from 'countries-list'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import Context from '../../../../../context/global/context'

export default function Search ({ handleFunction }) {
  const [search, setSearch] = useState('')
  const [select, SetSelect] = useState('')
  const [countriess, setCountries] = useState([])
  const router = useRouter()
  const { setValidation, validation } = useContext(Context)

  const handleSubmit = e => {
    e.preventDefault()
    if (search === '' || select === '') {
      setValidation(!validation)
    } else {
      router.push(`/weather/city/${search}&${select}`)
      handleFunction()
    }
  }

  useEffect(() => {
    setCountries(Object.entries(countries))
  }, [])

  return (
    <div className="w-full fixed lg:relative overflow-hidden overflow-y-auto top-0 left-0 h-screen bg-white dark:bg-morado-azulado style_sidenavScrollbar__3m">
      <div className="flex justify-end items-center p-4">
        <button onClick={handleFunction}><i className="icon-cancel text-2xl dark:text-white"></i></button>
      </div>
      <form className="p-4 flex flex-wrap items-center justify-between" onSubmit={handleSubmit}>
        <div className="w-9/12 border-solid border-gray-400 border rounded-md flex flex-wrap">
          <i className="icon-search text-2xl text-gray-300 w-2/12 text-center"></i>
          <input type="text" className="p-2 w-10/12 bg-transparent focus:outline-none text-black dark:text-white" placeholder="Search city..." onChange={e => setSearch(e.target.value)}/>
        </div>
        <button className="w-2/12 p-2 bg-blue-light dark:bg-blue-400 text-center rounded-md text-white hover:bg-blue-light-hover dark:hover:bg-blue-300 transition duration-500">
            Search
        </button>
        <select name="select" onChange={e => { SetSelect(e.target.value) }} className="w-full border-solid border-gray-400 border mt-4 p-2 rounded-md bg-transparent text-black dark:text-white focus:outline-none text-xl style_main__1l">
        <option className="text-black bg-transparent" value=''>Select a country</option>
        {countriess.map(countriesss => (
          <option className="text-black bg-transparent" value={countriesss[0]} key={countriesss[0]}>{`${countriesss[0]} ${countriesss[1].name}`}</option>
        ))}
      </select>

      </form>
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
