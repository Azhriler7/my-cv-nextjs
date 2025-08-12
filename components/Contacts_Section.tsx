import React from "react";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <section id="contacts" className="py-20 bg-gray-600 text-white">
      <div className="container mx-auto px-4 md:px-8 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Kolom Kiri: Informasi Kontak */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Hubungi Saya</h2>
            <p className="text-lg mb-8 max-w-lg">
              Saya sangat senang untuk berdiskusi tentang proyek Anda berikutnya. Silakan hubungi saya melalui detail berikut atau kirimkan pesan langsung.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <span className="text-2xl">📧</span>
                <p className="text-lg">azhriler.lintang@example.com</p>
              </div>
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <span className="text-2xl">📞</span>
                <p className="text-lg">+62 812-3456-7890</p>
              </div>
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <span className="text-2xl">📍</span>
                <p className="text-lg">Jakarta, Indonesia</p>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start space-x-4 mt-8">
              <Link
                href="https://www.linkedin.com/in/azhriler-lintang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-300 transition-colors"
              >
                <span className="text-3xl">💼</span>
              </Link>
              <Link
                href="https://github.com/azhriler-lintang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-300 transition-colors"
              >
                <span className="text-3xl">🐙</span>
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Kontak (Visual) */}
          <div className="bg-white p-8 rounded-lg shadow-xl text-black">
            <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Nama Anda" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" 
              />
              <input 
                type="email" 
                placeholder="Alamat Email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600" 
              />
              <textarea 
                placeholder="Pesan Anda" 
                rows={4} 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;