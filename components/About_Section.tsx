import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-white text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Tentang Saya
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* Kolom Kiri: Gambar */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/formal 3x4.jpg" // Pastikan ini path ke gambar Anda
              alt="Azhriler Lintang"
              fill
              className="object-cover object-center"
            />
          </div>
          
          {/* Kolom Kanan: Deskripsi */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Azhriler Lintang
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Saya adalah seorang pengembang web dan mobile yang bersemangat dalam menciptakan solusi digital yang efisien dan elegan. Berbasis di Indonesia, saya memiliki keahlian dalam ekosistem JavaScript, khususnya dengan framework modern seperti React.js dan Next.js.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Dengan pengalaman lebih dari 3 tahun, saya fokus pada pengembangan antarmuka pengguna yang intuitif, performa yang optimal, dan pengalaman pengguna yang lancar. Saya percaya pada kode yang bersih, modular, dan dapat diskalakan.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Selain pengkodean, saya gemar mempelajari teknologi baru dan berkontribusi pada proyek sumber terbuka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;