'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
        {/* Add more abstract elements here */}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Strategic Growth & Innovation for Future-Ready Businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8"
          >
            Unlocking business potential with venture building, innovation management, business transformation, and intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-[#775c93] text-white px-8 py-4 rounded-md hover:bg-[#664e7e] transition-colors text-lg font-semibold"
            >
              Partner with Us
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 text-gray-500"
          >
            <p className="text-sm uppercase tracking-wider mb-4">Trusted by Leading Businesses in the MENA & GCC Markets</p>
            <div className="flex justify-center items-center space-x-8">
              {/* Add client logos here */}
              <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
              <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
              <div className="h-12 w-24 bg-gray-200 rounded-md"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection; 