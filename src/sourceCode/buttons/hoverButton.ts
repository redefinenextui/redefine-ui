export const hoverButtonCode = `import { motion } from 'framer-motion';

const HoverButton = () => {
  return (
    <motion.button
      className="relative h-14 w-32 rounded-lg border-2 border-blue-600 text-xl text-blue-600 overflow-hidden bg-white"
      whileHover="hover"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      variants={{ hover: { color: "#ffffff" } }}
    >
      <motion.span
        className="relative z-10 "
        variants={{ hover: { color: "#ffffff" } }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Button
      </motion.span>

      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 h-0 w-full bg-blue-600 z-0"
        variants={{
          hover: { height: "100%" },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

export default HoverButton;


`
