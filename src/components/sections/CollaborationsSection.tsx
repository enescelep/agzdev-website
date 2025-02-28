'use client';

import { motion } from 'framer-motion';

const successStories = [
  {
    title: 'Fintech Market Expansion',
    description: 'How we helped a fintech company expand into the GCC region in under 6 months.',
    metric: '6 Months',
    achievement: 'Market Entry'
  },
  {
    title: 'AI-Powered Automation',
    description: 'How our AI-powered automation increased operational efficiency for a digital platform.',
    metric: '300%',
    achievement: 'Efficiency Increase'
  }
];

const CollaborationsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Building Impactful Partnerships with Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over the years, AG'z DEV has partnered with leading corporations, investors, and startups,
            helping them scale and achieve measurable success.
          </p>
        </motion.div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {successStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <div className="text-2xl font-bold text-[#775c93] mb-2">{story.metric}</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">{story.achievement}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{story.title}</h3>
              <p className="text-gray-600">{story.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-lg text-gray-600">
            Our clients trust us to develop sustainable business models, streamline operations, and expand into new markets.
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
        >
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Partner Logo</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationsSection; 