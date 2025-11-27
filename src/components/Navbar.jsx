import { NavLink } from 'react-router-dom';
import { useState } from 'react';   
import { motion } from 'framer-motion';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Experience", path: "/experience" },
        { name: "Education", path: "/education" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-goldSoft/20 shadow-glowSoft">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">

                <NavLink to="/" className="text-goldRoyal font-serif text-2xl tracking-wide">
                    Vaani
                </NavLink>

                <div className="hidden md:flex gap-6">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) => 
                                `relative text-creamLight transition-all ${
                                    isActive ? "text-goldRoyal" : "hover:text-roseSoft"
                                }`
                            }
                        >
                            {({ isActive}) => (
                                <div className="group">
                                    {link.name}
                                    <motion.div
                                        className="h-[2px] bg-goldRoyal rounded-full"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: isActive ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            )}
                        </NavLink>
                    ))}
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-goldRoyal text-xl"
                >
                    ☰
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-black/40 backdrop-blur-md px-6 py-4">
                    <div className="flex flex-col gap-3">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className="text-creamLight hover:text-roseSoft"
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}