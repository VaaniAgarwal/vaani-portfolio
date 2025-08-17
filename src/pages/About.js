import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-0 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 -z-10" />
      <motion.div
        className="absolute w-72 h-72 bg-cyan-500/20 rounded-full top-[-5%] right-[-10%]"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-56 h-56 bg-indigo-500/20 rounded-full top-[25%] left-[-15%]]"
        animate={{ x: [0, -30, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-36 h-36 bg-purple-400/20 rounded-full top-[60%] right-[10%]"
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute w-28 h-28 bg-pink-400/20 rounded-full bottom-[20%] right-[60%]"
        animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-md mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-lg">
          About
        </h1>
        <div className="mt-6 p-6 border border-white/20 rounded-xl backdrop-blur-sm bg-white/5 text-left">
        <p className="mt-4 text-slate-200 text-lg md:text-xl leading-relaxed">
          Hello! I’m Vaani Agarwal from Pukhrayan, U.P. I’m pursuing my MCA at VIT Vellore and love exploring programming, data, and software projects. I enjoy learning through hands-on work and building useful solutions.
        </p>
        <p className="mt-4 text-slate-200 text-lg md:text-xl leading-relaxed">
          Outside of academics, I like digital design, traveling, and reading novels. I also enjoy experimenting with Python, Java, SQL, WordPress, and VS Code to bring ideas to life.
        </p>
        </div>
      </motion.div>
    </section>
  );
}
