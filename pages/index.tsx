import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center bg-green-100">
      <Head>
        <title>Renora App</title>
      </Head>
      <div>
        <p className="text-center text-lg font-bold"> Renora App</p>
        <a href="/dashboard" className="block mt-5 hover:text-gray-600 shadow-sm"> Click to enter dashboard </a>
      </div>
    </div>
  )
}

export default Home
