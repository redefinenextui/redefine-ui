"use client";

import { IComponentCode } from "@/types/IComponent";
import { SandpackCodeEditor, SandpackLayout, SandpackPreview, SandpackProvider } from "@codesandbox/sandpack-react";
import SandpackFileExplorer from '@rainetian/sandpack-file-explorer';
import { useEffect, useState } from "react";
import * as themes from "@codesandbox/sandpack-themes"; // Import all themes
import useAddDependency from "@/hooks/useAddDependency";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

const CodeEditor = ({ code }: IComponentCode) => {
  const commonFiles: Record<string, string> = {
    "/src/lib/cn.ts": `
      import { ClassValue, clsx } from "clsx";
      import { twMerge } from "tailwind-merge";
      export function cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs));
      }
    `,
  };

  const defaultDependencies: Record<string, string> = {
    "framer-motion": "latest",
    clsx: "latest",
    "tailwind-merge": "latest",
  };

  const { mergedDependencies, addDependency, loading, error } = useAddDependency(defaultDependencies);
  const screenHeight = "calc(100vh - 66.5px)"


  const files = {
    active: true,
    hidden: false,
    ...commonFiles,
    ...code?.code?.reduce((acc: Record<string, { code: string; active: boolean }>, file: Record<string, string>) => {
      Object.entries(file).forEach(([filePath, fileContent]) => {
        acc[filePath] = { code: fileContent, active: filePath === "/App.tsx" }; // Highlight App.tsx by default
      });
      return acc;
    }, {}),
  };

  const [dependency, setDependency] = useState<string>("");
  const [selectedTheme, setSelectedTheme] = useState<string>("amethyst"); // Default theme
  const [theme, setTheme] = useState<any>(themes.amethyst); // Set default theme object
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false); // Manage dropdown open state


  useEffect(() => {
    setTheme(themes[selectedTheme]); // Update theme based on selection
  }, [selectedTheme]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-2 py-3 bg-black border-b border-gray-700">
        <h3 className="font-semibold text-2xl text-white">Redefine UI</h3>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-slate-900 text-white rounded-md px-4 py-2 focus:outline-none"
          >
            {selectedTheme}
          </button>
          <AnimatePresence>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute right-2 h-[300px] z-10 bg-white text-black rounded-md shadow-lg mt-1 px-5 overflow-y-auto"
              >
                {Object.keys(themes).map((themeKey) => (
                  <motion.li
                    key={themeKey}
                    whileHover={{ scale: 1.05 }} // Scale effect on hover
                    className="px-4 py-2 cursor-pointer hover:bg-slate-200 rounded-md"
                    onClick={() => {
                      setSelectedTheme(themeKey);
                      setDropdownOpen(false); // Close dropdown on selection
                    }}
                  >
                    {themeKey}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
      <SandpackProvider
        template='react-ts'
        customSetup={{
          dependencies: mergedDependencies,
        }}
        theme={theme}
        options={{
          externalResources: ["https://cdn.tailwindcss.com"],
        }}
        files={files}
      >
        <SandpackLayout>
          <div className="relative">
            <SandpackFileExplorer style={{ height: screenHeight, width: 200 }} />
            <div className="absolute bottom-5 w-full px-2">
              <hr className="mb-3 border border-slate-500" />
              <input
                value={dependency}
                onChange={(e) => setDependency(e.target.value)}
                className="px-2 outline-none py-2 rounded-md border w-full mb-2 border-slate-500"
                placeholder="Add dependencies..."
              />
              <button
                onClick={() => addDependency(dependency)}
                className="px-4 py-2 bg-sky-500 rounded-md text-white w-full"
                disabled={loading}
              >
                {loading ? "Loading..." : "Add"}
              </button>
              {error && <div className="text-red-500">{error}</div>}
            </div>
          </div>
          <SandpackCodeEditor showLineNumbers showInlineErrors style={{ height: screenHeight }} showTabs closableTabs />
          <SandpackPreview style={{ height: screenHeight }} />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default CodeEditor;
