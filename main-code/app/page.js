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
    <div className={`w-[99%] min-h-[140vh] max-h-[230vh] flex flex-col justify-center items-center gap-2.5 py-0.5 ${poppins.className}`}>
      {/* Hero Section */}
      <section className="w-full min-h-[70vh] max-h-[110vh] flex flex-col-reverse md:flex-row bg-orange-200 rounded-2xl overflow-hidden shadow-xl group transition-all duration-500 hover:shadow-2xl">
        <div className="w-full md:w-[50%] md:h-[99%] h-[50%] flex flex-col justify-center items-center gap-6">
          <h1 className="w-[80%] text-3xl font-extrabold text-[#441306] leading-tight text-center md:text-left">
            The World's Most <span className="text-orange-600">Straightforward</span> URL Shortener
          </h1>
          <p className="text-lg md:text-xl text-[#5a2e1d] font-medium text-center md:text-left max-w-lg">
            Say goodbye to tracking, logins, and complicated dashboards. Simple, fast, and private link shortening for everyone.
          </p>
          <div className="flex flex-row gap-4 w-full justify-center items-center">
            <Link href="/generate" className="px-8 py-3 bg-orange-500 text-white font-bold rounded-xl shadow-lg hover:bg-orange-600 hover:scale-105 transition-all text-center">
              Try now
            </Link>
            <Link href="https://github.com/Shashikantgiri-web/Url-Shortener" className="px-8 py-3 bg-green-500 text-white font-bold rounded-xl shadow-lg hover:bg-green-600 hover:scale-105 transition-all text-center">
              Github
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[50%] md:h-[99%] h-[50%] flex justify-center items-center relative overflow-hidden">
          <Image
            src="/vector.jpg"
            alt="URL Shortener Illustration"
            fill={true}
            className="object-cover mix-blend-darken transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-[99%] grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {[
          { title: "Privacy First", desc: "We don't track you. Period. Your data is your own, always.", icon: "🛡️" },
          { title: "No Registration", desc: "Start shortening immediately. No email, no password, no hassle.", icon: "⚡" },
          { title: "Simple Analytics", desc: "Get straight to the point with clean, easy-to-read links.", icon: "📈" }
        ].map((feature, i) => (
          <div key={i} className="bg-orange-100/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-all hover:-translate-y-2 text-center flex flex-col items-center gap-3">
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="text-xl font-bold text-[#441306]">{feature.title}</h3>
            <p className="text-sm text-[#5a2e1d] leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="w-[99%] h-[30vh] bg-white/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center gap-6 shadow-inner">
        <h2 className="text-2xl font-bold text-[#441306]">Built for Speed & Privacy</h2>
        <p className="max-w-xl text-center text-[#5a2e1d] leading-relaxed">
          Most URL shorteners today treat you like the product. We've built Bitlink as a tool you can trust. No tracking cookies, no data selling, and no cluttered interface. Just the links you need, when you need them.
        </p>
      </section>
    </div>
  );
}

