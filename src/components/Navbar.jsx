import React from 'react'
import { Salad as SaladIcon } from 'lucide-react'

function Navbar() {
  return (
    <div className='bg-pink-300 sticky top-0 max-w-[90%] mx-auto px-6 py-2
    rounded-full flex items-center justify-center gap-2 my-2'>

      <SaladIcon size={40} strokeWidth={1} />

      <h2 className='text-2xl font-bold'>
        RTC Vegtables
      </h2>

    </div>
  )
}

export default Navbar