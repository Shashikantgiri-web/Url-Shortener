import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[99%] h-[10vh] flex flex-row justify-between items-center bg-[#d97d4d]'>
      <div className='w-[49%] h-[99%] flex justify-center items-start'>
        <p className='text-2xl font-bold w-full h-full'>Navbar</p>
      </div>
      <div className='w-[49%] h-[99%] flex justify-center items-start'>
        <ul className='w-full h-full flex flex-row justify-center items-center gap-2'>
          <li className='text-lg font-sembold hover:text-[20px] hover:text-gray-500'>Home</li>
          <li className='text-lg font-sembold hover:text-[20px] hover:text-gray-500'>About</li>
          <li className='text-lg font-sembold hover:text-[20px] hover:text-gray-500'>Shorten</li>
          <li className='text-lg font-sembold hover:text-[20px] hover:text-gray-500'>Contact US</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar