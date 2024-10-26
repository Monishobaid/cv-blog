import { motion } from "framer-motion";

export const HeroSection = ({ controls, heroRef }) => {
  return (
    <>
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8"
      >
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </h1>
        </div>
      </motion.div>
      <hr className="my-8 border-t-2 border-dashed border-gray-300" />
    </>
  );
};