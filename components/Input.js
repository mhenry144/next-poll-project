import React, { useState } from 'react'

function Input() {
  const [input, setInput] = useState('')
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
            placeholder="Whats up?"
            onChange={(e) => setInput(e.target.value)}
            name=""
            id=""
            rows="2"
            className="bg-transparent text-lg tracking-wide text-[#d9d9d9] placeholder-gray-500 outline-none"
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default Input
