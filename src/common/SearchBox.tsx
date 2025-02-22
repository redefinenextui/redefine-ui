
"use client";
import { useState } from "react";

export default function SearchBox() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="px-3 py-1 border rounded-md dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
}
