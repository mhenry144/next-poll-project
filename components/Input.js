import React, { useRef, useState } from 'react'
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/outline'
import { db, storage } from '../firebase'
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from '@firebase/firestore'
import { getDownloadURL, ref, uploadString } from '@firebase/storage'
import { useSession } from 'next-auth/react'

function Input() {
  const { data: session } = useSession()
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const filePickerRef = useRef(null)
  const [showEmojis, setShowEmojis] = useState(false)

  const sendPost = async () => {
    if (loading) return
    setLoading(true)

    const docRef = await addDoc(collection(db, 'posts'), {
      id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      tag: session.user.tag,
      text: input,
      timestamp: serverTimestamp(),
    })

    const imageRef = ref(storage, `posts/${docRef.id}/image`)
    // using firebase storage to upload image -- (uploadString uploads string to object location)
    // convert selectedFile into clean url for Firebase
    if (selectedFile) {
      await uploadString(imageRef, selectedFile, 'data_url').then(async () => {
        const downloadURL = await getDownloadURL(imageRef)
        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadURL,
        })
      })
    }

    setLoading(false)
    setInput('')
    setSelectedFile(null)
    setShowEmojis(false)
  }

  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }
  }
  return (
    <div
      className={`scrollbar-hide flex space-x-3 overflow-y-scroll border-b border-gray-700 p-3 ${
        loading && 'opacity-60'
      }`}
    >
      <img
        src={session.user.image}
        alt="image"
        className="h-11 w-11 rounded-full xl:mr-2.5"
      />
      {/* divide y = tailwind utility class to create a border and adds it to each child */}
      <div className="w-full divide-y divide-gray-700">
        <div className={`${selectedFile && 'pb-7'} ${input && 'space-y-2.5'}`}>
          {/* TEXT */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What's up?"
            rows="2"
            className="min-h-[50px] w-full bg-transparent text-lg tracking-wide text-[#d9d9d9] placeholder-gray-500 outline-none"
          />
          {/* && === if selectedFile === true, show */}
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute top-1 left-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#15181c] bg-opacity-75 hover:bg-[#272c26]"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className=" h-5 text-white" />
              </div>
              {/* object-contain -- image will never be stretched (retain apsect image) */}
              <img
                src={selectedFile}
                alt=""
                className="max-h-80 rounded-2xl object-contain"
              />
            </div>
          )}
        </div>
        {/* Icons */}
        {!loading && (
          <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
              {/* Added custom tailwind css named 'icon' */}
              <div
                className="icon"
                onClick={() => filePickerRef.current.click()}
              >
                <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
                <input
                  type="file"
                  ref={filePickerRef}
                  hidden
                  onChange={addImageToPost}
                ></input>
              </div>
              <div className="icon rotate-90">
                <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
              </div>
              {/* ! === opposite */}
              <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
              </div>

              <div className="icon">
                <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
              </div>
            </div>
            {/* POST BUTTON */}
            <button
              className="rounded-full bg-[#1d9bf0] px-4 py-1.5 font-bold text-white shadow-md hover:bg-[#1a8cd8] disabled:cursor-default disabled:opacity-50 disabled:hover:bg-[#1d9bf0]"
              disabled={!input && !selectedFile}
              onClick={sendPost}
            >
              Tweet
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Input
