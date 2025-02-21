
import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import Image from "next/image";

const HoverCard = () => {
  return (
    <motion.div
      className={cn("max-w-sm p-6 bg-white shadow-lg rounded-2xl cursor-pointer")}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      <Image width={400} height={400} src="" alt="Nature" className="w-full h-40 rounded-lg object-cover mb-4" />
      <h2 className="text-lg font-bold">Beautiful Nature</h2>
      <p className="text-gray-600 mt-2">Explore the wonders of nature with stunning views and breathtaking landscapes.</p>
    </motion.div>
  );
};

export default HoverCard;
