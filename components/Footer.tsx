import Link from "next/link";
import { Mail, Phone, MapPin, Scale } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Scale className="h-6 w-6 text-gold-500" />
                            <span className="font-serif text-xl font-bold text-white">
                                KVNR Law
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Ethical • Professional • Client-Focused legal services across Andhra Pradesh.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-gold-500 transition-smooth">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/practice-areas" className="hover:text-gold-500 transition-smooth">
                                    Practice Areas
                                </Link>
                            </li>
                            <li>
                                <Link href="/bns-guide" className="hover:text-gold-500 transition-smooth">
                                    BNS Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/disclaimer" className="hover:text-gold-500 transition-smooth">
                                    Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-2">
                                <Phone className="h-4 w-4 mt-1 flex-shrink-0 text-gold-500" />
                                <a href="tel:+916305776039" className="hover:text-gold-500 transition-smooth">
                                    +91 6305776039
                                </a>
                            </li>
                            <li className="flex items-start space-x-2">
                                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-gold-500" />
                                <a href="mailto:kvnarasimharao1999@gmail.com" className="hover:text-gold-500 transition-smooth break-all">
                                    kvnarasimharao1999@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Office Address */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Office</h3>
                        <div className="flex items-start space-x-2 text-sm">
                            <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-gold-500" />
                            <address className="not-italic">
                                Opposite Junior Civil Judge Court,<br />
                                Singarayakonda,<br />
                                Prakasam District,<br />
                                Andhra Pradesh
                            </address>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-center md:text-left">
                            © {new Date().getFullYear()} KVNR Law Associates. All rights reserved.
                        </p>
                        <p className="text-xs text-center md:text-right max-w-md">
                            This website does not constitute advertisement or solicitation.
                            Information provided is for general awareness only.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
