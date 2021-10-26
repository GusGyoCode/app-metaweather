import axios from 'axios'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import System from '../../../components/system'
import Context from '../../../context/global/context'

export async function getServerSideProps (constext) {
  const { params } = constext
  const { id } = params
  const newId = id.split('&')
  let info
  let extendInfo
  let coord
  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${newId[0]},${newId[1]}&units=metric&appid=2020f4ddc595856c61c043b9ef4a0128`).then(response => {
    if (response.status === 200) {
      info = response.data
      coord = response.data.coord
    }
  })
  await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&exclude=minutely,hourly&appid=2020f4ddc595856c61c043b9ef4a0128`).then(response => {
    if (response.status === 200) {
      extendInfo = response.data
    }
  })
  return {
    props: {
      info,
      extendInfo
    }
  }
}

export default function city ({ info, extendInfo }) {
  const { setData } = useContext(Context)
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    console.log(info)
    console.log(extendInfo)
    setData([info, extendInfo])
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
