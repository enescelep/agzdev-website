'use client';

import { motion } from 'framer-motion';

const technologies = [
  {
    title: 'Market Intelligence & Data Analytics',
    description: 'Advanced analytics tools for market insights and trend analysis',
    icon: '📊'
  },
  {
    title: 'Process Automation',
    description: 'AI-Powered CRMs, Zapier, No-Code Integrations',
    icon: '⚡'
  },
  {
    title: 'Investor & Growth Strategy Platforms',
    description: 'Tools for strategic planning and investor relations',
    icon: '📈'
  }
];

const TechnologySection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Empowering Businesses with AI & Data-Driven Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            AG'z DEV integrates the latest AI-driven tools to optimize operations, drive efficiency, 
            and ensure high-impact business decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology Integration Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 bg-gradient-to-r from-[#775c93] to-[#664e7e] rounded-lg p-8 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Ecosystem</h3>
            <p className="text-lg opacity-90">
              A comprehensive suite of tools and technologies working in harmony to drive your business forward.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {['AI & ML', 'Data Analytics', 'Automation', 'Integration'].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4">
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologySection; 