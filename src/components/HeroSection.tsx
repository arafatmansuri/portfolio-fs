import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm mb-4">
              Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building modern web applications with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-500 dark:to-indigo-400 bg-clip-text text-transparent">
              passion and precision
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm a fresher full-stack developer with expertise in Java,
            JavaScript, React, Node.js, and more. Currently focused on building
            responsive and performant web applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1DkxgQjE3k8lLvbPzxLCFHLnpd19NwZsO/view?usp=sharing"
              target="_blank"
              className="btn btn-secondary"
            >
              Get My Resume
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="https://github.com/arafatmansuri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-arafat-354924273"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/_MohammedArafat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter/X"
            >
              <Twitter size={24} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <a href="#about" aria-label="Scroll down">
            <ChevronDown
              size={28}
              className="text-slate-400 dark:text-slate-500"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
