export interface IComponent {
  description?: string; // Description of the component
  tags?: string[]; // Tags associated with the component
  path: string; // Path for routing
  code?: { [filePath: string]: string }[]; // Array of file objects, keeping only App.tsx
  name: string,
  dependencies: []
}

