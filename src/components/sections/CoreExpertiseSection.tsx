'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '🚀',
    title: 'Venture Building',
    description: 'Building and scaling market-leading ventures by combining industry expertise, technology, and strategic execution.'
  },
  {
    icon: '📈',
    title: 'Innovation & Growth Management',
    description: 'Crafting tailored growth strategies by leveraging cutting-edge technologies, automation, and AI-driven market insights.'
  },
  {
    icon: '💡',
    title: 'Business Transformation',
    description: 'Revolutionizing operations through process automation, digital optimization, and disruptive business models.'
  },
  {
    icon: '📊',
    title: 'Intelligence & Market Expansion',
    description: 'Data-backed decision-making, trend forecasting, and regional expansion strategies that drive competitive advantage.'
  }
];

const CoreExpertiseSection = () => {
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
            Transforming Businesses at Scale
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="/contact"
            className="inline-block bg-[#775c93] text-white px-8 py-4 rounded-md hover:bg-[#664e7e] transition-colors text-lg font-semibold"
          >
            Discuss Your Business Needs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreExpertiseSection; 