import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import { getProviders, getSession, useSession } from 'next-auth/react'
import Login from './../components/Login'

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession()

  if (!session) return <Login providers={providers} />

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
// server side props
export async function getServerSideProps(context) {
  // fetch props from jsonkeeper
  const trendingResults = await fetch('https://jsonkeeper.com/b/NKEV').then(
    (res) => res.json()
  )

  const followResults = await fetch('https://jsonkeeper.com/b/WWMJ').then(
    (res) => res.json()
  )

  const providers = await getProviders()
  // stop flickering to login page before main page
  const session = await getSession(context)

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  }
}
