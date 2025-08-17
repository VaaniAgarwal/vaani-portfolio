import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="h-screen relative flex flex-col justify-center px-4 md:px-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)",
            "linear-gradient(to bottom right, #1e293b, #0f172a, #1e293b)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-cyan-500/20 rounded-full top-[-10%] left-[-10%]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-56 h-56 bg-indigo-500/20 rounded-full bottom-[-10%] right-[-10%]"
        animate={{ x: [0, -40, 0], y: [0, -20, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-36 h-36 bg-purple-400/20 rounded-full top-[20%] left-[70%]"
        animate={{ x: [0, -30, 0], y: [0, 20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-28 h-28 bg-pink-400/20 rounded-full bottom-[15%] left-[10%]"
        animate={{ x: [0, 20, 0], y: [0, -10, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Hi, I’m Vaani 👋
        </h1>
        <p className="text-slate-300 max-w-xl mt-4 mx-auto text-lg md:text-xl drop-shadow-md">
          MCA final-year student • Passionate about learning, building projects, and turning ideas into reality.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4 mt-6 justify-center"
        >
          <Link
            to="/projects"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 text-white font-semibold transition-transform transform hover:scale-105"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
