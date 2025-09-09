import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Christian Alexander</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#home" className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
