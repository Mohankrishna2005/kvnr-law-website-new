import { Metadata } from "next";
import { Scale, Award, Target, Heart } from "lucide-react";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "About Us - KVNR Law Associates",
    description: "Learn about KVNR Law Associates - our mission, values, and commitment to providing ethical and professional legal services in Andhra Pradesh.",
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-900 to-charcoal-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            About KVNR Law Associates
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Dedicated to providing ethical, professional, and client-focused legal services
                            across Andhra Pradesh.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <Scale className="h-16 w-16 text-navy-900 mx-auto mb-6" />
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                                Our Mission
                            </h2>
                        </div>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                KVNR Law Associates is committed to upholding the highest standards of legal practice
                                while serving the diverse legal needs of individuals, families, and businesses across
                                Andhra Pradesh. Our firm was established on the principles of integrity, expertise,
                                and unwavering dedication to justice.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                We believe that access to quality legal representation is fundamental to a just society.
                                Our approach combines deep legal knowledge with compassionate client service, ensuring
                                that every matter receives the attention and expertise it deserves.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                            Our Core Values
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-navy-900 rounded-full">
                                    <Award className="h-10 w-10 text-gold-500" />
                                </div>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                Ethical Practice
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We adhere strictly to the Bar Council of India guidelines and maintain the highest
                                ethical standards in all our professional dealings.
                            </p>
                        </Card>

                        <Card className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-navy-900 rounded-full">
                                    <Target className="h-10 w-10 text-gold-500" />
                                </div>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                Professional Excellence
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Continuous learning and staying updated with legal developments ensures we provide
                                the most current and effective legal solutions.
                            </p>
                        </Card>

                        <Card className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-navy-900 rounded-full">
                                    <Heart className="h-10 w-10 text-gold-500" />
                                </div>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                Client-Focused Service
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every client matters. We provide personalized attention and work tirelessly to
                                understand and address your unique legal needs.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
                            Our Expertise
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white border-l-4 border-navy-900 p-6 shadow-sm">
                                <h3 className="font-semibold text-xl text-navy-900 mb-2">
                                    Comprehensive Legal Coverage
                                </h3>
                                <p className="text-gray-600">
                                    From civil litigation to corporate matters, we handle a wide spectrum of legal
                                    issues with equal proficiency and dedication.
                                </p>
                            </div>
                            <div className="bg-white border-l-4 border-gold-500 p-6 shadow-sm">
                                <h3 className="font-semibold text-xl text-navy-900 mb-2">
                                    Local Knowledge
                                </h3>
                                <p className="text-gray-600">
                                    Deep understanding of Andhra Pradesh legal landscape and court procedures
                                    enables efficient case handling.
                                </p>
                            </div>
                            <div className="bg-white border-l-4 border-navy-900 p-6 shadow-sm">
                                <h3 className="font-semibold text-xl text-navy-900 mb-2">
                                    Strategic Approach
                                </h3>
                                <p className="text-gray-600">
                                    We develop tailored legal strategies that align with your objectives and
                                    maximize favorable outcomes.
                                </p>
                            </div>
                            <div className="bg-white border-l-4 border-gold-500 p-6 shadow-sm">
                                <h3 className="font-semibold text-xl text-navy-900 mb-2">
                                    Clear Communication
                                </h3>
                                <p className="text-gray-600">
                                    Legal matters explained in plain language, keeping you informed and empowered
                                    throughout the process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 md:py-20 bg-navy-900 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                        Committed to Your Legal Success
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Our firm is built on the foundation of trust, expertise, and dedication to each client we serve.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 text-left max-w-2xl mx-auto">
                        <p className="text-sm text-amber-900">
                            <strong>Disclaimer:</strong> In compliance with Bar Council of India rules, we do not
                            advertise or solicit work. This information is provided for educational purposes only.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
