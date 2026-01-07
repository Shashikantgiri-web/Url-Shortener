"use client"
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const generate = () => {
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [generate, setGenerate] = useState(false)

    const handleChange = (first) => {

    }

  return (
    <div className="w-[99%] h-auto flex flex-col justify-start items-center gap-4">
        <h1>Generate Your Short URL</h1>
        <input type="text" name="urlHere" id="a" placeholder='Enter your Url here' onClick={handleChange}/>
        <input type="text" name="textHere" id="b" placeholder='Enter your perferred short Url text here' onClick={handleChange}/>
        <button>Generate</button>
    </div>
  )
}

export default generate