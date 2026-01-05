import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, GitCompare, ListChecks, Scale } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "BNS Guide - Bharatiya Nyaya Sanhita | KVNR Law Associates",
    description: "Comprehensive guide to Bharatiya Nyaya Sanhita (BNS) - India's new criminal code replacing IPC",
};

export default function BNSGuidePage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-900 to-charcoal-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Scale className="h-16 w-16 text-gold-500 mx-auto mb-6" />
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Bharatiya Nyaya Sanhita
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Understanding India&apos;s New Criminal Code
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                            What is BNS?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Bharatiya Nyaya Sanhita (BNS) 2023 is India&apos;s comprehensive criminal code that
                            replaces the colonial-era Indian Penal Code (IPC) of 1860. Enacted on December 25, 2023,
                            and effective from July 1, 2024, it represents a significant modernization of India&apos;s
                            criminal justice system.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This guide provides educational information about the key changes, new provisions,
                            and comparisons between IPC and BNS to help citizens understand their rights and
                            legal framework.
                        </p>
                    </div>
                </div>
            </section>

            {/* Guide Sections */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card hover>
                            <div className="text-center">
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-navy-900 rounded-full">
                                        <BookOpen className="h-10 w-10 text-gold-500" />
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                    Introduction to BNS
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Learn about the history, objectives, and significance of India&apos;s new criminal code
                                </p>
                                <Link href="/bns-guide/introduction">
                                    <Button variant="ghost" className="w-full">
                                        Read More
                                    </Button>
                                </Link>
                            </div>
                        </Card>

                        <Card hover>
                            <div className="text-center">
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-navy-900 rounded-full">
                                        <GitCompare className="h-10 w-10 text-gold-500" />
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                    IPC vs BNS Comparison
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Detailed comparison highlighting major differences and improvements
                                </p>
                                <Link href="/bns-guide/ipc-vs-bns">
                                    <Button variant="ghost" className="w-full">
                                        Compare Now
                                    </Button>
                                </Link>
                            </div>
                        </Card>

                        <Card hover>
                            <div className="text-center">
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-navy-900 rounded-full">
                                        <ListChecks className="h-10 w-10 text-gold-500" />
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                    Important Sections
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    Search and explore 50+ critical sections with IPC comparison
                                </p>
                                <Link href="/bns-guide/important-sections">
                                    <Button variant="primary" className="w-full">
                                        Explore Sections
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                        <h3 className="font-semibold text-amber-900 mb-3">Educational Purpose Only</h3>
                        <p className="text-sm text-amber-900 leading-relaxed">
                            This BNS guide is provided for general educational and informational purposes only.
                            It does not constitute legal advice. Laws are subject to amendments and judicial
                            interpretations. For specific legal guidance related to your situation, please
                            consult with a qualified advocate.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
