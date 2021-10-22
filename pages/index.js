import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Home () {
  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/').then(response => {
      console.log(response)
    })
  }, [])

  return (
    <>
      <Head>
        <title>inicio</title>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Link href="weather">
        <a className="text-gray-500">
          ir weather app
        </a>
      </Link>
    </>
  )
}
