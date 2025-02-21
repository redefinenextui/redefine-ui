import { ReactNode } from "react";

export interface IComponentCode {
  description?: string; // Description of the component
  tags?: string[]; // Tags associated with the component
  path: string; // Path for routing
  code?: { [filePath: string]: string }[]; // Array of file objects, keeping only App.tsx
  name: string,
  dependencies: []
}

export interface IComponentPreview {
  name: string,
  path: string,
  code: ReactNode
}
