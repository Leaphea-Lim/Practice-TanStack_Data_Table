'use client'

import Link from "next/link";
import React, { useState } from "react";
import { navLink } from "./menu";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full z-50 shadow-sm dark:shadow-none dark:bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0 flex items-center">
                <span 
                  id="logo_name"
                  className="ml-2 text-xl font-bold text-gray-900 dark:text-white font-michmora"
                >
                  A D M I N
                </span>
              </a>
              <div className="hidden md:ml-10 md:flex md:space-x-10">
                {navLink.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    className={`${
                      pathname === item.path ? "text-blue-300" : "text-gray-900 dark:text-white"
                    } hover:text-blue-500 transition`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-900 dark:text-white hover:text-blue-100 px-3 py-2 rounded-md text-sm font-medium transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-blue-100 border-1 hover:border-gray-900 text-black px-4 py-2 rounded-md text-sm font-medium transition"
              >
                Register
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-white hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 bg-opacity-95 backdrop-blur-sm">
            {navLink.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`${
                  pathname === item.path 
                    ? "text-blue-500 bg-blue-50 dark:bg-blue-900" 
                    : "text-gray-900 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-700"
                } block px-3 py-2 rounded-md text-base font-medium transition`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-3 px-3">
                <Link
                  href="/login"
                  className="block w-full text-center text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="block w-full text-center bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}