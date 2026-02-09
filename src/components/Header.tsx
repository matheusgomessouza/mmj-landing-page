import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <i className="fas fa-wallet text-[#2D3C25] text-2xl mr-2"></i>
              <span className="text-xl font-bold text-[#2D3C25]">
                My Money Journey
              </span>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {['Features', 'Pricing', 'Resources', 'About'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-900 hover:text-emerald-600 px-3 py-2 text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <a
              href="https://mmjourney.vercel.app/"
              className="text-gray-900 hover:text-emerald-600 px-3 py-2 text-sm font-medium hidden md:block"
            >
              Log in
            </a>
            <a
              href="https://mmjourney.vercel.app/signup"
              className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white gradient-bg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Started
            </a>
            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open mobile menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            {['Features', 'Pricing', 'Resources', 'About'].map((item) => (
              <Link
                key={item}
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50"
              >
                {item}
              </Link>
            ))}
            <a
              href="https://mmjourney.vercel.app/"
              className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50"
            >
              Log in
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
