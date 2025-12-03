import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";  

export default function MainLayout() {
    const [petals, setPetals] = useState([]);
    useEffect(() => {
        const arr = [];
        for (let i = 0; i < 12; i++) {
            arr.push({
                left: Math.random() * 100,
                top: -40 - Math.random() * 40,
                animationDuration: 5 + Math.random() * 6,
                animationDelay: Math.random() * 2,
            });
        }
        setPetals(arr);
    }, []);
    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <Navbar />
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {petals.map((p, i) => (
                    <span
                        key={i}
                        className="petal"
                        style={{
                            left: `${p.left}%`,
                            top: `${p.top}px`,
                            animationDuration: `${p.animationDuration}s`,
                            animationDelay: `${p.animationDelay}s`,
                        }}
                    />
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-4 max-w-6xl mx-auto"
            >
                <Outlet />
            </motion.div>
        </div>
    );
}