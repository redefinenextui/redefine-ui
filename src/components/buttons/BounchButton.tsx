import { motion } from 'framer-motion'

const BounchButton = () => {
  return (
    <motion.button
      className="relative overflow-hidden px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg focus:outline-none mt-5 ml-5"
      whileHover={{ scale: 1.1, y: -4 }} // Bouncing effect on hover
      whileTap={{ scale: 0.95 }} // Shrink when clicked
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="relative-10">Click Me</span>

      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 bg-white opacity-25 rounded-full scale-0"
        animate={{ scale: 3, opacity: 0 }}

      />
    </motion.button>
  );
};

export default BounchButton;
