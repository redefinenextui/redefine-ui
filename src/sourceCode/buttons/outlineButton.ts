export const outlineButtonCode = `
import { motion } from 'framer-motion';

const OutlineButton = () => {
  return (
    <motion.button
      className="px-6 py-3 rounded-full border-2 border-blue-600 text-blue-600 font-semibold text-lg focus:outline-none hover:bg-blue-600 hover:text-white transition-all"
      whileHover={{
        scale: 1.1, 
        borderColor: '#3b82f6', // Change border color on hover
        color: '#fff',           // Text color change on hover
      }}
      whileTap={{
        scale: 0.95,             // Shrink when clicked
      }}
      transition={{
        type: "spring", 
        stiffness: 300, 
        damping: 20,
      }}
    >
      Click Me
    </motion.button>
  );
};

export default OutlineButton;
`
