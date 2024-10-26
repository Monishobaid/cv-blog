import { motion } from "framer-motion";

const SUCCESS_STORIES = [
  {
    project: "React Native Customer Application",
    impact: "+35% User Retention",
    description: "Led the redesign of a mobile app that resulted in a 35% increase in user retention and a 20% growth in active users.",
  },
  {
    project: "SaaS Product Launch",
    impact: "₹ 1Cr in New Revenue",
    description: "Successfully launched a new SaaS product that generated $2M in additional revenue within the first quarter.",
  },
  {
    project: "Agile Transformation",
    impact: "30% Faster Delivery",
    description: "Spearheaded the Agile transformation of the product team, reducing the product delivery cycle by 30%.",
  },
];

export const SuccessStories = ({ controls, successStoriesRef }) => {
  return (
    <motion.div
      ref={successStoriesRef}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="my-24"
    >
      <h3 className="text-3xl font-bold mb-6 text-black">Success Stories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SUCCESS_STORIES.map(({ project, impact, description }) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
            key={project}
          >
            <h4 className="text-xl font-bold text-black">{project}</h4>
            <p className="mt-2 font-semibold text-gray-700">{impact}</p>
            <p className="mt-3 text-gray-600">{description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};