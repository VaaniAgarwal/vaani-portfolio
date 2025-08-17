import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="h-screen flex flex-col justify-center px-4 md:px-0 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 -z-10" />
      <motion.div
        className="absolute w-72 h-72 bg-pink-500/20 rounded-full top-[-10%] left-[-15%]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-56 h-56 bg-cyan-500/20 rounded-full top-[5%] right-[-10%]"
        animate={{ x: [0, -40, 0], y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-40 h-40 bg-purple-400/20 rounded-full bottom-[10%] left-[15%]"
        animate={{ x: [0, 20, 0], y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-32 h-32 bg-indigo-400/20 rounded-full bottom-[25%] right-[50%]"
        animate={{ x: [0, -10, 0], y: [0, 10, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-lg mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
          Experience
        </h1>
        <div className="mt-8 p-6 border border-white/20 rounded-xl backdrop-blur-sm bg-white/5 text-left">
          <h2 className="text-2xl font-semibold text-white">Web Development Intern</h2>
          <p className="mt-1 text-slate-300 italic">i-SmokeStack | Remote | June 2025 – Present</p>
          <ul className="mt-3 list-disc list-inside text-slate-300 space-y-1">
            <li>Integrated a JSON-based chatbot interface for interactive user experience.</li>
            <li>Created and customized personal portfolio using WordPress themes & plugins.</li>
            <li>Performed manual testing for responsiveness, functionality, and UI/UX consistency.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
