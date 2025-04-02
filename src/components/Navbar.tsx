"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import {
  useCategories,
  useCities,
  useFormats,
} from "@/hooks/queries/useEvents";
import { Label } from "@/components/ui/label";
import { SelectNative } from "@/components/ui/select-native";
import { useRouter } from "next/navigation";
import { useId } from "react";

const SelectComponent = ({
  items,
  label,
  onSelect,
}: {
  items?: { id: number; name: string }[];
  label: string;
  onSelect: (id: number) => void;
}) => {
  const id = useId();

  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id}></Label>
      <SelectNative
        id={id}
        onChange={(e) => {
          const selectedId = Number(e.target.value);
          onSelect(selectedId);
        }}
      >
        <option value="">{label}</option>
        {items?.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </SelectNative>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: cities } = useCities();
  const { data: categories } = useCategories();
  const { data: formats } = useFormats();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 mb-12 z-40 transition-all duration-300 ${
        isScrolled ? "bg-black/5 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20 p-2">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-black/70 transform-stroke text-3xl font-bold"
          >
            Even<span className="text-emerald-400">tiy</span>
          </Link>

          {/* Menu */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/" className="hover:text-emerald-500 rounded-lg">
              Ana Sayfa
            </Link>
            <SelectComponent
              items={cities}
              label="Şehir Seçin"
              onSelect={(id) => router.push(`/city?cityId=${id}`)}
            />
            <SelectComponent
              items={categories}
              label="Kategori Seçin"
              onSelect={(id) => router.push(`/category?categoryId=${id}`)}
            />
            <SelectComponent
              items={formats}
              label="Format Seçin"
              onSelect={(id) => router.push(`/format?formatId=${id}`)}
            />
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/login"
              className="flex-shrink-0 border-green-400/50 border-2 border-b-4 active:border-b-2 rounded-lg px-4 py-2 font-medium hover:text-primary-700"
            >
              Giriş Yap
            </Link>
            <Link
              href="/register"
              className="flex-shrink-0 border-green-400/50 border-2 border-b-4 active:border-b-2 rounded-lg px-4 py-2 font-medium hover:text-primary-700"
            >
              Kayıt Ol
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary-600 hover:bg-gray-100"
          >
            <AlignJustify />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4">
          <div className="bg-slate-200/10 flex flex-col items-start p-2 py-3 space-y-3 rounded-lg mt-5">
            <Link href="/" className="hover:text-emerald-500">
              Ana Sayfa
            </Link>
            <SelectComponent
              items={cities}
              label="Şehir Seçin"
              onSelect={(id) => router.push(`/city?cityId=${id}`)}
            />
            <SelectComponent
              items={categories}
              label="Kategori Seçin"
              onSelect={(id) => router.push(`/category?categoryId=${id}`)}
            />
            <SelectComponent
              items={formats}
              label="Format Seçin"
              onSelect={(id) => router.push(`/format?formatId=${id}`)}
            />
            <Link
              href="/login"
              className="flex-shrink-0 mt-4 bg-black text-white hover:bg-emerald-500 transition-all rounded-lg px-4 py-2 font-medium"
            >
              Giriş Yap
            </Link>
            <Link
              href="/register"
              className="flex-shrink-0 bg-black text-white hover:bg-emerald-500 transition-all rounded-lg px-4 py-2 font-medium"
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
