import {
  bounchButtonCode,
  flipCardCode,
  hoverCardCode,
  outlineButtonCode,
  shadowButtonCode,
  simpleAccordionCode,
  multiLevelAccordionCode,
} from "@/components";
import { IComponent } from "@/types/IComponent";

export const componentVariants: Record<
  string,
  IComponent[]
> = {
  buttons: [
    {
      name: "Bounce Button",
      path: "bounce-button",
      code: [{ "/App.tsx": bounchButtonCode }],
      description: "A button that bounces when hovered.",
      tags: ["button", "animation"],
      dependencies: [], // Initially empty
    },
    {
      name: "Outline Button",
      path: "outline-button",
      code: [{ "/App.tsx": outlineButtonCode }],
      description: "A button with an outline style.",
      tags: ["button", "outline"],
      dependencies: [], // Initially empty
    },
    {
      name: "Shadow Button",
      path: "shadow-button",
      code: [{ "/App.tsx": shadowButtonCode }],
      description: "A button with a shadow effect.",
      tags: ["button", "shadow"],
      dependencies: [], // Initially empty
    },
  ],
  accordion: [
    {
      name: "Simple Accordion",
      path: "simple-accordion",
      code: [{ "/App.tsx": simpleAccordionCode }],
      description: "A simple accordion component for displaying collapsible content.",
      tags: ["accordion", "UI"],
      dependencies: [], // Initially empty
    },
    {
      name: "Multi-Level Accordion",
      path: "multi-level-accordion",
      code: [{ "/App.tsx": multiLevelAccordionCode }],
      description: "An accordion component that supports multiple levels.",
      tags: ["accordion", "nested"],
      dependencies: [], // Initially empty
    },
  ],
  cards: [
    {
      name: "Hover Card",
      path: "hover-card",
      code: [{ "/App.tsx": hoverCardCode }],
      description: "A card that reveals more information on hover.",
      tags: ["card", "hover", "UI"],
      dependencies: [], // Initially empty
    },
    {
      name: "Flip Card",
      path: "flip-card",
      code: [{ "/App.tsx": flipCardCode }],
      description: "A card that flips to reveal its back side.",
      tags: ["card", "flip", "animation"],
      dependencies: [], // Initially empty
    },
  ],
};

