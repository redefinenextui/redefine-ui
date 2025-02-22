
// app/editor/page.tsx

import CodeEditor from "@/common/CodeEditor";
import { componentVariants } from "@/data/componentsCode";

export default function EditorPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  const variantName = searchParams.variant || "default-variant"; // Fallback

  const allVariants = Object.values(componentVariants).flat(); // Convert object values into a single array

  const filterCode = allVariants.filter(
    (code) => code?.path === variantName
  );

  return <CodeEditor code={filterCode[0]} />
}
