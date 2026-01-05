"use client";

import { useState, useMemo } from "react";
import { Search, Filter, X, RotateCcw } from "lucide-react";
import { bnsSections, BNSSection } from "@/lib/bns-data";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ImportantSectionsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState<string>("All");
    const [typeFilter, setTypeFilter] = useState<string>("All");
    const [sortBy, setSortBy] = useState<"ipc" | "bns">("ipc");

    // Filter and search logic
    const filteredSections = useMemo(() => {
        let filtered = bnsSections;

        // Apply category filter
        if (categoryFilter !== "All") {
            filtered = filtered.filter((section) => section.category === categoryFilter);
        }

        // Apply type filter
        if (typeFilter !== "All") {
            filtered = filtered.filter((section) => section.type === typeFilter);
        }

        // Apply search query
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (section) =>
                    section.ipcSection.toLowerCase().includes(query) ||
                    section.bnsSection.toLowerCase().includes(query) ||
                    section.offense.toLowerCase().includes(query)
            );
        }

        // Apply sorting
        filtered.sort((a, b) => {
            if (sortBy === "ipc") {
                return a.ipcSection.localeCompare(b.ipcSection);
            } else {
                return a.bnsSection.localeCompare(b.bnsSection);
            }
        });

        return filtered;
    }, [searchQuery, categoryFilter, typeFilter, sortBy]);

    const resetFilters = () => {
        setSearchQuery("");
        setCategoryFilter("All");
        setTypeFilter("All");
        setSortBy("ipc");
    };

    const getTypeBadgeColor = (type: string) => {
        switch (type) {
            case "IPC→BNS":
                return "bg-blue-100 text-blue-800";
            case "New BNS":
                return "bg-green-100 text-green-800";
            case "IPC Removed":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    const getCategoryBadgeColor = (category: string) => {
        switch (category) {
            case "Body":
                return "bg-purple-100 text-purple-800";
            case "Women":
                return "bg-pink-100 text-pink-800";
            case "Property":
                return "bg-orange-100 text-orange-800";
            case "Public Order":
                return "bg-indigo-100 text-indigo-800";
            case "New BNS":
                return "bg-green-100 text-green-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-900 to-charcoal-800 text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                            Important BNS Sections
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Search and explore 55+ critical sections with IPC comparison
                        </p>
                    </div>
                </div>
            </section>

            {/* Search and Filters */}
            <section className="sticky top-20 z-30 bg-white shadow-md py-6 border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <div className="mb-4">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search by IPC number, BNS number, or offense name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 focus:border-transparent text-base"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Filters Row */}
                    <div className="flex flex-wrap gap-4 items-center">
                        {/* Category Filter */}
                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <select
                                value={categoryFilter}
                                onChange={(e) => setCategoryFilter(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 text-sm"
                            >
                                <option value="All">All Categories</option>
                                <option value="Body">Offenses against Body</option>
                                <option value="Women">Offenses against Women</option>
                                <option value="Property">Property Offenses</option>
                                <option value="Public Order">Public Order</option>
                                <option value="New BNS">New BNS Provisions</option>
                            </select>
                        </div>

                        {/* Type Filter */}
                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Type
                            </label>
                            <select
                                value={typeFilter}
                                onChange={(e) => setTypeFilter(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 text-sm"
                            >
                                <option value="All">All Types</option>
                                <option value="IPC→BNS">IPC → BNS</option>
                                <option value="New BNS">New BNS Only</option>
                                <option value="IPC Removed">IPC Removed</option>
                            </select>
                        </div>

                        {/* Sort By */}
                        <div className="flex-1 min-w-[200px]">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Sort By
                            </label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as "ipc" | "bns")}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-900 text-sm"
                            >
                                <option value="ipc">IPC Number (Ascending)</option>
                                <option value="bns">BNS Number (Ascending)</option>
                            </select>
                        </div>

                        {/* Reset Button */}
                        <div className="flex-shrink-0 self-end">
                            <button
                                onClick={resetFilters}
                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center space-x-2 transition-smooth"
                            >
                                <RotateCcw className="h-4 w-4" />
                                <span className="text-sm font-medium">Reset</span>
                            </button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 text-sm text-gray-600">
                        Showing <span className="font-semibold">{filteredSections.length}</span> of{" "}
                        <span className="font-semibold">{bnsSections.length}</span> sections
                    </div>
                </div>
            </section>

            {/* Sections Display */}
            <section className="py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredSections.length === 0 ? (
                        <div className="text-center py-16">
                            <Filter className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="font-serif text-2xl text-gray-600 mb-2">No Results Found</h3>
                            <p className="text-gray-500 mb-6">
                                Try adjusting your search or filters
                            </p>
                            <Button onClick={resetFilters} variant="ghost">
                                Reset Filters
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {/* Desktop Table View */}
                            <div className="hidden lg:block overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead className="bg-navy-900 text-white sticky top-48 z-20">
                                        <tr>
                                            <th className="p-4 text-left text-sm font-semibold">IPC Section</th>
                                            <th className="p-4 text-left text-sm font-semibold">BNS Section</th>
                                            <th className="p-4 text-left text-sm font-semibold">Offense</th>
                                            <th className="p-4 text-left text-sm font-semibold">Key Difference</th>
                                            <th className="p-4 text-left text-sm font-semibold">Category</th>
                                            <th className="p-4 text-left text-sm font-semibold">Type</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {filteredSections.map((section) => (
                                            <tr
                                                key={section.id}
                                                className="hover:bg-gray-50 transition-colors"
                                            >
                                                <td className="p-4">
                                                    <span className="font-semibold text-navy-900">
                                                        {section.ipcSection}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <span className="font-semibold text-green-700">
                                                        {section.bnsSection}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <span className="text-gray-900">{section.offense}</span>
                                                </td>
                                                <td className="p-4">
                                                    <span className="text-gray-700 text-sm">
                                                        {section.keyDifference}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <span
                                                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryBadgeColor(
                                                            section.category
                                                        )}`}
                                                    >
                                                        {section.category}
                                                    </span>
                                                </td>
                                                <td className="p-4">
                                                    <span
                                                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(
                                                            section.type
                                                        )}`}
                                                    >
                                                        {section.type}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Card View */}
                            <div className="lg:hidden space-y-4">
                                {filteredSections.map((section) => (
                                    <Card key={section.id} className="space-y-3">
                                        <div className="flex justify-between items-start gap-2">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap gap-2 mb-2">
                                                    <span
                                                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(
                                                            section.type
                                                        )}`}
                                                    >
                                                        {section.type}
                                                    </span>
                                                    <span
                                                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryBadgeColor(
                                                            section.category
                                                        )}`}
                                                    >
                                                        {section.category}
                                                    </span>
                                                </div>
                                                <h3 className="font-semibold text-lg text-navy-900 mb-1">
                                                    {section.offense}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <p className="text-gray-500 text-xs mb-1">IPC Section</p>
                                                <p className="font-semibold text-navy-900">{section.ipcSection}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-xs mb-1">BNS Section</p>
                                                <p className="font-semibold text-green-700">{section.bnsSection}</p>
                                            </div>
                                        </div>

                                        <div className="border-t border-gray-200 pt-3">
                                            <p className="text-gray-500 text-xs mb-1">Key Difference</p>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                {section.keyDifference}
                                            </p>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                        <h3 className="font-semibold text-amber-900 mb-3">Educational Resource</h3>
                        <p className="text-sm text-amber-900 leading-relaxed">
                            This database is provided for general educational and informational purposes only.
                            Legal provisions are subject to judicial interpretation and amendments. For specific
                            legal advice or clarification on how these sections apply to your situation, please
                            consult a qualified advocate.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
