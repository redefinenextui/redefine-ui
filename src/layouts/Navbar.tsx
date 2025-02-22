
"use client";
import Link from "next/link";
import { useState } from "react";
import { IconBrandGithub, IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import SearchBox from "@/common/SearchBox";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure theme is loaded before rendering
  useState(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left: Website Name */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Redefine UI
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              About
            </Link>
            <Link href="/services" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
              Contact
            </Link>
          </div>

          {/* Right: Search Box, GitHub, Theme Toggle */}
          <div className="flex items-center space-x-4">
            <SearchBox />

            {/* GitHub Icon */}
            <Link href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
              <IconBrandGithub className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer" size={24} />
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
            >
              {mounted && theme === "dark" ? <IconSun size={20} className="text-yellow-400" /> : <IconMoon size={20} className="text-gray-900" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
