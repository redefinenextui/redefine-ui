import { useState } from "react";
import { motion } from "framer-motion";

const SimpleAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div
        className="bg-blue-600 text-white px-6 py-4 rounded-lg cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">What is Framer Motion?</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </div>
      <motion.div
        className="bg-gray-100 overflow-hidden rounded-lg"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="p-4 text-gray-700">
          Framer Motion is a powerful animation library for React. It makes animations easy and fun!
        </p>
      </motion.div>
    </div>
  );
};

export default SimpleAccordion;

