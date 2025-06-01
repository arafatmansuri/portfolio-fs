import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';

const AboutSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle mx-auto">
            I'm a fresher full-stack developer passionate about creating efficient and user-friendly web applications.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="card p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <Code size={28} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
            <p className="text-slate-700 dark:text-slate-300">
              I build responsive and interactive user interfaces using modern frameworks like React and styled with Tailwind CSS.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="card p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <Server size={28} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
            <p className="text-slate-700 dark:text-slate-300">
              I develop robust server-side applications using Node.js, Express, and Java to power web applications.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="card p-8 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <Database size={28} className="text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Database Management</h3>
            <p className="text-slate-700 dark:text-slate-300">
              I design and implement database solutions using MongoDB and MySQL to ensure efficient data storage and retrieval.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-slate-700 dark:text-slate-300">
            I'm currently looking for opportunities to apply my skills in a professional environment. I'm dedicated to continuous learning and staying updated with the latest technologies in web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;