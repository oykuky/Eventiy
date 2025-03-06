"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Türler", href: "/events/categories" },
    { name: "İller", href: "/events/cities" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={`sticky z-40 top-0 transition-all duration-300 ${
        isScrolled ? "bg-black/5 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 p-2">
          {/* Logo */}
          <div className="flex items-center px-3 cursor-pointer">
            <Link
              href="/"
              className="font-display text-black/80 text-2xl font-bold"
            >
              Eventiy
            </Link>
          </div>

          {/* Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((i, index) => (
              <Link
                className="active:bg-slate-200 hover:text-emerald-500 p-1.5 rounded-lg"
                key={index}
                href={i.href}
              >
                {i.name}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
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
        <div className="md:hidden px-4">
          <div className="bg-slate-200/10 flex flex-col items-start p-2 py-3 space-y-1 gap-3 rounded-lg mt-5">
            {navItems.map((i, index) => (
              <Link
                className="hover:text-emerald-500"
                key={index}
                href={i.href}
              >
                {i.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="mt-4 bg-black text-white hover:bg-emerald-500 transation-all duration-300 ease-in rounded-lg text-primary-600 hover:text-primary-700 px-4 py-2 font-medium"
            >
              Giriş Yap
            </Link>
            <Link
              href="/register"
              className="bg-black text-white hover:bg-emerald-500 transation-all duration-300 ease-in rounded-lg text-primary-600 hover:text-primary-700 px-4 py-2 font-medium"
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
