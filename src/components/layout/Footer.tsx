'use client';

import { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Who We Are', href: '/who-we-are' },
    { name: 'What We Do', href: '/what-we-do' },
    { name: 'Our Journey', href: '/our-journey' },
    { name: 'Get in Touch', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-[#775c93] text-white">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-xl mx-auto text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Subscribe</h3>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
              className="flex-1 px-4 py-2 rounded-md text-gray-900 bg-white"
              required
            />
            <button
              type="submit"
              className="bg-[#664e7e] px-6 py-2 rounded-md hover:bg-[#553f6f] transition-colors"
            >
              SIGN UP
            </button>
          </form>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-[#e6dff0] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-[#e6dff0] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 text-sm text-[#e6dff0]">
          <p>AG'z DEV CONSULTING & TECHNOLOGY LTD.</p>
          <p className="mt-2">©2024 © 2023 AG'z DEV - ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 