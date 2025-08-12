"use client";

import React, { useState } from "react";
import Image from "next/image";

// Data dummy untuk portofolio
const webProjects = [
  {
    title: "Proyek UI Web E-commerce",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/ui-web.png", // Ganti dengan path gambar proyek web Anda
    tech: ["HTML", "CSS", "React"],
  },
  {
    title: "Proyek Web Portofolio",
    description: "Deskripsi singkat proyek kedua.",
    image: "/ui-web-2.png", // Ganti dengan path gambar proyek web Anda
    tech: ["Next.js", "Tailwind CSS"],
  },
  // Tambahkan proyek web lainnya di sini
];

const mobileProjects = [
  {
    title: "Aplikasi UI Mobile",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/ui-mobile.png", // Ganti dengan path gambar proyek mobile Anda
    tech: ["React Native", "Expo"],
  },
  {
    title: "Proyek Mobile Chat App",
    description: "Deskripsi singkat proyek mobile kedua.",
    image: "/ui-mobile-2.png", // Ganti dengan path gambar proyek mobile Anda
    tech: ["React Native", "Firebase"],
  },
  // Tambahkan proyek mobile lainnya di sini
];

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="flex-none w-full md:w-1/2 p-4">
    <div className="bg-yellow-100 p-8 rounded-lg shadow-md h-full flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
}

interface PortfolioCarouselProps {
  projects: Project[];
  title: string;
}

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({
  projects,
  title,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-4 text-center">{title}</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Konten Kiri (Kartu) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <ProjectCard project={projects[currentIndex]} />
        </div>

        {/* Konten Kanan (Gambar dan Navigasi) */}
        <div className="relative w-full md:w-1/2 h-96 flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              fill
              className="object-contain"
            />
          </div>

          {/* Tombol Navigasi */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl text-gray-500 hover:text-black transition-colors"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-2xl text-gray-500 hover:text-black transition-colors"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-100 text-foreground">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section untuk Portofolio Web */}
        <PortfolioCarousel projects={webProjects} title="Portofolio Web" />
        
        <hr className="my-16 border-gray-300" />
        
        {/* Section untuk Portofolio Mobile */}
        <PortfolioCarousel projects={mobileProjects} title="Portofolio Mobile" />
      </div>
    </section>
  );
};

export default PortfolioSection;