"use client"
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const generate = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [generate, setGenerate] = useState(false)

  return (
    <div className="w-[99%] h-auto flex flex-col justify-start items-center gap-4 mt-2 bg-orange-200">
        <h1 className="text-2xl font-bold w-[40%] mb-1.5">Generate Your Short URL</h1>
        <input type="text" name="urlHere" id="a" value={url} placeholder='Enter your Url here' onChange={(e) => setUrl(e.target.value)} className='w-[40%] h-7.5 rounded-[10px] flex justify-start items-center pl-2 hover:bg-orange-200 text-white bg-transparent ring-2 ring-orange-700'/>
        <input type="text" name="textHere" id="b" value={shortUrl} placeholder='Enter your perferred short Url text here' onChange={(e) => setShortUrl(e.target.value)} className='w-[40%] h-7.5 rounded-[10px] flex justify-start items-center pl-2 hover:bg-orange-200 text-white bg-transparent ring-2 ring-orange-700'/>
        <button className='w-[40%] h-10 rounded-[10px] bg-orange-500 hover:text-white hover:bg-orange-600 mt-1.5'>Generate</button>
    </div>
  )
}

export default generate