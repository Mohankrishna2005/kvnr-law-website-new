import { Metadata } from "next";
import { Scale, Users, Building, Briefcase, Home, ShieldCheck, FileText, Gavel } from "lucide-react";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Practice Areas - KVNR Law Associates",
    description: "Comprehensive legal services including Civil Law, Criminal Law, Family Law, Property Law, Labour & Service Law, and Corporate & Commercial Law.",
};

const practiceAreas = [
    {
        icon: Scale,
        title: "Civil Law",
        description: "Comprehensive civil litigation services covering disputes, contracts, torts, and property matters.",
        details: [
            "Civil litigation and dispute resolution",
            "Contract disputes and enforcement",
            "Tort claims and damages",
            "Money recovery suits",
            "Injunction applications",
            "Appeals and revisions",
        ],
    },
    {
        icon: ShieldCheck,
        title: "Criminal Law",
        description: "Expert representation in criminal matters at all stages of proceedings.",
        details: [
            "Criminal defense representation",
            "Bail applications",
            "Trial court proceedings",
            "Criminal appeals",
            "Quashing petitions",
            "Anticipatory bail",
        ],
    },
    {
        icon: Users,
        title: "Family Law",
        description: "Sensitive and confidential handling of family matters with compassion and expertise.",
        details: [
            "Divorce and judicial separation",
            "Child custody and visitation rights",
            "Maintenance and alimony",
            "Domestic violence cases",
            "Adoption proceedings",
            "Matrimonial disputes",
        ],
    },
    {
        icon: Home,
        title: "Property Law",
        description: "Complete property legal services from documentation to dispute resolution.",
        details: [
            "Property documentation and verification",
            "Title disputes and claims",
            "Partition suits",
            "Land acquisition matters",
            "Real estate transactions",
            "Boundary disputes",
        ],
    },
    {
        icon: Briefcase,
        title: "Labour & Service Law",
        description: "Comprehensive representation in employment and service-related matters.",
        details: [
            "Employment disputes",
            "Service termination matters",
            "Industrial disputes",
            "Labour law compliance",
            "Workplace harassment cases",
            "Provident fund and gratuity claims",
        ],
    },
    {
        icon: Building,
        title: "Corporate & Commercial Law",
        description: "Business legal services for startups, SMEs, and established corporations.",
        details: [
            "Company formation and registration",
            "Commercial contract drafting",
            "Business dispute resolution",
            "Corporate governance advisory",
            "Mergers and acquisitions",
            "Regulatory compliance",
        ],
    },
];

export default function PracticeAreasPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-900 to-charcoal-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Gavel className="h-16 w-16 text-gold-500 mx-auto mb-6" />
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Practice Areas
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Comprehensive legal expertise across multiple domains to serve your diverse needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Practice Areas Grid */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {practiceAreas.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <Card key={index} className="border-l-4 border-navy-900">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                        <div className="lg:col-span-4">
                                            <div className="flex items-start space-x-4">
                                                <div className="p-3 bg-navy-900 rounded-lg flex-shrink-0">
                                                    <Icon className="h-8 w-8 text-gold-500" />
                                                </div>
                                                <div>
                                                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                                                        {area.title}
                                                    </h2>
                                                    <p className="text-gray-600 leading-relaxed">
                                                        {area.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:col-span-8">
                                            <h3 className="font-semibold text-lg text-navy-900 mb-4">
                                                Services Include:
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {area.details.map((detail, idx) => (
                                                    <div key={idx} className="flex items-start space-x-2">
                                                        <div className="h-2 w-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                                                        <span className="text-gray-700">{detail}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                        Need Legal Assistance?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Our experienced team is ready to provide informational consultation on your legal matters.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 text-left">
                        <p className="text-sm text-amber-900">
                            <strong>Note:</strong> The information provided is for general awareness only.
                            This does not constitute legal advice. For specific legal guidance, please schedule a consultation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
