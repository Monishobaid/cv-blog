import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa"; // Example icon for role

const EXPERIENCES = [
  {
    company: "TechCorp",
    role: "Senior Product Manager",
    duration: "2021 - Present",
    description:
      "Led cross-functional teams to deliver innovative tech solutions that drove customer engagement and growth.",
  },
  {
    company: "InnoSolutions",
    role: "Product Manager",
    duration: "2018 - 2021",
    description:
      "Oversaw product lifecycle from ideation to launch, managing product development and user experience strategy.",
  },
  {
    company: "StartUp Inc.",
    role: "Associate PM",
    duration: "2016 - 2018",
    description:
      "Worked closely with the development team to create MVPs, iterated on customer feedback, and refined product features.",
  },
];

export const ExperienceTimeline = ({ controls, experienceRef }) => {
  return (
    <motion.div
      ref={experienceRef}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="my-12 p-6 bg-gray-50 rounded-lg shadow-md"
    >
      <h3 className="text-3xl font-bold mb-8 text-black text-center">
        Experience Timeline
      </h3>
      <div className="relative border-l border-gray-300 pl-8">
        <ul className="space-y-12">
          {EXPERIENCES.map((experience) => (
            <motion.li
              key={experience.company}
              className="flex items-start gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                <FaBriefcase />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black">
                  {experience.role}
                </h4>
                <p className="text-sm text-gray-500">{experience.duration}</p>
                <p className="text-base text-gray-700 mt-2">
                  {experience.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
