import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from './../components/Feed'

const Home: NextPage = () => {
  return (
    // flex min-h-screen flex-col items-center justify-center py-2
    <div className="">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex min-h-screen max-w-[1500px] bg-black">
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        {/* Modal */}
      </main>
    </div>
  )
}

export default Home
