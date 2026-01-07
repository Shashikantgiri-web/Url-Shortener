import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <>
      <div className="w-[99%] h-auto flex flex-col justify-start items-center gap-4">
        <section className="w-full h-[50vh] grid grid-cols-2  bg-orange-200">
          <div className="w-[99%] h-full flex flex-col justify-center items-center">
            <p className={`text-3xl font-bold ${poppins.className}`}>The best URL shortener in Market</p>
            <p>We are the best straightforward URL shortener in the world</p>
          </div>
          <div className="w-[99%] h-full flex justify-center items-center relative">
            <Image src="/vector.jpg" alt="URL Shortener" fill={true} className="mix-blend-darken" />
          </div>
        </section>
      </div>
    </>
  );
}
