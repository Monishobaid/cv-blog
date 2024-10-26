import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export const ProfileSection = ({ avatarControls, bioControls, avatarRef, bioRef }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <motion.div
        ref={avatarRef}
        initial={{ opacity: 0, y: 20 }}
        animate={avatarControls}
        className="w-60 h-60 flex flex-col items-center"
      >
        <Avatar className="w-60 h-60 rounded-full shadow-lg hover:scale-105 transition-transform">
          <AvatarImage src="/rishprofile.jpg" alt={siteConfig.author} />
          <AvatarFallback>Initials</AvatarFallback>
        </Avatar>
        <h2 className="text-2xl font-bold mt-4 text-center">{siteConfig.author}</h2>
        <p className="text-muted-foreground text-center">Product Manager</p>
      </motion.div>

      <motion.div
        ref={bioRef}
        initial={{ opacity: 0, y: 20 }}
        animate={bioControls}
        className="flex-1"
      >
        <p className="text-gray-600 text-lg py-4">
          Hi, I'm a Product Manager passionate about crafting user-centric solutions that drive both business growth and customer satisfaction. I've led cross-functional teams to deliver high-impact products.
        </p>
      </motion.div>
    </div>
  );
};
