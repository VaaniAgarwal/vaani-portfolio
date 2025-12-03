import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 max-w-6xl mx-auto">
            {[...Array(12)].map((_, i) => (
                <motion.span
                    key={i}
                    className="absolute bg-goldSoft rounded-full opacity-30 blur-sm"
                    style={{
                        width: Math.random() * 8 + 4 + "px",
                        height: Math.random() * 8 + 4 + "px",
                        top: Math.random() * 100 + "%",
                        left: Math.random() * 100 + "%"
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: Math.random() * 4 + 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                    }}
                />        
            ))}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="font-serif text-goldRoyal text-6xl drop-shadow-glowSoft"
            >
                Vaani Agarwal
            </motion.h1>
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "180px", opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-[2px] bg-goldRoyal mt-3 shimmer-line mx-auto rounded-full"
            />
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-6 text-lg text-roseSoft tracking-wide"
            >
                MCA’26 @ VIT Vellore • Aspiring Software Engineer
            </motion.p>
            <motion.a
                href="#projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="mt-10 px-8 py-3 rounded-xl bg-roseDeep/20 text-creamLight font-medium backdrop-blur-md border border-roseSoft/30 shadow-glowRose hover:bg-roseDeep/40 hover:shadow-glowSoft transition-all duration-300"
            >
                View My Projects ✨
            </motion.a>
        </div>
    );
}