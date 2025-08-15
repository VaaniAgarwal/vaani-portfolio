import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const linkClass = ({ isActive }) =>
  `px-3 py-2 rounded-xl text-sm font-medium transition ${
    isActive ? "bg-white/10" : "hover:bg-white/5"
  }`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <nav className="container mx-auto px-4 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-semibold tracking-wide">
          Vaani
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink to="/" className={linkClass}>Home</NavLink> 
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/education" className={linkClass}>Education</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/VaaniAgarwal" target="_blank" rel="noreferrer" aria-label="GitHub" className="opacity-80 hover:opacity-100">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/vaani-agarwal-7950a7204/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="opacity-80 hover:opacity-100">
            <FaLinkedin size={18} />
          </a>
        </div>
      </nav>
    </header>
  );
}
