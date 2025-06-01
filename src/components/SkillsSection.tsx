import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skills = [
    { name: 'JavaScript', category: 'language' },
    { name: 'TypeScript', category: 'language' },
    { name: 'Java', category: 'language' },
    { name: 'React', category: 'frontend' },
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
    { name: 'Tailwind CSS', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Express.js', category: 'backend' },
    { name: 'MongoDB', category: 'database' },
    { name: 'MySQL', category: 'database' },
    { name: 'RESTful APIs', category: 'backend' },
    { name: 'Git', category: 'tool' },
    { name: 'npm', category: 'tool' },
  ];

  const categories = [
    { id: 'language', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'tool', name: 'Tools' },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle mx-auto">
            Here are the technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id}>
              <motion.h3
                className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {category.name}
              </motion.h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="bg-white dark:bg-slate-800 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                    >
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;