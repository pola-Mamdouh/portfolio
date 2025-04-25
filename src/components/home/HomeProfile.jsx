import { motion } from "framer-motion";
const HomeProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="home-profile flex-center"
    >
      <div className="frame"></div>
      <img src="/images/my_profile.png" loading="eager" alt="my-profile" />
    </motion.div>
  );
};

export default HomeProfile;
