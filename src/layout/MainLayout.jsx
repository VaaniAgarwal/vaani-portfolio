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
                animationDuration: 4 + Math.random() * 5,
                animationDelay: Math.random() * 5,
            });
        }
        setPetals(arr);
    }, []);
    return (
        <div className="relative min-h-screen overflow-hidden">
            <Navbar />
            <div className="absolute inset-0 overflow-hidden ">
                {petals.map((p, i) => (
                    <span
                        key={i}
                        className="petal pointer-events-none"
                        style={{
                            left: `${p.left}%`,
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
                className="relative z-10 pt-24 px-4 max-w-6xl mx-auto"
            >
                <Outlet />
            </motion.div>
        </div>
    );
}