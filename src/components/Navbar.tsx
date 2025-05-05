import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Joie d'Enfance</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="hover:text-blue-300 transition-colors font-medium"
            >
              About Us
            </a>
            <a
              href="#impact"
              className="hover:text-blue-300 transition-colors font-medium"
            >
              Our Impact
            </a>
            <a
              href="#support"
              className="hover:text-blue-300 transition-colors font-medium"
            >
              Support Us
            </a>
            <a
              href="#contact"
              className="hover:text-blue-300 transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
