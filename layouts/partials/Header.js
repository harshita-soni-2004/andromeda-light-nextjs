"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

const navItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Blog", url: "/posts" },
  { name: "Pages", url: "/terms-policy" },
  { name: "Contact", url: "/contact" },
];

export default function DarkHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-lg shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-white font-bold text-xl tracking-widest">
          <div className="h-5 w-5 rounded-full bg-gradient-to-br from-orange-500 to-yellow-300 animate-pulse"></div>
          <span className="text-orange-400">TFS</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden space-x-8 lg:flex text-sm text-white tracking-wide uppercase font-medium">
          {navItems.map((item) => (
            <li key={item.url}>
              <Link
                href={item.url}
                className={`relative transition duration-300 hover:text-orange-400 ${
                  pathname === item.url ? "text-orange-400" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/mockup"
          className="hidden lg:inline-block rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-2 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          Get in touch
        </Link>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden text-white text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <CgClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="bg-black text-white px-6 py-4 space-y-3 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={`block font-medium transition hover:text-orange-400 ${
                pathname === item.url ? "text-orange-400" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/"
            className="inline-block mt-3 rounded bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-2 font-bold text-white shadow-lg"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
