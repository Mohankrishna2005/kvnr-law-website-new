import { Metadata } from "next";
import { MapPin, Phone, Mail, Building, Clock } from "lucide-react";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Our Locations - KVNR Law Associates",
    description: "KVNR Law Associates serves clients across Vijayawada, Singarayakonda, Ongole, and Kandukur in Andhra Pradesh.",
};

const locations = [
    {
        name: "Vijayawada",
        region: "Krishna District",
        description: "Serving the commercial capital of Andhra Pradesh with comprehensive legal services.",
        highlights: ["High Court matters", "Corporate law", "Commercial disputes"],
    },
    {
        name: "Singarayakonda",
        region: "Prakasam District",
        description: "Our main office providing full-spectrum legal services to the local community.",
        address: "Opposite Junior Civil Judge Court, Singarayakonda, Prakasam District",
        highlights: ["Civil litigation", "Family law", "Property matters"],
        isMainOffice: true,
    },
    {
        name: "Ongole",
        region: "Prakasam District",
        description: "District headquarters location offering diverse legal representation services.",
        highlights: ["Criminal law", "Labour disputes", "Appeals"],
    },
    {
        name: "Kandukur",
        region: "Prakasam District",
        description: "Providing accessible legal services to the coastal region communities.",
        highlights: ["Civil disputes", "Property law", "Local court matters"],
    },
];

export default function LocationsPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-900 to-charcoal-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <MapPin className="h-16 w-16 text-gold-500 mx-auto mb-6" />
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Our Locations
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Serving communities across Andhra Pradesh with accessible legal services
                        </p>
                    </div>
                </div>
            </section>

            {/* Locations Grid */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {locations.map((location, index) => (
                            <Card
                                key={index}
                                className={`${location.isMainOffice ? 'border-2 border-gold-500 relative' : ''}`}
                            >
                                {location.isMainOffice && (
                                    <div className="absolute -top-3 left-6">
                                        <span className="bg-gold-500 text-navy-900 text-xs font-bold px-3 py-1 rounded-full">
                                            MAIN OFFICE
                                        </span>
                                    </div>
                                )}

                                <div className="flex items-start space-x-4 mb-4">
                                    <div className="p-3 bg-navy-900 rounded-lg flex-shrink-0">
                                        <Building className="h-8 w-8 text-gold-500" />
                                    </div>
                                    <div>
                                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-900">
                                            {location.name}
                                        </h2>
                                        <p className="text-gold-600 font-medium">{location.region}</p>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {location.description}
                                </p>

                                {location.address && (
                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                        <div className="flex items-start space-x-3">
                                            <MapPin className="h-5 w-5 text-navy-900 flex-shrink-0 mt-0.5" />
                                            <address className="not-italic text-gray-700 text-sm">
                                                {location.address}
                                            </address>
                                        </div>
                                    </div>
                                )}

                                <div className="border-t border-gray-200 pt-4 mt-4">
                                    <h3 className="font-semibold text-sm text-navy-900 mb-3">
                                        Practice Focus:
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {location.highlights.map((highlight, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-navy-900 text-white text-xs px-3 py-1.5 rounded-full"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-8 text-center">
                        Get in Touch
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-navy-900 rounded-lg">
                                    <Phone className="h-6 w-6 text-gold-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-navy-900 mb-1">Phone</h3>
                                    <a
                                        href="tel:+916305776039"
                                        className="text-gray-700 hover:text-gold-600 transition-smooth"
                                    >
                                        +91 6305776039
                                    </a>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-navy-900 rounded-lg">
                                    <Mail className="h-6 w-6 text-gold-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                                    <a
                                        href="mailto:kvnarasimharao1999@gmail.com"
                                        className="text-gray-700 hover:text-gold-600 transition-smooth text-sm break-all"
                                    >
                                        kvnarasimharao1999@gmail.com
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </div>

                    <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6">
                        <p className="text-sm text-amber-900">
                            <strong>Consultation Requests:</strong> For appointment scheduling and general inquiries,
                            please contact us via phone or email. Office visits are by appointment only.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
