import React from "react";

const NavBar: React.FC = () => {
  return(
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md text-gray-900 p-4 flex justify-between items-center shadow-lg border-b border-gray-200">
      <div className="text-xl font-extrabold tracking-wide">
        <a href="#hero" className="font-extrabold text-blue-600 hover:text-blue-800 transition-colors">Azhriler</a>
      </div>
      <ul className="flex ml-auto space-x-2 pr-2">
        <li>
          <a
            href="#hero"
            className="px-4 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Hero
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="px-4 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="px-4 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="px-4 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            className="px-4 py-2 rounded-md font-medium transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
