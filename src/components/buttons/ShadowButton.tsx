import { useState } from 'react';
import { motion } from 'framer-motion';

const ShowButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col mt-24 justify-center mx-auto items-center space-y-4">
      {/* Show Button */}
      <motion.button
        className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold text-lg focus:outline-none hover:bg-blue-600 hover:text-white transition-all"
        onClick={toggleVisibility}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {isVisible ? 'Hide' : 'Show'} Content
      </motion.button>

      {/* Reveal Content */}
      <motion.div
        className="mt-4 w-64 p-4 bg-blue-100 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>This is the hidden content that is revealed when the "Show" button is clicked!</p>
      </motion.div>
    </div>
  );
};

export default ShowButton;

