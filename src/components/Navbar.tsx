import { Link } from "react-router-dom";
import TerminalIconSVG from "../assets/terminal.svg?react";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="flex items-center justify-between px-6 py-3 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full shadow-2xl">
        {/* Left Side: Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group">
          <TerminalIconSVG className="w-6 h-6 text-blue-500" />

          <span className="font-bold text-xl tracking-tight">Zaky H.</span>
        </Link>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#stack" className="hover:text-white transition-colors">
            Stack
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

        {/* Right Side: Action Button */}
        <a
          href="mailto:your-email@example.com"
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(37,99,235,0.4)]"
        >
          Email Me
        </a>
      </div>
    </nav>
  );
}
