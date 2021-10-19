import Head from 'next/head'
import Link from 'next/link'

export default function Layout({titlePage, children}) {
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="w-full">
        {children}
      </div>
    </>
  )
}
