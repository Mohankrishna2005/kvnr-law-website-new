import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DisclaimerModal from "@/components/DisclaimerModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
    metadataBase: new URL('https://kvnrlawassociates-new.vercel.app'),
    title: {
        default: "KVNR Law Associates - Premium Legal Services in Andhra Pradesh",
        template: "%s | KVNR Law Associates"
    },
    description: "KVNR Law Associates provides professional legal services in Civil, Criminal, Family, Property, and Corporate law. Based in Singarayakonda, Prakasam, serving Vijayawada, Ongole, and Kandukur.",
    keywords: ["law firm Andhra Pradesh", "K.V. Narasimha Rao advocate", "best lawyers in Singarayakonda", "legal consultants Ongole", "criminal defense lawyer Prakasam", "civil litigation Vijayawada", "BNS guide India", "legal consultation Andhra Pradesh"],
    authors: [{ name: "KVNR Law Associates" }],
    creator: "KMK Solutions",
    publisher: "KVNR Law Associates",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "KVNR Law Associates - Legal Authority in Andhra Pradesh",
        description: "Ethical • Professional • Client-Focused Legal Services across Andhra Pradesh.",
        url: 'https://kvnrlawassociates-new.vercel.app',
        siteName: 'KVNR Law Associates',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KVNR Law Associates',
        description: 'Professional Legal Services in Andhra Pradesh',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className={`${inter.className} antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LegalService",
                            "name": "KVNR Law Associates",
                            "image": "https://kvnrlawassociates-new.vercel.app/logo.png",
                            "@id": "https://kvnrlawassociates-new.vercel.app",
                            "url": "https://kvnrlawassociates-new.vercel.app",
                            "telephone": "+91 6305776039",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Opposite Junior Civil Judge Court",
                                "addressLocality": "Singarayakonda",
                                "addressRegion": "Andhra Pradesh",
                                "postalCode": "523101",
                                "addressCountry": "IN"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 15.2500,
                                "longitude": 80.0333
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday"
                                ],
                                "opens": "09:00",
                                "closes": "18:00"
                            },
                            "sameAs": []
                        })
                    }}
                />
                <DisclaimerModal />
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
