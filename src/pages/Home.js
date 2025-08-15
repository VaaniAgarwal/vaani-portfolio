import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="h-screen flex flex-col justify-center items-start px-4 md:px-0"
    >
      <h1 className="text-3xl md:text-5xl font-bold">Hi, I’m Vaani 👋</h1>
      <p className="mt-4 text-slate-300 max-w-prose">
        MCA final-year • Aspiring Data Scientist. I turn data into insights & ideas into reality.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          to="/projects"
          className="px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/5"
        >
          Contact Me
        </Link>
      </div>
    </motion.section>
  );
}
