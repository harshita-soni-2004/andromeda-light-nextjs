"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";

const navItems = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Blog", url: "/posts" },
  { name: "Projects", url: "/projects" },
  { name: "Terms & Condition", url: "/terms-policy" },
  { name: "Contact", url: "/contact" },
];

export default function DarkHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-lg shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          aria-label="TFS Techno Home"
          className="flex items-center space-x-2 font-bold tracking-widest text-white text-lg md:text-xl"
        >
          {/* If you prefer next/image, see commented block below */}

          <Image
            src="/images/logo1.png"
            alt="TFS Techno Logo"
            width={300} // Approx width in px
            height={100} // Approx height in px
            className="w-5/4 h-14 sm:h-20 md:h-24 lg:h-32 xl:h-36 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-8 text-sm font-medium uppercase tracking-wide text-white">
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
          href="/contact"
          className="hidden lg:inline-block rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-2 text-sm font-bold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          Get in touch
        </Link>

        {/* Mobile Menu Icon */}
        <div className="text-2xl text-white lg:hidden">
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CgClose /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="space-y-3 bg-black px-6 py-4 text-white lg:hidden">
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
            href="/contact"
            className="mt-3 inline-block rounded bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-2 font-bold text-white shadow-lg"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
