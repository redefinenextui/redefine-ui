// app/editor/page.tsx

"use client"

import CodeEditor from "@/common/CodeEditor";
import { componentVariants } from "@/data/componentsCode";

export default function EditorPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  // Check if the component is rendered on the client
  if (typeof window === "undefined") return null;
  const variantName = searchParams?.variant || "default-variant";

  // Convert object values into a single array
  const allVariants = Object.values(componentVariants).flat();

  // Filter to find the code corresponding to the variantName
  const filterCode = allVariants.filter((code) => code?.path === variantName);

  // Check if filterCode has a valid entry
  if (filterCode.length === 0) {
    return <div>No code found for the selected variant.</div>;
  }

  return <CodeEditor code={filterCode[0]} />;
}
