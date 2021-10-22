import System from "../../components/system"

export default function weather () {
  return (
    <>
    </>
  )
}

weather.getLayout = function getLayout (page) {
  return (
    <System titlePage="Weather">
      {page}
    </System>
  )
}
