import React from 'react';
import Link from 'next/link';

const menuItems = [
  {
    title: "Installation",
    items: [
      { label: "Install Next.js", path: "/installation/install-next-js" },
      { label: "Add Utilities", path: "/installation/add-utilities" },
      { label: "Common use", path: "/installation/common-use" },
    ]
  },
  {
    title: "Features",
    items: [
      { label: "Parallax Hero", path: "/features/parallax-hero" },
      { label: "Animated Cards", path: "/features/animated-card" },
      { label: "Stack Cards", path: "/features/stack-cards" },
    ]
  },
  {
    title: "Components",
    items: [
      { label: "Accordion", path: "/components/accordion" },
      { label: "Button", path: "/components/button" },
      { label: "Carousel", path: "/components/carousel" },
      { label: "Dialog", path: "/components/dialog" },
      { label: "Dropdown", path: "/components/dropdown" },
      { label: "Tooltip", path: "/components/tooltip" },
      { label: "Modal", path: "/components/modal" },
      { label: "Alert", path: "/components/alert" },
      { label: "Popover", path: "/components/popover" },
      { label: "Card", path: "/components/card" },
      { label: "Pagination", path: "/components/pagination" },
      { label: "Spinner", path: "/components/spinner" },
      { label: "Grid", path: "/components/grid" },
      { label: "Form", path: "/components/form" },
      { label: "Slider", path: "/components/slider" },
      { label: "Toast", path: "/components/toast" },
      { label: "Badge", path: "/components/badge" },
      { label: "Chip", path: "/components/chip" },
      { label: "Progress Bar", path: "/components/progress-bar" },
    ]
  }
];

const Sidebar = () => {
  return (
    <aside className="w-[300px] h-screen overflow-y-auto">
      <div className="space-y-6">
        {
          menuItems?.map((item, i) => (
            <div key={i}>
              <p className="font-bold text-[16px] dark:text-white text-black mb-4">{item?.title}</p>
              <ul className="space-y-2">
                {
                  item?.items.map((path, j) => (
                    <li className="text-[16px]" key={j}>
                      <Link href={path?.path}>{path?.label}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </aside>
  );
};

export default Sidebar;
