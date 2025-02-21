
import { useState } from "react";
import { motion } from "framer-motion";

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-64 h-40 cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="absolute inset-0 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg"
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <h2 className="text-lg font-bold">Front Side</h2>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-gray-800 text-white flex items-center justify-center rounded-lg shadow-lg"
        initial={false}
        animate={{ rotateY: flipped ? 0 : -180 }}
        transition={{ duration: 0.6 }}
        style={{ backfaceVisibility: "hidden" }}
      >
        <p className="text-lg">Back Side Content</p>
      </motion.div>
    </div>
  );
};

export default FlipCard;
