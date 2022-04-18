import { useEffect, useState } from 'react'
import { SparklesIcon } from '@heroicons/react/outline'
import Input from './Input'
import { useSession } from 'next-auth/react'
import { onSnapshot, collection, query, orderBy } from '@firebase/firestore'
import { db } from '../firebase'
import Post from './Post'

function Feed() {
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])

  useEffect(
    () =>
      onSnapshot(
        // retrieve posts using 'query'
        // order by timestamp descending order
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        // set posts to all docs in order
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )

  // flex-grow will take up as much room as possible
  return (
    <div className="max-w-2xl flex-grow border-l border-r border-gray-700 sm:ml-[73px] xl:ml-[370px]">
      <div className="sticky top-0 z-50 flex items-center border-b border-gray-700 bg-black py-2 px-3 text-[#d9d9d9] sm:justify-between">
        <h2 className="text-lg font-bold sm:text-xl">Home</h2>
        <div className="hoverAnimation ml-auto flex h-9 w-9 items-center justify-center xl:px-0">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>

      <Input />
      <div className="pb-72">
        {/* key is never sent as a prop */}
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  )
}

export default Feed
