import React from 'react'
import Image from 'next/image'

function Sidebar() {
  return (
    <div className="fixed hidden h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24">
        <Image src="" />
      </div>
    </div>
  )
}

export default Sidebar
