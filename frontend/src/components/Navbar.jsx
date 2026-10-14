"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Products' },
  { path: '/about', label: 'About Us' },
  { path: '/blog', label: 'Blog' },
  { path: '/internships', label: 'Internships' },
  { path: '/careers', label: 'Careers' },
  { path: '/booking', label: 'Book Call' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled py-3' : 'bg-transparent py-5'
      } top-0`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center group">
          <div className="w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
            <img src="/logo.png" alt="Hexanx" className="w-8 h-8 object-contain" />
          </div>
          <span className="tracking-tight text-slate-900 font-extrabold text-xl">Hexanx</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-2">
          <div
            className={`rounded-full px-2 py-1.5 mr-6 flex transition-all ${
              scrolled ? 'bg-slate-100/80' : 'bg-white/90 backdrop-blur-xl border border-white/50 shadow-lg'
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 ${
                  pathname === link.path
                    ? 'bg-slate-900 text-white shadow-md transform scale-105'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            onClick={() => router.push('/booking')}
            className="px-6 py-3 text-sm font-bold rounded-full shadow-xl hover:shadow-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:shadow-blue-500/40 transition-all"
          >
            Book Meeting
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-slate-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-2xl lg:hidden animate-slide-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-left py-4 px-6 rounded-2xl font-bold text-lg bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
