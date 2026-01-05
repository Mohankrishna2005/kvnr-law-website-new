import { Metadata } from "next";
import { AlertTriangle, Scale } from "lucide-react";

export const metadata: Metadata = {
    title: "Disclaimer - KVNR Law Associates",
    description: "Important disclaimer and Bar Council of India compliance information for KVNR Law Associates website.",
};

export default function DisclaimerPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-900 to-charcoal-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <AlertTriangle className="h-16 w-16 text-gold-500 mx-auto mb-6" />
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Disclaimer
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Important information regarding the use of this website
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Disclaimer Content */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* BCI Compliance */}
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-8 mb-12 rounded-r-lg">
                        <div className="flex items-start space-x-4">
                            <Scale className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-amber-900 mb-4">
                                    Bar Council of India Compliance
                                </h2>
                                <div className="prose prose-lg max-w-none">
                                    <p className="text-amber-900 leading-relaxed mb-4">
                                        As per the rules of the <strong>Bar Council of India</strong>, KVNR Law Associates
                                        does not advertise or solicit work.
                                    </p>
                                    <p className="text-amber-900 leading-relaxed mb-4">
                                        The information on this website is provided solely for general informational purposes.
                                    </p>
                                    <p className="text-amber-900 leading-relaxed">
                                        By accessing this website, the user acknowledges that the information is accessed voluntarily.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Disclaimers */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                No Legal Advice
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                The content on this website is for general information purposes only and does not
                                constitute legal advice. You should not act or refrain from acting based on any
                                content included on this website without seeking legal advice from qualified counsel.
                                Each legal matter is unique and requires individual assessment.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                No Attorney-Client Relationship
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Accessing this website or communicating with KVNR Law Associates through this website,
                                email, or phone does not create an attorney-client relationship. An attorney-client
                                relationship is established only after a formal engagement agreement is signed and
                                accepted by both parties.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                No Guarantees or Warranties
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                KVNR Law Associates makes no representations, warranties, or guarantees about the
                                accuracy, completeness, or adequacy of the information contained on this website.
                                We do not guarantee any specific legal outcome or result. Every legal matter depends
                                on its unique facts and applicable law.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                Information Accuracy
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                While we strive to keep the information on this website current and accurate, legal
                                rules and regulations change frequently. The information provided may not reflect
                                the most recent legal developments. We recommend verifying any information with
                                qualified legal counsel before taking action.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                External Links
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                This website may contain links to external websites for informational purposes.
                                KVNR Law Associates does not endorse or take responsibility for the content,
                                accuracy, or opinions expressed on external websites. Use of external links is
                                at your own risk.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                Communication Confidentiality
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Communications through this website or email may not be secure or confidential.
                                Do not send sensitive or confidential information through this website unless an
                                attorney-client relationship has been established. Until a formal relationship is
                                established, any information you send may not be protected by attorney-client privilege.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                Limitation of Liability
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                KVNR Law Associates and its associates shall not be liable for any loss or damage
                                arising from the use of this website or reliance on information contained herein.
                                This includes, but is not limited to, direct, indirect, incidental, punitive, and
                                consequential damages.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                Jurisdiction
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                KVNR Law Associates primarily practices in the courts and tribunals of Andhra Pradesh,
                                India. The information on this website primarily relates to Indian law. Laws vary
                                significantly by jurisdiction, and this information may not be applicable in other
                                jurisdictions.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                Consultation Requests
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Consultation request forms and contact options on this website are provided for
                                scheduling convenience only. Submission of a consultation request does not create
                                an attorney-client relationship and does not obligate KVNR Law Associates to
                                represent you. We reserve the right to decline representation for any reason,
                                including conflicts of interest or other professional considerations.
                            </p>
                        </div>
                    </div>

                    {/* Final Notice */}
                    <div className="mt-12 bg-navy-900 text-white p-8 rounded-lg">
                        <h2 className="font-serif text-2xl font-bold mb-4">
                            Acknowledgment
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            By using this website, you acknowledge that you have read, understood, and agree to
                            be bound by this disclaimer. If you do not agree with any part of this disclaimer,
                            please do not use this website. For specific legal advice tailored to your situation,
                            please contact us to schedule a formal consultation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
