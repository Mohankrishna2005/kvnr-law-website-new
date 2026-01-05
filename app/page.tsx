import Link from "next/link";
import { Scale, Users, Building, Briefcase, Home as HomeIcon, ShieldCheck, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const practiceAreas = [
    {
        icon: Scale,
        title: "Civil Law",
        description: "Comprehensive civil litigation and dispute resolution services.",
    },
    {
        icon: ShieldCheck,
        title: "Criminal Law",
        description: "Expert defense and prosecution representation in criminal matters.",
    },
    {
        icon: Users,
        title: "Family Law",
        description: "Sensitive handling of family matters, divorce, and child custody cases.",
    },
    {
        icon: HomeIcon,
        title: "Property Law",
        description: "Property disputes, documentation, and real estate legal services.",
    },
    {
        icon: Briefcase,
        title: "Labour & Service Law",
        description: "Employment disputes, service matters, and labor law compliance.",
    },
    {
        icon: Building,
        title: "Corporate & Commercial Law",
        description: "Business formation, contracts, and commercial legal advisory.",
    },
];

const locations = [
    { name: "Vijayawada", region: "Krishna District" },
    { name: "Singarayakonda", region: "Prakasam District" },
    { name: "Ongole", region: "Prakasam District" },
    { name: "Kandukur", region: "Prakasam District" },
];

export default function HomePage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-charcoal-800 text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                    <div className="text-center space-y-8 animate-fade-in">
                        <div className="flex justify-center mb-6">
                            <Scale className="h-16 w-16 md:h-20 md:w-20 text-gold-500" />
                        </div>

                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            KVNR Law Associates
                        </h1>

                        <p className="text-xl md:text-2xl lg:text-3xl text-gold-400 font-medium">
                            Ethical • Professional • Client-Focused
                        </p>

                        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 leading-relaxed">
                            Providing comprehensive legal services across Andhra Pradesh with integrity,
                            expertise, and dedication to justice.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <Link href="/consultation">
                                <Button size="lg" className="w-full sm:w-auto">
                                    Request Consultation
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button variant="ghost" size="lg" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white">
                                    Learn More About Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practice Areas Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                            Practice Areas
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive legal expertise across multiple domains
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {practiceAreas.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <Card key={index} hover className="text-center">
                                    <div className="flex justify-center mb-4">
                                        <div className="p-4 bg-navy-900 rounded-full">
                                            <Icon className="h-8 w-8 text-gold-500" />
                                        </div>
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">
                                        {area.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {area.description}
                                    </p>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/practice-areas">
                            <Button variant="secondary" size="lg">
                                View All Practice Areas
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
                            Our Locations
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Serving communities across Andhra Pradesh
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {locations.map((location, index) => (
                            <Card key={index} className="text-center">
                                <Building className="h-10 w-10 text-navy-900 mx-auto mb-4" />
                                <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">
                                    {location.name}
                                </h3>
                                <p className="text-gray-600 text-sm">{location.region}</p>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/locations">
                            <Button variant="ghost" size="lg">
                                View Location Details
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-navy-900 to-charcoal-800 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                        Need Legal Guidance?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                        For general consultation and appointment requests only.
                        We provide informational assistance to help you understand your legal options.
                    </p>
                    <Link href="/consultation">
                        <Button size="lg" variant="secondary">
                            Request a Consultation
                        </Button>
                    </Link>
                    <p className="mt-6 text-sm text-gray-400">
                        This does not constitute legal advice. Consultation is for informational purposes only.
                    </p>
                </div>
            </section>
        </div>
    );
}
