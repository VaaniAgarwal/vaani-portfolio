import { motion } from "framer-motion";

export default function Home() {
    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-6 overflow-hidden">

            <div 
                aria-hidden
                className="absolute inset-0 -z-10 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse at 35% 30%, rgba(199,109,133,0.12), rgba(59,20,48,0.08) 25%, rgba(11,10,19,0.95) 60%)"
                }}
            />

            <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-20 -z-10 pointer-events-none"
                style={{    
                    background: "linear-gradient(180deg, rgba(212,175,55,0.06), transparent 60%)",
                }}
            />

            {[...Array(10)].map((_, i) => (
                <motion.span
                    key={i}
                    aria-hidden
                    className="absolute rounded-full blur-sm"
                    style={{
                        width: `${Math.random() * 6 + 3}px`,
                        height: `${Math.random() * 6 + 3}px`,
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 60 + 10}%`,
                        background: "rgba(212,175,55,0.7)",
                        opacity: 0.65,
                        zIndex: 0,
                    }}
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.4, 0.9, 0.4],
                        scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 3 + Math.random() * 3,
                        delay: Math.random() * 2,
                        ease: "easeInOut",
                    }}
                />        
            ))}

            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative z-10 max-w-5xl w-full flex flex-col items-center text-center"
            >

                <div className="relative w-full flex items-center justify-center mb-6">
                    <svg
                        viewBox="0 0 800 120"
                        className="w-[520px] max-w-full h-auto absolute -top-4 -z-0"
                        aria-hidden
                    >
                        <defs>
                            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#F4E3B2" stopOpacity="0.95" />
                                <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.95" />
                                <stop offset="100%" stopColor="#F4E3B2" stopOpacity="0.95" />
                            </linearGradient>

                            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        <motion.path
                            d="M60 80 C220 -20 580 -20 740 80"
                            fill="none"
                            stroke="url(#goldGrad)"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            style={{ 
                                filter: "drop-shadow(0 6px 12px rgba(212,175,55,0.08))",
                                strokeDasharray: 2000,
                                strokeDashoffset: 2000,
                                animation: "arcShine 9s linear infinite",
                                opacity: 0.9
                            }}
                        />

                        <path
                            d="M60 80 C220 -20 580 -20 740 80"
                            fill="none"
                            stroke="#D4AF37"
                            strokeWidth="16"
                            strokeLinecap="round"
                            opacity="0.06"
                            filter="url(#softGlow)"
                        />
                    </svg>

                    <div
                        aria-hidden
                        className="absolute -top-2 w-[340px] h-[160px] rounded-full blur-[80px]"
                        style={{
                            background: "rgba(212,175,55,0.08)",
                            zIndex: -20,
                        }}   
                    ></div>
                </div>

                {[...Array(3)].map((_, i) => (
                    <motion.span
                        key={i}
                        aria-hidden
                        className="absolute bg-goldRoyal rounded-full"
                        style={{
                            width: "6px",
                            height: "6px",
                            left: `${50 + (i * 12 - 12)}%`,
                            top: "38%",
                            opacity: 0.55,
                            filter: "blur(1px)",
                            zIndex: 2,    
                        }}
                        animate={{
                            y: [0, -6, 0],
                            opacity: [0.3, 0.7, 0.3],
                            scale: [1, 1.4, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3 + i,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                <motion.h1
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7 }}
                    className="font-serif text-goldRoyal text-6xl md:text-7xl leading-tight drop-shadow-glowSoft"
                >
                    Vaani Agarwal
                </motion.h1>

                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "180px", opacity: 1 }}
                    transition={{ duration: 0.55, delay: 0.7 }}
                    className="h-[2px] bg-goldRoyal mt-4 shimmer-line mx-auto rounded-full"
                />

                <div className="mt-6 flex flex-col md:flex-row items-center gap-6">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.9 }}
                        className="text-roseSoft text-lg md:text-base max-w-xl"
                    >   
                        MCA’26 @ VIT Vellore • Aspiring Software Engineer
                    </motion.p>

                    <motion.a
                        href="/projects"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1, duration: 0.7 }}
                        className="inline-block px-6 py-3 rounded-2xl bg-roseDeep/20 text-creamLight font-medium backdrop-blur-md border border-roseSoft/30 shadow-glowRose hover:bg-roseDeep/40 hover:shadow-glowSoft transition-all duration-300"
                        aria-label="View my projects"
                    >
                        View My Projects ✨
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}