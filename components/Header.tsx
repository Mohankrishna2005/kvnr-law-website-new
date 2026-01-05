"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Scale } from "lucide-react";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Locations", href: "/locations" },
    { name: "BNS Guide", href: "/bns-guide" },
    { name: "AI Assistant", href: "/ai-legal-assistant" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <Scale className="h-8 w-8 text-navy-900 group-hover:text-gold-500 transition-smooth" />
                        <div className="flex flex-col">
                            <span className="font-serif text-xl md:text-2xl font-bold text-navy-900">
                                KVNR Law
                            </span>
                            <span className="text-xs text-gray-600 -mt-1">Associates</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 hover:text-navy-900 transition-smooth px-3 py-2 rounded-md hover:bg-gray-50"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/consultation"
                            className="bg-navy-900 text-white px-5 py-2.5 rounded-lg hover:bg-gold-500 transition-smooth font-medium text-sm"
                        >
                            Request Consultation
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-navy-900 hover:bg-gray-100 transition-smooth"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="lg:hidden pb-4 animate-fade-in">
                        <div className="space-y-1">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50 rounded-md transition-smooth"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/consultation"
                                className="block mx-4 mt-2 bg-navy-900 text-white px-5 py-3 rounded-lg hover:bg-gold-500 transition-smooth font-medium text-center"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Request Consultation
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
