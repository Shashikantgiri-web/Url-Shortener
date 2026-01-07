import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[99%] h-[10vh] flex flex-row justify-center items-center bg-[#d97d4d]'>
      <div className='w-[49%] h-[99%] flex justify-start items-center'>
        <p className='text-2xl font-bold w-full h-full flex justify-center items-start pl-2 italic'>Navbar</p>
      </div>
      <div className='w-[49%] h-[99%] flex justify-center items-start'>
        <ul className='w-full h-full flex flex-row justify-center items-center gap-2'>
          <li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-gray-500 hover:cursor-pointe w-[20%] h-[99%] flex justify-center items-center'>Home</li>
          <li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-gray-500 hover:cursor-pointer w-[20%] h-[99%] flex justify-center items-center'>About</li>
          <li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-gray-500 hover:cursor-pointer w-[20%] h-[99%] flex justify-center items-center'>Shorten</li>
          <li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-gray-500 hover:cursor-pointer w-[20%] h-[99%] flex justify-center items-center'>Contact US</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar