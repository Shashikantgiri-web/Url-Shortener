import React from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const contact = () => {
  return (
    <div className={`w-[99%] h-auto flex flex-col justify-start items-center gap-6 mt-4 pb-10 ${poppins.className}`}>
      <section className="w-full bg-orange-200 p-8 rounded-lg shadow-md flex flex-col items-center gap-4 text-center">
        <h1 className="text-4xl font-bold text-[#441306]">Get in Touch</h1>
        <p className="text-lg max-w-2xl">
          Have questions, feedback, or just want to say hi? We'd love to hear from you.
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </section>

      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 mt-4">
        {/* Contact Form */}
        <div className="flex-[1.5] bg-orange-100 p-8 rounded-lg border-2 border-orange-300 shadow-sm">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-semibold text-[#441306]">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-2.5 rounded-lg border-2 border-orange-200 focus:border-orange-500 bg-white outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-semibold text-[#441306]">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="w-full p-2.5 rounded-lg border-2 border-orange-200 focus:border-orange-500 bg-white outline-none transition-all"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="font-semibold text-[#441306]">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="How can we help?"
                className="w-full p-2.5 rounded-lg border-2 border-orange-200 focus:border-orange-500 bg-white outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full py-3 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600 hover:scale-[1.02] transition-all cursor-pointer mt-2"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-orange-100 p-6 rounded-lg border-2 border-orange-300 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-[#d97d4d]">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-lg">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm opacity-80">support@bitlink.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm opacity-80">Global / Open Source</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-100 p-6 rounded-lg border-2 border-green-300 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-green-800">Developer Support</h3>
            <p className="text-sm leading-relaxed mb-4">
              Found a bug or have a feature request? Check out our GitHub repository.
            </p>
            <a
              href="/github"
              className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-all text-sm"
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact
