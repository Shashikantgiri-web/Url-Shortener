import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-[99%] h-[7vh] flex flex-row justify-center items-center bg-[#d97d4d]'>
      <div className='w-[49%] h-[99%] flex justify-start items-center'>
        <p className='text-2xl font-bold w-full h-full flex justify-start items-center pl-2 italic'>Bitlink</p>
      </div>
      <div className='w-[49%] h-[99%] flex flex-row justify-center items-start gap-1'>
        <ul className='w-[60%] h-full flex flex-row justify-center items-center gap-2'>
          <li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-white hover:cursor-pointe w-[99%] h-[99%] flex justify-center items-center'><Link href="/">Home</Link></li>
          <li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-white hover:cursor-pointer w-[99%] h-[99%] flex justify-center items-center'><Link href="/about">About</Link></li>
          <li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-white hover:cursor-pointer w-[99%] h-[99%] flex justify-center items-center'><Link href="/generate">Shorten</Link></li>
          <li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-white hover:cursor-pointer w-[99%] h-[99%] flex justify-center items-center'><Link href="/contact">Contact US</Link></li>
        </ul>
        <div className='w-[40%] h-full flex flex-row justify-center items-center gap-2'>
          <div className='w-[49%] h-[99%] flex justify-center items-center'>
            <button className='w-[80%] h-[90%] rounded-[10px] bg-orange-500 hover:text-white hover:bg-orange-600'><Link href="/generate">Try now</Link></button>
          </div>
          <div className='w-[49%] h-[99%] flex justify-center items-center'>
            <button className='w-[80%] h-[90%] rounded-[10px] bg-green-400 hover:bg-green-500 text-white'><Link href="/github">Github</Link></button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar