
import { useState } from "react";
import { motion } from "framer-motion";

const accordionData = [
  { id: 1, title: "What is React?", content: "React is a JavaScript library for building UI components." },
  { id: 2, title: "What is Framer Motion?", content: "Framer Motion is a React animation library with simple yet powerful features." },
  { id: 3, title: "Why use Tailwind CSS?", content: "Tailwind CSS allows rapid UI development with utility classes." }
];

const MultiAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 space-y-4">
      {accordionData.map((item, index) => (
        <div key={item.id} className="border rounded-lg shadow-md">
          <div
            className="bg-blue-500 text-white px-6 py-4 flex justify-between cursor-pointer rounded-t-lg"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <motion.span
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </div>
          <motion.div
            className="overflow-hidden bg-gray-100"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="p-4 text-gray-700">{item.content}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default MultiAccordion;
