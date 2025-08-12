import Image from "next/image";
import React from "react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return(
    <section id="hero" className="relative h-screen bg-white text-foreground overflow-hidden">
      {/* elemen bg */}
      <div className="absolute left-0 bottom-0 w-2/5 h-4/5 bg-red-100 opacity-100 z-0"></div>
      {/* elemen foto */}
      <div className="absolute left-[30%] bottom-0 w-1/4 h-3/4 z-10">
      <Image
      src="/formal 3x4.jpg"
      alt="Profile Picture"
      fill
      className="object-cover"
      />
      </div>

       <div className="container mx-auto h-full flex flex-col justify-center relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full px-4 md:px-0">
          {/* Ruang kosong untuk elemen visual */}
          <div className="hidden md:block"></div>
          
          <div className="md:col-span-1 md:p-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Azhriler Lintang
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Web & Mobile Developer
            </p>
            <p className="text-base md:text-lg mb-8 max-w-lg">
              Sebagai seorang mahasiswa, saya menggabungkan keahlian dalam
              React.js dan React Native untuk menciptakan solusi yang mulus di
              web dan mobile.
            </p>
            <Link
              href="#about"
              className="inline-flex items-center text-blue-500 font-semibold hover:text-blue-600 transition-colors"
            >
              Tentang Saya <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
