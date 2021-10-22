import GlobalStateProvider from '../context/global/GlobalStateProvider'
import '../styles/css/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return <GlobalStateProvider>
    {getLayout(<Component {...pageProps} />)}
  </GlobalStateProvider>
}

export default MyApp
