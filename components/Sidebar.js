import React from 'react'
import Image from 'next/image'
import SidebarLink from './SidebarLink'

function Sidebar() {
  return (
    <div className="fixed hidden h-full flex-col items-center p-2 sm:flex xl:w-[340px] xl:items-start">
      <div className="hoverAnimation flex h-14 w-14 items-center justify-center p-0 xl:ml-24">
        {/* always have to configure the host of the image (domain) */}
        {/* have to specify width height for next images*/}
        <Image src="https://rb.gy/ogau5a" width={30} height={30} />
        {/*spade = spacing 2.5 px each*/}
        <div className="spade-y-2.5 mt-4 mb-2.5 xl:ml-24">
          <SidebarLink text="Home" Icon={HomeIcon} active />
          <SidebarLink text="Explore" Icon={HashtagIcon} />
          <SidebarLink text="Notifications" Icon={BellIcon} />
          <SidebarLink text="Messages" Icon={InboxIcon} />
          <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarLink text="Lists" Icon={ClipboardListIcon} />
          <SidebarLink text="Profile" Icon={UserIcon} />
          <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
