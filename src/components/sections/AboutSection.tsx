'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  const stats = [
    { number: '100+', label: 'Successful Projects' },
    { number: '10+', label: 'Years of Excellence' },
    { number: '2012', label: 'Founded' },
  ];

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
            Over a Decade of Excellence in Business Transformation
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2012, AG'z DEV has been at the forefront of venture building, market expansion, and digital transformation across MENA & GCC.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our methodology integrates advanced AI solutions, data-driven strategies, and deep market intelligence to create scalable, future-proof businesses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#775c93] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Network & Success Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600">
            With an extensive network of strategic partners, investors, and high-growth startups, 
            we're uniquely positioned to drive your business forward.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 