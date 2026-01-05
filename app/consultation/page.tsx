"use client";

import { useState, FormEvent } from "react";
import { Metadata } from "next";
import { FileText, CheckCircle2, AlertCircle } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const cities = [
    "Vijayawada",
    "Singarayakonda",
    "Ongole",
    "Kandukur",
    "Other",
];

const practiceAreas = [
    "Civil Law",
    "Criminal Law",
    "Family Law",
    "Property Law",
    "Labour & Service Law",
    "Corporate & Commercial Law",
    "Other",
];

export default function ConsultationPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        city: "",
        practiceArea: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/consultation", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({
                    fullName: "",
                    mobile: "",
                    city: "",
                    practiceArea: "",
                    message: "",
                });
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Network error. Please check your connection and try again.");
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (status === "success") {
        return (
            <div className="bg-white min-h-screen flex items-center justify-center px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-green-100 rounded-full">
                            <CheckCircle2 className="h-16 w-16 text-green-600" />
                        </div>
                    </div>
                    <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                        Request Received
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Thank you for your consultation request. We have received your information and
                        will contact you within 24-48 hours to discuss your legal matter.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 text-left mb-8">
                        <p className="text-sm text-amber-900">
                            <strong>Please note:</strong> This consultation request does not constitute legal
                            advice or create an attorney-client relationship. A formal engagement will be
                            established only after mutual agreement.
                        </p>
                    </div>
                    <Button onClick={() => setStatus("idle")}>
                        Submit Another Request
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-900 to-charcoal-800 text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <FileText className="h-16 w-16 text-gold-500 mx-auto mb-6" />
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Request Consultation
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Fill out the form below to request a consultation for general legal guidance
                        </p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Card>
                        {status === "error" && (
                            <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
                                <div className="flex items-start space-x-3">
                                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-red-800">{errorMessage}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-smooth"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Mobile Number */}
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mobile Number <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    required
                                    pattern="[0-9]{10}"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-smooth"
                                    placeholder="10-digit mobile number"
                                />
                                <p className="mt-1 text-xs text-gray-500">Enter 10-digit mobile number without +91</p>
                            </div>

                            {/* City */}
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                    City <span className="text-red-600">*</span>
                                </label>
                                <select
                                    id="city"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-smooth"
                                >
                                    <option value="">Select your city</option>
                                    {cities.map((city) => (
                                        <option key={city} value={city}>
                                            {city}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Practice Area */}
                            <div>
                                <label htmlFor="practiceArea" className="block text-sm font-medium text-gray-700 mb-2">
                                    Practice Area <span className="text-red-600">*</span>
                                </label>
                                <select
                                    id="practiceArea"
                                    name="practiceArea"
                                    required
                                    value={formData.practiceArea}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-smooth"
                                >
                                    <option value="">Select practice area</option>
                                    {practiceAreas.map((area) => (
                                        <option key={area} value={area}>
                                            {area}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message (Optional)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent transition-smooth resize-none"
                                    placeholder="Provide a brief description of your legal matter (optional)"
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    Do not include sensitive or confidential information
                                </p>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full"
                                    size="lg"
                                >
                                    {status === "loading" ? "Submitting..." : "Submit Consultation Request"}
                                </Button>
                            </div>
                        </form>
                    </Card>

                    {/* Disclaimer */}
                    <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-6">
                        <h3 className="font-semibold text-amber-900 mb-3">Important Notice</h3>
                        <ul className="text-sm text-amber-900 space-y-2">
                            <li>• This form is for consultation requests and appointment scheduling only</li>
                            <li>• Submitting this form does not create an attorney-client relationship</li>
                            <li>• Information provided is not confidential until a formal engagement is established</li>
                            <li>• We will contact you within 24-48 hours to discuss your matter</li>
                            <li>• This is not a platform for receiving legal advice</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
