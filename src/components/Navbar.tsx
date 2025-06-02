import { motion } from "framer-motion";
import { Github, Menu, Moon, Sun, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1lu3K3Hrs_8qpIcCLCaRegxl0Je8jQDbo/view?usp=sharing",
      blank: true,
    },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container py-4 mx-auto">
        <nav className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-xl font-bold flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Github size={24} />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">
              Mohammed Arafat
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    target={link.blank ? "_blank" : "_self"}
                    className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 font-medium transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-800 dark:text-white p-2 z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-white dark:bg-slate-900 md:hidden flex items-start h-fit"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="container mr-auto px-4 py-6 w-[35%] dark:bg-slate-900">
            <ul className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xl font-medium text-slate-800 dark:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
