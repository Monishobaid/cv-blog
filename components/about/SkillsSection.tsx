import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SKILLS = [
  { skill: "Product Strategy", level: 90 },
  { skill: "User Research", level: 80 },
  { skill: "Team Leadership", level: 85 },
  { skill: "Data Analysis", level: 75 },
  { skill: "Agile Methodologies", level: 95 },
  { skill: "Market Research", level: 70 },
];

export const SkillsSection = ({ controls, skillsRef }) => {
  return (
    <motion.div
      ref={skillsRef}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="my-12 p-6 bg-white rounded-lg shadow-lg"
    >
      <h3 className="text-3xl font-bold mb-8 text-black text-center">
        Skills & Expertise
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map(({ skill, level }) => (
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            className="p-4 rounded-lg shadow-md bg-gray-50"
            key={skill}
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20">
                <CircularProgressbar
                  value={level}
                  text={`${level}%`}
                  styles={buildStyles({
                    textColor: "black",
                    pathColor: `rgba(0, 123, 255, ${level / 100})`,
                    trailColor: "#eee",
                  })}
                />
              </div>
              <h4 className="mt-4 text-lg font-bold text-black">{skill}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
