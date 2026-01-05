import { Metadata } from "next";
import { Calendar, Users, FileText, Scale } from "lucide-react";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Introduction to BNS - Bharatiya Nyaya Sanhita | KVNR Law Associates",
    description: "Learn about India's new criminal code - Bharatiya Nyaya Sanhita (BNS), its history, objectives, and implementation",
};

export default function BNSIntroductionPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-900 to-charcoal-800 text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <FileText className="h-16 w-16 text-gold-500 mx-auto mb-6" />
                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                            Introduction to Bharatiya Nyaya Sanhita
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            India&apos;s Modern Criminal Code
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6">
                            What is Bharatiya Nyaya Sanhita?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The Bharatiya Nyaya Sanhita (BNS) is a comprehensive criminal code enacted by the
                            Parliament of India on December 25, 2023, and implemented on July 1, 2024. It replaces
                            the Indian Penal Code (IPC), 1860, which had been in force for over 160 years.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                            <Card className="border-l-4 border-navy-900">
                                <div className="flex items-start space-x-3">
                                    <Calendar className="h-6 w-6 text-navy-900 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg text-navy-900 mb-2">Enacted</h3>
                                        <p className="text-gray-600">December 25, 2023</p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="border-l-4 border-gold-500">
                                <div className="flex items-start space-x-3">
                                    <Scale className="h-6 w-6 text-gold-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-lg text-navy-900 mb-2">Effective</h3>
                                        <p className="text-gray-600">July 1, 2024</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6 mt-12">
                            Why was BNS Needed?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Indian Penal Code was drafted during British colonial rule and reflected the
                            legal and social context of the 19th century. While it served India well for many
                            decades post-independence, the need for modernization became increasingly apparent:
                        </p>

                        <ul className="space-y-3 mb-8">
                            <li className="flex items-start space-x-3">
                                <div className="h-2 w-2 bg-navy-900 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">
                                    <strong>Colonial Legacy:</strong> Many provisions in IPC reflected colonial
                                    priorities and needed to align with modern Indian values
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="h-2 w-2 bg-navy-900 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">
                                    <strong>Technological Changes:</strong> Cybercrimes, digital evidence, and
                                    online offenses needed specific legal provisions
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="h-2 w-2 bg-navy-900 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">
                                    <strong>Social Evolution:</strong> Changes in societal norms required updated
                                    definitions and protections
                                </span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <div className="h-2 w-2 bg-navy-900 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">
                                    <strong>Language Accessibility:</strong> Need for simpler, more accessible
                                    legal language for common citizens
                                </span>
                            </li>
                        </ul>

                        <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6 mt-12">
                            Key Objectives of BNS
                        </h2>

                        <div className="space-y-4 mb-8">
                            <Card className="bg-gray-50">
                                <h3 className="font-semibold text-xl text-navy-900 mb-3">
                                    1. Modernization
                                </h3>
                                <p className="text-gray-700">
                                    Update criminal law to address contemporary crimes including cybercrimes,
                                    organized crime, and terrorism
                                </p>
                            </Card>

                            <Card className="bg-gray-50">
                                <h3 className="font-semibold text-xl text-navy-900 mb-3">
                                    2. Simplification
                                </h3>
                                <p className="text-gray-700">
                                    Make legal language more accessible and understandable for common citizens
                                </p>
                            </Card>

                            <Card className="bg-gray-50">
                                <h3 className="font-semibold text-xl text-navy-900 mb-3">
                                    3. Women&apos;s Safety
                                </h3>
                                <p className="text-gray-700">
                                    Strengthen provisions related to crimes against women with enhanced punishments
                                    and clearer definitions
                                </p>
                            </Card>

                            <Card className="bg-gray-50">
                                <h3 className="font-semibold text-xl text-navy-900 mb-3">
                                    4. Justice Delivery
                                </h3>
                                <p className="text-gray-700">
                                    Streamline criminal justice processes for faster and more effective justice delivery
                                </p>
                            </Card>

                            <Card className="bg-gray-50">
                                <h3 className="font-semibold text-xl text-navy-900 mb-3">
                                    5. National Identity
                                </h3>
                                <p className="text-gray-700">
                                    Reflect Indian values and constitutional principles instead of colonial perspectives
                                </p>
                            </Card>
                        </div>

                        <h2 className="font-serif text-3xl font-bold text-navy-900 mb-6 mt-12">
                            Structure of BNS
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Bharatiya Nyaya Sanhita contains 358 sections organized into 20 chapters,
                            compared to IPC&apos;s 511 sections. The reduction in number doesn&apos;t mean fewer
                            provisions - many sections have been consolidated, modernized, and streamlined
                            for clarity.
                        </p>

                        <div className="bg-navy-900 text-white p-8 rounded-lg my-8">
                            <h3 className="font-serif text-2xl font-bold mb-4">
                                Significant Changes
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <div className="h-2 w-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Sedition law (IPC 124A) abolished</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="h-2 w-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>New provisions for mob lynching and organized crime</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="h-2 w-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Enhanced punishments for crimes against women and children</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="h-2 w-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Provisions for cybercrimes and digital offenses</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <div className="h-2 w-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                                    <span>Community service as a form of punishment introduced</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                        <p className="text-sm text-amber-900 leading-relaxed">
                            <strong>Note:</strong> This information is provided for general educational purposes only.
                            For specific legal advice or clarification on how BNS applies to your situation,
                            please consult a qualified advocate.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
