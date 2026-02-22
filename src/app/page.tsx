import { Camera } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col font-sans selection:bg-black selection:text-white">
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-20 md:py-32 lg:py-40 flex flex-col justify-center">

        {/* Hero Section */}
        <section className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium tracking-tight leading-tight max-w-4xl animate-fade-in-up opacity-0">
            I’m Mert. A full-time <span className="font-bold text-black">Product Designer</span> based in Istanbul, part-time <span className="font-medium text-zinc-500">Maker & Photographer.</span>
          </h1>
        </section>

        {/* Bento Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1: Photography */}
          <Link
            href="https://toker.myportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-3xl border border-zinc-200 bg-white bg-gradient-to-b from-white to-zinc-50 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/moments.jpg')] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
            <div className="relative flex h-full flex-col justify-between min-h-[240px] z-10">
              <div className="text-zinc-400 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 origin-top-left">
                <Camera className="h-8 w-8 stroke-[1.5]" />
              </div>
              <div className="mt-8 transition-transform duration-500 group-hover:translate-x-1">
                <h2 className="text-xl font-medium text-black group-hover:text-white tracking-tight transition-colors">Moments & Frames</h2>
                <p className="mt-2 text-zinc-500 group-hover:text-zinc-200 text-sm md:text-base leading-relaxed transition-colors">Exploring light and perspective.</p>
              </div>
            </div>
          </Link>

          {/* Card 2: The Project */}
          <Link
            href="https://mezar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-black"
          >
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/mezar.jpg')] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-500 pointer-events-none z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="relative flex h-full flex-col justify-between min-h-[240px] z-10">
              <div className="text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 origin-top-left">🪦</div>
              <div className="mt-8 transition-transform duration-500 group-hover:translate-x-1">
                <h2 className="text-xl font-medium text-black group-hover:text-white tracking-tight transition-colors">Silikon Vadi Mezarlığı</h2>
                <p className="mt-2 text-zinc-500 group-hover:text-zinc-200 text-sm md:text-base leading-relaxed transition-colors">Günün mevtaları: Vadesi dolan teknolojiler.</p>
              </div>
            </div>
          </Link>

          {/* Card 3: The Teaser */}
          <Link
            href="https://www.youtube.com/watch?v=vuJt2sGdkdU&list=RDvuJt2sGdkdU&start_radio=1&t=2096s"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-3xl border-2 border-dashed border-zinc-200 bg-white p-8 opacity-70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:border-black hover:opacity-100 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black min-h-[240px]"
          >
            <div className="relative flex flex-col justify-end h-full z-10">
              <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center mb-auto group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-500">
                <div className="w-2 h-2 rounded-full bg-zinc-400 group-hover:bg-white group-hover:animate-pulse"></div>
              </div>
              <div className="mt-8 transition-transform duration-500 group-hover:translate-x-1">
                <h2 className="text-xl font-medium text-black group-hover:text-white tracking-tight transition-colors">Working on something new...</h2>
                <p className="mt-2 text-zinc-500 group-hover:text-zinc-400 text-sm md:text-base leading-relaxed transition-colors">Coming soon to the maker scene.</p>
              </div>
            </div>
          </Link>

        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center mt-auto">
        <p className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
          © 2026 MERT TOKER / BUILT AS A MAKER
        </p>
      </footer>
    </div>
  );
}
