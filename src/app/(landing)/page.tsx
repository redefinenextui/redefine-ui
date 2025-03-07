// /app/page.tsx (Home Page)

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative h-screen bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center text-center px-6 md:px-12">
      {/* Hero Content */}
      <div className="text-white">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Craft Beautiful UIs with Ease
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto">
          A collection of high-quality, customizable components to help you
          design stunning interfaces quickly.
        </p>

        {/* "Show Components" Button */}
        <Link href={"/components"}>
          <button className="bg-gradient-to-r from-cyan-500 to-teal-400 text-white font-semibold py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            Explore Components
          </button>
        </Link>
      </div>
    </div>
  );
}
