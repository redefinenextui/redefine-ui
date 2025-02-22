
import Link from "next/link";
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Left: Website Name + Description */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Redefine UI</h2>
            <p className="text-sm mt-2">
              Creating modern and beautiful UI components with Next.js and TailwindCSS.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-col space-y-2 text-sm">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <Link href="/about" className="hover:text-blue-500">About</Link>
            <Link href="/services" className="hover:text-blue-500">Services</Link>
            <Link href="/contact" className="hover:text-blue-500">Contact</Link>
          </div>

          {/* Right: Social Media Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <Link href="https://github.com/your-repo" target="_blank">
                <IconBrandGithub size={24} className="hover:text-black dark:hover:text-white transition duration-300 cursor-pointer" />
              </Link>
              <Link href="https://twitter.com/your-profile" target="_blank">
                <IconBrandTwitter size={24} className="hover:text-blue-500 transition duration-300 cursor-pointer" />
              </Link>
              <Link href="https://linkedin.com/in/your-profile" target="_blank">
                <IconBrandLinkedin size={24} className="hover:text-blue-700 transition duration-300 cursor-pointer" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom: Copyright Notice */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-6 pt-4 text-center text-sm">
          © {new Date().getFullYear()} Redefine UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
