"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, User, Send, AlertTriangle, BookOpen } from "lucide-react";
import { legalFAQs, searchFAQs, FAQ } from "@/lib/legal-faqs";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface Message {
    id: number;
    type: "user" | "bot";
    content: string;
    faqs?: FAQ[];
}

export default function AILegalAssistantPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            type: "bot",
            content: "Hello! I'm your legal information assistant. I can provide general information about Indian laws, legal procedures, and the new Bharatiya Nyaya Sanhita (BNS). Please note that I provide educational information only, not legal advice. How can I help you today?",
        },
    ]);
    const [input, setInput] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("All");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: messages.length + 1,
            type: "user",
            content: input,
        };

        setMessages((prev) => [...prev, userMessage]);

        // Check for disallowed questions (case-specific advice)
        const disallowedPhrases = [
            "my case",
            "what should i do",
            "help me with",
            "my situation",
            "can i win",
            "will i get",
            "my chances",
            "suggest",
            "recommend",
            "advise me",
        ];

        const lowerInput = input.toLowerCase();
        const isDisallowed = disallowedPhrases.some((phrase) =>
            lowerInput.includes(phrase)
        );

        if (isDisallowed) {
            const botResponse: Message = {
                id: messages.length + 2,
                type: "bot",
                content: "This platform provides only general legal information. For legal advice specific to your situation, please consult an advocate. I can help answer general questions about laws, legal procedures, and terminology.",
            };
            setMessages((prev) => [...prev, botResponse]);
            setInput("");
            return;
        }

        // Search FAQs
        const results = searchFAQs(input, categoryFilter);

        let botResponse: Message;

        if (results.length > 0) {
            botResponse = {
                id: messages.length + 2,
                type: "bot",
                content: `I found ${results.length} relevant information ${results.length === 1 ? "entry" : "entries"
                    } that might help:`,
                faqs: results.slice(0, 3), // Show top 3 results
            };
        } else {
            botResponse = {
                id: messages.length + 2,
                type: "bot",
                content: `I couldn't find specific information matching your query. Here are some related topics you might find helpful:`,
                faqs: legalFAQs.slice(0, 3),
            };
        }

        setMessages((prev) => [...prev, botResponse]);
        setInput("");
    };

    const handleQuickQuestion = (question: string) => {
        setInput(question);
    };

    const quickQuestions = [
        "What is BNS?",
        "What is an FIR?",
        "How to file a civil suit?",
        "What are my rights if arrested?",
        "What is bail?",
    ];

    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-900 to-charcoal-800 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Bot className="h-12 w-12 text-gold-500 mx-auto mb-4" />
                        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                            AI Legal Information Assistant
                        </h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Get general information about Indian laws and legal procedures
                        </p>
                    </div>
                </div>
            </section>

            {/* Important Disclaimer */}
            <section className="bg-amber-50 border-b-4 border-amber-500 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-amber-900 mb-1">
                                This is NOT Legal Advice
                            </h3>
                            <p className="text-sm text-amber-900">
                                This assistant provides only general legal information for educational purposes.
                                It does not analyze your specific case or provide legal advice. For advice tailored
                                to your situation, please consult with an advocate.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Chat Container */}
            <section className="flex-1 py-8 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Filter by Topic
                        </label>
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900"
                        >
                            <option value="All">All Topics</option>
                            <option value="General">General Legal Information</option>
                            <option value="BNS">Bharatiya Nyaya Sanhita (BNS)</option>
                            <option value="Criminal">Criminal Law</option>
                            <option value="Civil">Civil Law</option>
                            <option value="Family">Family Law</option>
                            <option value="Property">Property Law</option>
                        </select>
                    </div>

                    {/* Messages */}
                    <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mb-6 min-h-[400px] max-h-[600px] overflow-y-auto">
                        <div className="space-y-4">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`flex items-start space-x-3 max-w-[85%] ${message.type === "user" ? "flex-row-reverse space-x-reverse" : ""
                                            }`}
                                    >
                                        <div
                                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.type === "user"
                                                    ? "bg-navy-900"
                                                    : "bg-gold-500"
                                                }`}
                                        >
                                            {message.type === "user" ? (
                                                <User className="h-5 w-5 text-white" />
                                            ) : (
                                                <Bot className="h-5 w-5 text-white" />
                                            )}
                                        </div>
                                        <div>
                                            <div
                                                className={`rounded-lg p-4 ${message.type === "user"
                                                        ? "bg-navy-900 text-white"
                                                        : "bg-gray-100 text-gray-900"
                                                    }`}
                                            >
                                                <p className="text-sm md:text-base leading-relaxed">
                                                    {message.content}
                                                </p>
                                            </div>
                                            {message.faqs && message.faqs.length > 0 && (
                                                <div className="mt-3 space-y-2">
                                                    {message.faqs.map((faq) => (
                                                        <Card key={faq.id} className="bg-white border border-gray-200">
                                                            <div className="flex items-start space-x-2 mb-2">
                                                                <BookOpen className="h-5 w-5 text-navy-900 flex-shrink-0 mt-0.5" />
                                                                <h4 className="font-semibold text-navy-900">
                                                                    {faq.question}
                                                                </h4>
                                                            </div>
                                                            <p className="text-sm text-gray-700 leading-relaxed ml-7">
                                                                {faq.answer}
                                                            </p>
                                                            <div className="mt-2 ml-7">
                                                                <span className="inline-block px-2 py-1 bg-navy-100 text-navy-800 text-xs rounded-full">
                                                                    {faq.category}
                                                                </span>
                                                            </div>
                                                        </Card>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                    </div>

                    {/* Quick Questions */}
                    {messages.length === 1 && (
                        <div className="mb-6">
                            <p className="text-sm font-medium text-gray-700 mb-3">
                                Quick Questions:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {quickQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleQuickQuestion(question)}
                                        className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 hover:border-navy-900 transition-smooth"
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Input Area */}
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Ask about legal terms, procedures, or BNS..."
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent"
                            />
                            <Button onClick={handleSend} disabled={!input.trim()}>
                                <Send className="h-5 w-5" />
                            </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">
                            Ask general questions about laws and legal procedures. Do not share case-specific details.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer Disclaimer */}
            <section className="bg-navy-900 text-white py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="font-semibold text-lg mb-3">
                        Remember: This is Information, Not Advice
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        This AI assistant provides general legal information based on a knowledge database.
                        Laws are complex and fact-specific. Every legal situation is unique. For personalized
                        legal advice and representation, please{" "}
                        <a href="/consultation" className="text-gold-500 underline">
                            consult with an advocate
                        </a>
                        .
                    </p>
                </div>
            </section>
        </div>
    );
}
