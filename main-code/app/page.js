import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from 'next/link'

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <>
      <div className="w-[99%] h-auto flex flex-col justify-start items-center gap-4">
        <section className="w-full h-[50vh] grid grid-cols-2 bg-orange-200">
          <div className="w-[99%] h-full flex flex-col justify-center items-center gap-3">
            <p className={`text-3xl font-bold w-[70%] ${poppins.className}`}>The best URL shortener in Market</p>
            <p className="w-[70%] flex justify-center items-center">We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener</p>
            <div className="w-[70%] h-12.5 flex flex-row justify-center items-center gap-4">
               <button className='w-[40%] h-[90%] rounded-[10px] bg-orange-500 hover:text-white hover:bg-orange-600 hover:cursor-pointer'><Link href="/generate">Try now</Link></button>
               <button className='w-[40%] h-[90%] rounded-[10px] bg-green-400 hover:bg-green-500 hover:text-white hover:cursor-pointer'><Link href="/github">Github</Link></button>
            </div>
          </div>
          <div className="w-[99%] h-full flex justify-center items-center relative">
            <Image src="/vector.jpg" alt="URL Shortener" fill={true} className="mix-blend-darken" />
          </div>
        </section>
      </div>
    </>
  );
}
