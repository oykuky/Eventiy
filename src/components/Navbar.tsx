"use client";
import { useState } from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Türler", href: "/events/categories" },
    { name: "İller", href: "/events/cities" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 bg-white/70 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 p-2">
          {/* Logo */}
          <div className="flex items-center px-5 shadow-green-300 bg-green-100/5 hover:bg-green-100 transation-all duration-300 ease-in shadow-lg rounded-xl cursor-pointer">
              <Link
                href="/"
                className="font-display text-black/80 text-2xl font-bold text-primary-600"
              >
                Eventiy
              </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((i, index) => (
              <Link className="active:bg-amber-200/30 p-1.5 rounded-lg" key={index} href={i.href}>
                {i.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="border-green-400/50 border-2 border-b-4 active:border-b-2 rounded-lg text-primary-600 hover:text-primary-700 px-4 py-2 font-medium"
              >
                Giriş Yap
              </Link>
              <Link
                href="/register"
                className="border-green-400/50 border-2 border-b-4 active:border-b-2 rounded-lg text-primary-600 hover:text-primary-700 px-4 py-2 font-medium"
              >
                Kayıt Ol
              </Link>
            </div>
          </div>

          {/* Mobile menu*/}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100 focus:outline-none"
            >
              <AlignJustify />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center p-2 py-3 space-y-1">
            {navItems.map((i, index) => (
              <Link key={index} href={i.href}>
                {i.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block px-3 py-2 text-primary-600 hover:text-primary-600"
            >
              Giriş Yap
            </Link>
            <Link
              href="/register"
              className="block px-3 py-2 text-primary-600 hover:text-primary-700"
            >
              Kayıt Ol
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
