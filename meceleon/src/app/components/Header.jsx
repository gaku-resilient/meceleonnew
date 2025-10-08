import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Download, ChevronRight } from 'lucide-react';

// You can replace this with your actual logo component or an <img> tag
const Logo = () => (
    <Link href="/" className="text-2xl font-bold text-gray-900 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Meceleon
    </Link>
);


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Announcement Bar */}
            <div className="bg-gray-800 text-white text-sm">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <div className="flex items-center">
                        <Phone size={14} className="mr-2" />
                        <a href="tel:+918882008583" className="hover:text-orange-400 transition-colors">+91 88820 08583</a>
                    </div>
                    <div className="hidden md:block text-center text-gray-300">
                        Welcome to Meceleon — check our latest brochure in Downloads.
                    </div>
                    <Link href="/downloads" className="flex items-center hover:text-orange-400 transition-colors">
                        <span className="hidden sm:inline">Latest Brochure</span>
                        <Download size={14} className="ml-2" />
                    </Link>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex-shrink-0">
                    <Logo />
                </div>
                
                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA & Mobile Menu Button */}
                <div className="flex items-center">
                    <Link href="/contact" className="hidden lg:inline-block bg-orange-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105">
                        Get in touch
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden ml-4 p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                             <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex justify-between items-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                               <span>{link.name}</span>
                               <ChevronRight size={20} className="text-gray-400" />
                            </Link>
                        ))}
                         <Link href="/contact" className="block w-full text-center bg-orange-500 text-white font-semibold mt-4 px-5 py-3 rounded-lg hover:bg-orange-600 transition-all">
                            Get in touch
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
