"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Generate = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("")

  const handleGenerate = () => {
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
        setShortUrl("")
        setGenerated(`${process.env.NEXT_PUBLIC_BASE_URL}app/${shortUrl}`)
        console.log(result)
        alert(result.message)
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={`w-full min-h-[80vh] flex flex-col justify-start items-center py-12 px-4 ${poppins.className}`}>
      <div className="w-full max-w-2xl bg-orange-100/40 backdrop-blur-lg p-8 rounded-3xl border-2 border-orange-200 shadow-2xl flex flex-col items-center gap-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#441306]">Magic Link Creator</h1>
          <p className="text-[#5a2e1d] font-medium italic">Instantly shorten your long URLs with style</p>
        </div>

        <div className="w-full space-y-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="url" className="text-sm font-bold text-[#441306] ml-2">Your Long URL</label>
            <input
              type="text"
              name="urlHere"
              id="url"
              value={url}
              placeholder='https://example.com/very/long/url'
              onChange={(e) => setUrl(e.target.value)}
              className='w-full p-4 rounded-2xl bg-white/80 border-2 border-orange-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 outline-none transition-all shadow-sm text-[#441306]'
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="shortUrl" className="text-sm font-bold text-[#441306] ml-2">Preferred Custom Tag (Optional)</label>
            <input
              type="text"
              name="textHere"
              id="shortUrl"
              value={shortUrl}
              placeholder='e.g. my-awesome-link'
              onChange={(e) => setShortUrl(e.target.value)}
              className='w-full p-4 rounded-2xl bg-white/80 border-2 border-orange-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 outline-none transition-all shadow-sm text-[#441306]'
            />
          </div>

          <button
            className='w-full py-4 rounded-2xl bg-orange-500 text-white font-black text-lg shadow-lg hover:bg-orange-600 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer'
            onClick={handleGenerate}
          >
            GENERATE SHORT URL
          </button>
        </div>

        {generated && (
          <div className="w-full bg-green-100 border-2 border-green-300 p-6 rounded-2xl flex flex-col items-center gap-3 animate-bounce-in">
            <h2 className="text-lg font-bold text-green-800">🎉 Success! Your Link is Ready</h2>
            <div className="flex flex-col items-center gap-2">
              <Link
                href={generated}
                target="_blank"
                className="text-xl font-bold text-blue-700 underline break-all text-center hover:text-blue-800"
              >
                {generated}
              </Link>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(generated);
                  alert("Copied to clipboard!");
                }}
                className="text-sm font-bold text-green-700 hover:text-green-900 cursor-pointer underline"
              >
                Click here to copy
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12 text-center text-[#5a2e1d]/60 text-sm font-medium">
        <p>Tip: Custom tags make your links easier to remember!</p>
      </div>
    </div>
  )
}

export default Generate
