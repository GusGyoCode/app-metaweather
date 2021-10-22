import storage from 'local-storage-fallback'
import Head from 'next/head'
import { useContext, useEffect } from 'react'
import Context from '../../../context/global/context'

export default function Layout ({ titlePage, children }) {
  const { isDark, setIsDark } = useContext(Context)
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
      </Head>
      <div className={isDark === 'dark' ? 'dark' : ''}>
        <div className='w-full flex flex-wrap'>
          {children}
        </div>
      </div>

    </>
  )
}
