import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { useSession } from 'next-auth/react'
import Modal from '../components/Modal'
import Sidebar from '../components/Sidebar'
import Head from 'next/head'

import Post from '../components/Post'
import { db } from '../firebase'

function PostPage() {
  const [isOpen, setIsOpen] = useRecoilState(modalState)
  const { data: session } = useSession()
  return (
    <div className="">
      <Head>
        <title>Home / Twitter</title>
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
