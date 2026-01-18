import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full bg-[#d97d4d] text-[#441306] py-10 px-6 mt-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Brand Section */}
                <div className="flex flex-col gap-4">
                    <Link href="/" className="text-3xl font-black italic hover:opacity-80 transition-opacity">
                        Bitlink
                    </Link>
                    <p className="text-sm font-medium leading-relaxed opacity-90">
                        The world's most straightforward URL shortener. No tracking, no hassle, just simple links.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <Link href="https://github.com/Shashikantgiri-web/Url-Shortener" className="hover:scale-110 transition-transform text-2xl" target="_blank">
                            🌐
                        </Link>
                        <Link href="mailto:support@bitlink.com" className="hover:scale-110 transition-transform text-2xl">
                            ✉️
                        </Link>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold uppercase tracking-wider">Quick Links</h3>
                    <ul className="flex flex-col gap-2 font-semibold">
                        <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link href="/generate" className="hover:text-white transition-colors">Shorten URL</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Resources Section */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold uppercase tracking-wider">Resources</h3>
                    <ul className="flex flex-col gap-2 font-semibold">
                        <li><Link href="https://github.com/Shashikantgiri-web/Url-Shortener" className="hover:text-white transition-colors" target="_blank">Github Repository</Link></li>
                        <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 pt-6 border-t border-[#441306]/20 text-center">
                <p className="text-sm font-bold opacity-70">
                    © {new Date().getFullYear()} Bitlink. Built with ❤️ for the open web.
                </p>
            </div>
        </footer>
    )
}

export default Footer
