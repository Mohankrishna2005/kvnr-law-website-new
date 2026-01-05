"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function DisclaimerModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already accepted the disclaimer
        const hasAccepted = localStorage.getItem("kvnr-disclaimer-accepted");
        if (!hasAccepted) {
            setIsOpen(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("kvnr-disclaimer-accepted", "true");
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
                <div className="sticky top-0 bg-navy-900 text-white p-6 rounded-t-lg">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold">
                        Important Disclaimer
                    </h2>
                </div>

                <div className="p-6 md:p-8 space-y-6">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                            As per the rules of the <strong>Bar Council of India</strong>, KVNR Law Associates does not advertise or solicit work.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                            The information on this website is provided solely for general informational purposes.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                            By accessing this website, the user acknowledges that the information is accessed voluntarily.
                        </p>
                    </div>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
                        <p className="text-sm md:text-base text-amber-800">
                            <strong>Please note:</strong> This website does not provide legal advice.
                            For specific legal guidance, please consult with an advocate directly.
                        </p>
                    </div>

                    <button
                        onClick={handleAccept}
                        className="w-full bg-navy-900 hover:bg-navy-800 text-white font-semibold py-4 px-6 rounded-lg transition-smooth text-base md:text-lg"
                    >
                        I understand and wish to proceed
                    </button>
                </div>
            </div>
        </div>
    );
}
