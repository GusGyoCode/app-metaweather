import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import System from '../../../components/system'
import Context from '../../../context/global/context'

export async function getServerSideProps (constext) {
  const { params } = constext
  const { id } = params
  const newId = id.split('&')
  let info = null
  let extendInfo = null
  let coord = null
  let errorr = false
  await axios.get(`${process.env.API_URL}weather?q=${newId[0]},${newId[1]}&units=metric&appid=${process.env.API_KEY}`).then(response => {
    if (response.status === 200) {
      info = response.data
      coord = response.data.coord
    } else {
      errorr = true
    }
  }).catch(err => {
    if (err) {
      errorr = true
    }
  })
  coord === 'undefined' || coord === null
    ? errorr = true
    : await axios.get(`${process.env.API_URL}onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&exclude=minutely,hourly&appid=${process.env.API_KEY}`).then(response => {
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
      info,
      extendInfo,
      errorr
    }
  }
}

export default function city ({ info, extendInfo, errorr }) {
  const { setData, setError, error, savedLocations, setSavedLocations } = useContext(Context)
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    console.log(errorr)
    errorr ? setError(!error) : setData([info, extendInfo])
    setSavedLocations([...savedLocations, id])
  }, [id])
  return (
    <>
    </>
  )
}
city.getLayout = function getLayout (page) {
  return (
    <System titlePage="Weather">
      {page}
    </System>
  )
}
