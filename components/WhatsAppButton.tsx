"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "916305776039";
    const message = encodeURIComponent("Hello, I would like to request a consultation.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-smooth animate-pulse-slow hover:scale-110"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
        </a>
    );
}
