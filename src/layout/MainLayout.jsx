import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

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
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10"
            >
                <Outlet />
            </motion.div>
        </div>
    );
}