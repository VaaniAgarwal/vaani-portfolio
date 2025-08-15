import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 backdrop-blur supports-[backdrop-filter]:bg-slate-950/90">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Vaani • Built with React & Tailwind</p>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">
            <FaGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
