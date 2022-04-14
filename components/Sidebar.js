import React from 'react'
import Image from 'next/image'

function Sidebar() {
  return (
    <div className="fixed hidden h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24">
        {/* always have to configure the host of the image (domain) */}
        {/* have to specify width height for next images*/}
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
        {/*spade = spacing 2.5 px each*/}
        <div className="spade-y-2.5">
          <SidebarLink />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
