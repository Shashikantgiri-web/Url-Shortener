import React from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const about = () => {
  return (
    <div className={`w-[99%] h-auto flex flex-col justify-start items-center gap-6 mt-4 pb-10 ${poppins.className}`}>
      <section className="w-full bg-orange-200 p-8 rounded-lg shadow-md flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold text-[#441306]">About Bitlink</h1>
        <p className="text-lg max-w-2xl">
          Bitlink is built with a simple mission: to provide the most straightforward and privacy-respecting URL shortener in the world.
          We believe you shouldn't have to trade your personal data just to share a link.
        </p>
      </section>

      <section className="w-full flex flex-col md:flex-row gap-6 justify-center items-stretch">
        <div className="flex-1 bg-orange-100 p-6 rounded-lg border-2 border-orange-300">
          <h2 className="text-2xl font-bold mb-3 text-[#d97d4d]">Why Bitlink?</h2>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li><strong>No Tracking:</strong> Unlike other services, we don't track who clicks your links.</li>
            <li><strong>Privacy First:</strong> We don't ask for your personal details or login.</li>
            <li><strong>Simple & Fast:</strong> Generate your short URL in seconds without any friction.</li>
            <li><strong>Free Forever:</strong> Our core service will always be free and open.</li>
          </ul>
        </div>

        <div className="flex-1 bg-orange-100 p-6 rounded-lg border-2 border-orange-300">
          <h2 className="text-2xl font-bold mb-3 text-[#d97d4d]">Our Values</h2>
          <p className="text-md leading-relaxed">
            We value simplicity, transparency, and the open web. Bitlink is an open-source project dedicated to making link sharing safer and easier for everyone.
            Whether you are a developer, a marketer, or just someone sharing a funny video, Bitlink is here for you.
          </p>
        </div>
      </section>

      <div className="w-full flex justify-center mt-4">
        <button className='px-8 py-3 rounded-[10px] bg-orange-500 text-white font-bold hover:bg-orange-600 hover:scale-105 transition-all cursor-pointer'>
          <a href="/generate">Start Shortening</a>
        </button>
      </div>
    </div>
  )
}

export default about
