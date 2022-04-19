import React from 'react'

function Widgets() {
  return (
    <div className="ml-8 hidden space-y-5 py-1 lg:inline xl:w-[450px]">
      <div className="sticky top-0 z-50 w-11/12 bg-black py-1.5 xl:w-9/12">
        <div className="relative flex items-center rounded-full bg-[#202327] p-3">
          <SearchIcon className="z-50 h-5 text-gray-500" />
          <input
            type="text"
            className="absolute inset-0 w-full rounded-full border border-transparent bg-transparent pl-11 text-[#d9d9d9] placeholder-gray-500 outline-none focus:border-[#1d9bf0] focus:bg-black focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>
    </div>
  )
}

export default Widgets
