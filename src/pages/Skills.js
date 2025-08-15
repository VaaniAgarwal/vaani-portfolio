import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center px-4 md:px-0 text-center"
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-white">
        Skills
      </h1>
      <p className="mt-3 text-slate-300 max-w-md mx-auto">
        List of skills, technologies, and tools will be showcased here.
      </p>

      {/* Future skill cards / icons can go here */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {/* Example placeholder boxes */}
        <div className="w-24 h-24 bg-slate-700/30 rounded-lg"></div>
        <div className="w-24 h-24 bg-slate-700/30 rounded-lg"></div>
        <div className="w-24 h-24 bg-slate-700/30 rounded-lg"></div>
      </div>
    </motion.section>
  );
}
