import { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Contact Us - KVNR Law Associates",
    description: "Get in touch with KVNR Law Associates for legal consultation and inquiries. Contact us via phone, email, or visit our office.",
};

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-900 to-charcoal-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <MessageCircle className="h-16 w-16 text-gold-500 mx-auto mb-6" />
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            We&apos;re here to help. Reach out for consultation requests and general inquiries.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Cards */}
                        <div className="space-y-6">
                            <div>
                                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    For general consultation requests and appointment scheduling, please contact us
                                    through any of the following methods. We aim to respond to all inquiries within 24-48 hours.
                                </p>
                            </div>

                            <Card className="border-l-4 border-navy-900">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-navy-900 rounded-lg flex-shrink-0">
                                        <Phone className="h-7 w-7 text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-navy-900 mb-2">Phone</h3>
                                        <a
                                            href="tel:+916305776039"
                                            className="text-gray-700 hover:text-gold-600 transition-smooth text-lg font-medium"
                                        >
                                            +91 6305776039
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Monday - Saturday: 9:00 AM - 6:00 PM
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="border-l-4 border-gold-500">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-navy-900 rounded-lg flex-shrink-0">
                                        <Mail className="h-7 w-7 text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-navy-900 mb-2">Email</h3>
                                        <a
                                            href="mailto:kvnarasimharao1999@gmail.com"
                                            className="text-gray-700 hover:text-gold-600 transition-smooth break-all"
                                        >
                                            kvnarasimharao1999@gmail.com
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">
                                            We&apos;ll respond within 24-48 hours
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="border-l-4 border-green-500">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-green-600 rounded-lg flex-shrink-0">
                                        <MessageCircle className="h-7 w-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-navy-900 mb-2">WhatsApp</h3>
                                        <a
                                            href="https://wa.me/916305776039?text=Hello,%20I%20would%20like%20to%20request%20a%20consultation."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-green-600 transition-smooth"
                                        >
                                            Click to chat with us
                                        </a>
                                        <p className="text-sm text-gray-500 mt-1">
                                            Quick response during business hours
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        {/* Office Location */}
                        <div>
                            <Card className="h-full bg-gray-50">
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="p-3 bg-navy-900 rounded-lg flex-shrink-0">
                                        <MapPin className="h-7 w-7 text-gold-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-navy-900 mb-2">Office Address</h3>
                                        <address className="not-italic text-gray-700 leading-relaxed">
                                            Opposite Junior Civil Judge Court,<br />
                                            Singarayakonda,<br />
                                            Prakasam District,<br />
                                            Andhra Pradesh
                                        </address>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-6 mt-6">
                                    <h4 className="font-semibold text-navy-900 mb-4">Office Hours</h4>
                                    <div className="space-y-2 text-sm text-gray-700">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday:</span>
                                            <span className="font-medium">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday:</span>
                                            <span className="font-medium">9:00 AM - 2:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday:</span>
                                            <span className="font-medium text-red-600">Closed</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-6 mt-6">
                                    <p className="text-sm text-gray-600">
                                        <strong className="text-navy-900">Note:</strong> Office visits are by appointment only.
                                        Please call ahead or use our{" "}
                                        <a href="/consultation" className="text-gold-600 hover:underline">
                                            online consultation request
                                        </a>
                                        {" "}form to schedule a meeting.
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                        <h3 className="font-semibold text-amber-900 mb-3">Important Notice</h3>
                        <p className="text-sm text-amber-900 leading-relaxed">
                            As per Bar Council of India rules, KVNR Law Associates does not advertise or solicit work.
                            Any communication through this website or other channels is for informational and
                            consultation scheduling purposes only. It does not constitute legal advice. For specific
                            legal guidance related to your situation, please schedule a formal consultation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
