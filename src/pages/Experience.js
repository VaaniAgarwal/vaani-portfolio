import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="h-screen flex flex-col justify-center px-4 md:px-0"
    >
      <h1 className="text-2xl font-semibold">Experience</h1>
      <p className="mt-3 text-slate-300">Your internships & roles.</p>
    </motion.section>
  );
}
