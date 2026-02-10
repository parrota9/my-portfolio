// src/components/Footer.tsx
import TerminalIcon from "../assets/terminal.svg?react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full pb-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-6 bg-slate-900/40 border border-slate-800/60 rounded-3xl text-slate-500 text-sm">
        {/* Left: Identity */}
        <div className="flex items-center gap-3">
          <TerminalIcon className="w-5 h-5 text-slate-600" />
          <span className="font-medium">Zaky H.</span>
          <span className="text-slate-700">|</span>
          <span>© {currentYear}</span>
        </div>

        {/* Center: Status/Location (The "Chill" part) */}
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 animate-pulse" />
          <span>Available for work</span>
          <span className="text-slate-700 ml-2">•</span>
          <span>KL, Malaysia</span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:zaky@example.com"
            className="text-blue-400/80 hover:text-blue-400 transition-colors font-medium"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
