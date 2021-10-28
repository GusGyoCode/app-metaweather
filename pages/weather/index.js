import { useContext, useEffect } from 'react'
import System from '../../components/system'
import Context from '../../context/global/context'

export default function weather () {
  const { setData } = useContext(Context)
  useEffect(() => {
    setData([])
  }, [])
  return (
    <System titlePage="Weather">
    </System>
  )
}
