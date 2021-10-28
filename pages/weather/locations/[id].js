import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import System from '../../../components/system'
import Context from '../../../context/global/context'

export async function getServerSideProps (constext) {
  const { params } = constext
  const { id } = params
  const newId = id.split('&')
  let extendInfo = null
  let errorr = false
  await axios.get(`${process.env.API_URL}onecall?lat=${newId[0]}&lon=${newId[1]}&units=metric&exclude=minutely,hourly&appid=${process.env.API_KEY}`).then(response => {
    if (response.status === 200) {
      extendInfo = response.data
    } else {
      errorr = true
    }
  }).catch(err => {
    if (err) {
      errorr = true
    }
  })
  return {
    props: {
      extendInfo,
      errorr
    }
  }
}

export default function locations ({ extendInfo, errorr }) {
  const { setData, setError, error, savedLocations, setSavedLocations, data } = useContext(Context)
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    axios.get('https://ipapi.co/json/').then(response => {
      axios.get(`http://geoplugin.net/json.gp?ip=${response.data.ip}`).then(responses => {
        axios.get(`${process.env.API_URL}weather?q=${responses.data.geoplugin_city},${responses.data.geoplugin_countryCode}&units=metric&appid=${process.env.API_KEY}`).then(responsess => {
          if (responsess.status === 200) {
            errorr ? setError(!error) : setData([responsess.data, extendInfo])
          } else {
            setError(!error)
          }
        }).catch(err => {
          if (err) {
            setError(!error)
          }
        })
      })
    })
    setSavedLocations([...savedLocations, id])
  }, [id])
  return (
    <>
    </>
  )
}
locations.getLayout = function getLayout (page) {
  return (
    <System titlePage="Weather">
      {page}
    </System>
  )
}
