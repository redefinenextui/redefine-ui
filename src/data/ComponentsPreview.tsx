import { BounchButton, FlipCard, HoverCard, MultiLevelAccordion, OutlineButton, ShadowButton, SimpleAccordion } from "@/components";
import { IComponent } from "@/types/IComponent";

export default function ComponentsPreview() {
  const componentsPreview = {
    buttons: [
      {
        name: "Bounce Button",
        path: "bounce-button",
        code: <BounchButton />,
      },
      {
        name: "Outline Button",
        path: "outline-button",
        code: <OutlineButton />,
      },
      {
        name: "Shadow Button",
        path: "shadow-button",
        code: <ShadowButton />,
      },
    ],
    accordion: [
      {
        name: "Simple Accordion",
        path: "simple-accordion",
        code: <SimpleAccordion />,
      },
      {
        name: "Multi-Level Accordion",
        path: "multi-level-accordion",
        code: <MultiLevelAccordion />,
      },
    ],
    cards: [
      {
        name: "Hover Card",
        path: "hover-card",
        code: <HoverCard />,
      },
      {
        name: "Flip Card",
        path: "flip-card",
        code: <FlipCard />,
      },
    ],
  };


  return componentsPreview;
}

