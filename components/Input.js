import React, { useRef, useState } from 'react'
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  PhotographIcon,
  XIcon,
} from '@heroicons/react/outline'

function Input() {
  const [input, setInput] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const filePickerRef = useRef(null)

  const addImageToPost = () => {}
  return (
    <div
      className={`flex space-x-3 overflow-y-scroll border-b border-gray-700 p-3 `}
    >
      <img
        src="https://imgs.search.brave.com/L9p9xnhqEJGC4qyAqnGjXlZlc_BGAfAOL8ou72Jf_6A/rs:fit:384:384:1/g:ce/aHR0cHM6Ly93d3cu/YXBrbWlycm9yLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8wOC81OThiMzU0/NjhiOGYyLTM4NHgz/ODQucG5n"
        alt=""
        className="h-11 w-11 rounded-full xl:mr-2.5"
      />
      {/* divide y = tailwind utility class to create a border and adds it to each child */}
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea
            value={input}
            placeholder="What's up?"
            onChange={(e) => setInput(e.target.value)}
            name=""
            id=""
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
                serc={selectedFile}
                alt=""
                className="max-h-80 rounded-2xl object-contain"
              />
            </div>
          )}
        </div>
        <div className="items-centerjustify-between flex pt-2.5">
          <div className="flex items-center">
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
              <input
                type="file"
                hidden
                onChange={addImageToPost}
                ref={filePickerRef}
              ></input>
            </div>
            <div className="icon rotate-90">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>

            <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
            </div>

            <div className="icon">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Input
