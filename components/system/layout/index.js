import storage from 'local-storage-fallback'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import Context from '../../../context/global/context'
import Notification from '../notification'

export default function Layout ({ titlePage, children }) {
  const { isDark, setIsDark, validation, error, setValidation, setError } = useContext(Context)
  const router = useRouter()
  useEffect(() => {
    if (storage.getItem('isDark')) {
      setIsDark(storage.getItem('isDark'))
    }
  }, [])
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
      <div className={isDark === 'dark' ? 'dark' : ''}>
        <div className='w-full flex flex-wrap'>
          {validation ? <Notification text="Please fill in the fields to search for a place" handleFuntion={() => { setValidation(false); setError(false) }}/> : <></>}
          {error ? <Notification text="Please verify that the city entered is in the selected country" handleFuntion={() => { setError(false); router.push('/weather/') }}/> : <></>}
          {children}
        </div>
      </div>

    </>
  )
}
