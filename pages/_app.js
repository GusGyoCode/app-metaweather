import GlobalStateProvider from '../context/global/GlobalStateProvider'
import '../styles/css/globals.css'

function MyApp ({ Component, pageProps }) {
  return <GlobalStateProvider>
    <Component {...pageProps} />
  </GlobalStateProvider>
}

export default MyApp
