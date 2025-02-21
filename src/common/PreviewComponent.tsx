import { Sandpack } from "@codesandbox/sandpack-react";

const PreviewComponent = ({ variant, }) => {

  // Common files to include in every component
  const commonFiles = {
    "/src/lib/cn.ts": `
      import { ClassValue, clsx } from "clsx";
      import { twMerge } from "tailwind-merge";
      export function cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs));
      }
    `
  };
  // Default dependencies
  const defaultDependencies = {
    "framer-motion": "latest",
    clsx: "latest",
    "tailwind-merge": "latest",
  };

  // Merge component variant dependencies with default dependencies
  const mergedDependencies = {
    ...defaultDependencies,
    ...(variant.dependencies || {}).reduce((acc, dep) => ({
      ...acc,
      ...dep,
    }), {}),
  };

  return (
    <Sandpack
      template="react-ts"
      options={{
        externalResources: [
          "https://cdn.tailwindcss.com",
        ],
      }}
      customSetup={{
        dependencies: mergedDependencies
      }}
      files={{
        ...commonFiles, // Include common files
        ...variant?.code?.reduce((acc: any, file: any) => {
          Object.entries(file).forEach(([filePath, fileContent]) => {
            acc[filePath] = fileContent;
          });
          return acc;
        }, {}),
      }}
    />

  )
}

export default PreviewComponent;
