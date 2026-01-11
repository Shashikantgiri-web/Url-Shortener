"use client"
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const generate = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      "url": url,
      "shortUrl": shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("/app/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUrl("")
        setShortUrl(`${process.env.NEXT_PUBLIC_BASE_URL}/${shortUrl}`)
        setGenerated(true)
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-[99%] h-auto flex flex-col justify-start items-center gap-4 mt-2 bg-orange-200 py-2.5">
      <h1 className="text-2xl font-bold w-[40%] mb-1.5">Generate Your Short URL</h1>
      <input type="text" name="urlHere" id="a" value={url} placeholder='Enter your Url here' onChange={(e) => setUrl(e.target.value)} className='w-[40%] h-7.5 rounded-[10px] flex justify-start items-center pl-2 hover:bg-orange-400 Hover:text-white bg-transparent ring-2 ring-orange-700' />
      <input type="text" name="textHere" id="b" value={shortUrl} placeholder='Enter your perferred short Url text here' onChange={(e) => setShortUrl(e.target.value)} className='w-[40%] h-7.5 rounded-[10px] flex justify-start items-center pl-2 hover:bg-orange-400 Hover:text-white bg-transparent ring-2 ring-orange-700' />
      <button className='w-[40%] h-10 rounded-[10px] bg-orange-500 hover:text-white hover:bg-orange-600 mt-1.5' onClick={generate}>Generate</button>

      {generated && (
        <div className="w-[40%] h-auto bg-orange-300 rounded-[10px] flex flex-col justify-center items-center py-2.5 mt-2.5">
          <h2 className="text-xl font-semibold mb-1.5">Your Short URL:</h2>
          <a href={`${process.env.NEXT_PUBLIC_BASE_URL}/${shortUrl}`} target="_blank" rel="noopener noreferrer" className="text-lg text-blue-700 underline">
            {shortUrl}
          </a>
        </div>
      )}  
    </div>
  )
}

export default generate