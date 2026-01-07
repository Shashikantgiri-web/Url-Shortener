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
      <div className="main-page">
        <section className="w-[99%] h-[50vh] grid grid-cols-2  bg-orange-200">
          <div className="w-[50%] h-full flex flex-row justify-center items-center">
            <p className="text-2xl font-bold">The best URL shortener in Market</p>
            <p>We are the best straightforward URL shortener in the world</p>
          </div>
          <div className="w-[50%] h-full flex justify-center items-center relative">
            <Image src="/vector.jpg" alt="URL Shortener" fill={true} className="mix-blend-darken" />
          </div>
        </section>
      </div>
    </>
  );
}
