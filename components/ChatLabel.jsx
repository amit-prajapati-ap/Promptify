import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const ChatLabel = ({openMenu, setOpenMenu}) => {

  return (
    <div className='flex items-center justify-between p-2 text-white/80 hover:bg-white/10 rounded-lg text-sm group cursor-pointer transition-all duration-300'>
      <p className='group-hover:max-w-5/6 truncate'>Chat Name Here</p>
      <div className='group relative flex items-center justify-center h-6 w-6 aspect-square hover:bg-black/80 transition-all duration-200 rounded-lg'>
        <Image src={assets.three_dots} alt='three_dots' className={`w-4
             ${openMenu.open ? "" : "hidden"} group-hover:block`}/>

        <div className={`absolute -right-36 top-6 bg-gray-700 rounded-xl w-max p-2 ${openMenu.open ? "" : "hidden"}`}>
            <div className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300'>
                <Image src={assets.pencil_icon} alt='pencil' className='w-4'/>
                <p>Rename</p>
            </div>
            <div className='flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300'>
                <Image src={assets.delete_icon} alt='pencil' className='w-4'/>
                <p>Delete</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChatLabel
