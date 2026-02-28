import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Youtube, Twitter } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/setup", label: "Setup" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com/nakulbgmi", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@soulnakul", label: "YouTube" },
  { icon: Twitter, href: "https://x.com/soulnakul", label: "X" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-display text-xl font-bold uppercase">
          <span className="text-foreground">Soul</span>
          <span className="text-primary text-glow-cyan">Nakul</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-display text-sm uppercase tracking-widest transition-colors duration-300 ${
                pathname === l.to
                  ? "text-primary text-glow-cyan"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Social links + badge */}
        <div className="hidden md:flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              aria-label={s.label}
            >
              <s.icon size={18} />
            </a>
          ))}
          <a
            href="https://instagram.com/nakulbgmi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 border border-glow rounded-full text-xs font-display uppercase tracking-wider text-primary hover:bg-primary/10 transition-colors"
          >
            <span>📸</span> 100K on Insta!
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`font-display text-sm uppercase tracking-widest ${
                    pathname === l.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://instagram.com/nakulbgmi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xs font-display uppercase"
              >
                📸 100K on Insta!
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
