import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { getProviders, getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Modal from '../components/Modal'
import Sidebar from '../components/Sidebar'
import Head from 'next/head'
import Login from '../components/Login'

import Post from '../components/Post'
import { db } from '../firebase'
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from '@firebase/firestore'

function PostPage({ trendingResults, followResults, providers }) {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useRecoilState(modalState)
  const [post, setPost] = useState()
  const router = useRouter()
  const { id } = router.query
  console.log(router)

  useEffect(
    () =>
      onSnapshot(doc(db, 'posts', id), (snapshot) => {
        setPost(snapshot.data())
      }),
    [db]
  )

  if (!session) return <Login providers={providers} />

  return (
    <div className="">
      <Head>
        <title>
          {post?.username} on Twitter: "{post?.text}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto flex min-h-screen max-w-[1500px] bg-black">
        <Sidebar />

        {isOpen && <Modal />}
      </main>
    </div>
  )
}

export default PostPage

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
