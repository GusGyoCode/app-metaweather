import Head from 'next/head'
import Link from 'next/link'

export async function getServerSideProps (constext) {
  const { res } = constext
  res.writeHead(301, { location: '/weather/' }).end()
  return {
    props: {
    }
  }
}

export default function Home () {
  return (
    <>
      <Head>
        <title>inicio</title>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Link href="weather">
        <a className="text-gray-500">
          ir weather app
        </a>
      </Link>
    </>
  )
}
