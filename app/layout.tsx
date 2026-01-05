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
    title: "KVNR Law Associates - Legal Services in Andhra Pradesh",
    description: "KVNR Law Associates provides professional legal services in Civil, Criminal, Family, Property, Labour, and Corporate law across Vijayawada, Singarayakonda, Ongole, and Kandukur.",
    keywords: "law firm, legal services, Andhra Pradesh, Vijayawada, Singarayakonda, civil law, criminal law, property law",
    openGraph: {
        title: "KVNR Law Associates",
        description: "Ethical • Professional • Client-Focused Legal Services",
        type: "website",
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
