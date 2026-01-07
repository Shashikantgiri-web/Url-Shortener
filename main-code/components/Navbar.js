import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-[99%] h-[10vh] flex flex-row justify-center items-center bg-[#d97d4d]'>
      <div className='w-[49%] h-[99%] flex justify-start items-center'>
        <p className='text-2xl font-bold w-full h-full flex justify-start items-center pl-2 italic'>Bitlink</p>
      </div>
      <div className='w-[49%] h-[99%] flex flex-row justify-center items-start gap-1'>
        <ul className='w-[60%] h-full flex flex-row justify-center items-center gap-2'>
          <Link href="/"><li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-orange-900 hover:cursor-pointe w-[20%] h-[99%] flex justify-center items-center'>Home</li></Link>
          <Link href="/about"><li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-orange-900 hover:cursor-pointer w-[20%] h-[99%] flex justify-center items-center'>About</li></Link>
          <Link href="/generate"><li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-orange-900 hover:cursor-pointer w-[20%] h-[99%] flex justify-center items-center'>Shorten</li></Link>
          <Link href="/contact"><li className='hover:text-lg text-[16px] font-sembold hover:text-[20px] hover:text-orange-900 hover:cursor-pointer w-[20%] h-[99%] flex justify-center items-center'>Contact US</li></Link>
        </ul>
        <div className='w-[40%] h-full flex flex-row justify-center items-center gap-2'>
          <div className='w-[49%] h-[99%] flex justify-center items-center'>
            <Link href="/generate"><button className='w-[80%] h-[90%] rounded-[10px] bg-orange-500 hover:text-orange-900 hover:bg-orange-600'>Try now</button></Link>
          </div>
          <div className='w-[49%] h-[99%] flex justify-center items-center'>
            <Link href="/gethub"><button className='w-[80%] h-[90%] rounded-[10px] bg-green-400 hover:bg-green-500 text-white'>Github</button></Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar