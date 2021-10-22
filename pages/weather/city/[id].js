import axios from 'axios'
import { useEffect } from 'react'
import System from '../../../components/system'

export default function city () {
  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/').then(response => {
      console.log(response)
    })
  }, [])
  return (
    <System titlePage="Weather">
    </System>
  )
}
