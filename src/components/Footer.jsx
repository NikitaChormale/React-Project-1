import React from 'react'
import {Github} from"lucide-react";
function Footer() {
  return (
    <div className='w-full bg-[#ffbc4c] px-10 py-4 flex justify-around'>
      <div>
        Made With <span style={{color:"red"}}>@</span> by RTC
      </div>
       <div>      
  <a href='https://github.com/NikitaChormale?tab=repositories'>
  <Github/>Github
  </a>
  <a href='http://linkdin.com/NikitaChormale'>
  LInkdin</a>
  <a href='http://youtube.com/NikitaChormale'>
  Youtub</a>
    </div>
     </div>
  )
}

export default Footer
