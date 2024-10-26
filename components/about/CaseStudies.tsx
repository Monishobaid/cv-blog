import { motion } from "framer-motion";

export const CaseStudies = ({ controls, caseStudiesRef }) => {
  return (
    <motion.div
      ref={caseStudiesRef}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="my-12"
    >
      <h3 className="text-3xl font-bold mb-6">Case Studies</h3>
      <p className="text-muted-foreground text-lg">
        Discover how I've tackled various challenges and delivered solutions
        that have made a real impact.
      </p>
    </motion.div>
  );
};