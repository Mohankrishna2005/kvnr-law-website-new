import { Metadata } from "next";
import { GitCompare, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "IPC vs BNS Comparison - Key Differences | KVNR Law Associates",
    description: "Detailed comparison between Indian Penal Code (IPC) and Bharatiya Nyaya Sanhita (BNS) highlighting major changes",
};

export default function IPCvsBNSPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-navy-900 to-charcoal-800 text-white py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <GitCompare className="h-16 w-16 text-gold-500 mx-auto mb-6" />
                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                            IPC vs BNS Comparison
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Understanding the Transition from Colonial Law to Modern Indian Criminal Code
                        </p>
                    </div>
                </div>
            </section>

            {/* Overview Comparison */}
            <section className="py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">
                        At a Glance
                    </h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <Card className="border-2 border-gray-300">
                            <div className="text-center mb-6">
                                <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                                    <XCircle className="h-10 w-10 text-gray-600" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-gray-700">
                                    Indian Penal Code (IPC)
                                </h3>
                                <p className="text-sm text-gray-500 mt-2">1860 - 2024</p>
                            </div>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start space-x-2">
                                    <ArrowRight className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                                    <span>Enacted in 1860 during British colonial rule</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <ArrowRight className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                                    <span>511 sections across 23 chapters</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <ArrowRight className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                                    <span>Based on 19th-century legal framework</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <ArrowRight className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                                    <span>Limited provisions for cybercrimes</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <ArrowRight className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                                    <span>Included sedition law (Section 124A)</span>
                                </li>
                            </ul>
                        </Card>

                        <Card className="border-2 border-green-500">
                            <div className="text-center mb-6">
                                <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-green-700">
                                    Bharatiya Nyaya Sanhita (BNS)
                                </h3>
                                <p className="text-sm text-green-600 mt-2">2024 onwards</p>
                            </div>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start space-x-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Enacted in 2023, effective July 1, 2024</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>358 sections across 20 chapters (consolidated)</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Modern, India-centric legal framework</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Comprehensive cybercrime provisions</span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>Sedition removed, replaced with specific provisions</span>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    {/* Major Changes */}
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-8">
                        Major Changes & Improvements
                    </h2>

                    <div className="space-y-6">
                        <Card className="border-l-4 border-red-600">
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                1. Sedition Law Abolished
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-sm font-semibold text-gray-600 mb-2">IPC Section 124A:</p>
                                    <p className="text-gray-700">
                                        Broad sedition law used to criminalize dissent and criticism of government.
                                        Often criticized for colonial-era mindset and misuse.
                                    </p>
                                </div>
                                <div className="bg-green-50 p-4 rounded">
                                    <p className="text-sm font-semibold text-green-700 mb-2">BNS Change:</p>
                                    <p className="text-gray-700">
                                        Completely abolished. Replaced with narrower provisions (BNS 113) targeting
                                        specific acts endangering sovereignty and unity.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="border-l-4 border-purple-600">
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                2. New Offenses Introduced
                            </h3>
                            <div className="bg-purple-50 p-6 rounded">
                                <ul className="space-y-3">
                                    <li className="flex items-start space-x-3">
                                        <div className="h-2 w-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <strong className="text-navy-900">Mob Lynching (BNS 103(2)):</strong>
                                            <span className="text-gray-700"> Specific provision with death penalty or life imprisonment</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="h-2 w-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <strong className="text-navy-900">Organized Crime (BNS 111):</strong>
                                            <span className="text-gray-700"> Targets criminal syndicates and mafia activities</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start space-x-3">
                                        <div className="h-2 w-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <strong className="text-navy-900">Terrorism Acts:</strong>
                                            <span className="text-gray-700"> Enhanced provisions for terror-related offenses</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Card>

                        <Card className="border-l-4 border-pink-600">
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                3. Women&apos;s Safety Enhanced
                            </h3>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-gray-50 p-4 rounded">
                                        <p className="font-semibold text-navy-900 mb-2">Rape (IPC 375 → BNS 63, 64)</p>
                                        <p className="text-sm text-gray-700">
                                            Minimum sentence increased, clearer consent definitions, death penalty for
                                            gang rape of minors under 16
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded">
                                        <p className="font-semibold text-navy-900 mb-2">Sexual Harassment (IPC 354A → BNS 75)</p>
                                        <p className="text-sm text-gray-700">
                                            Broader definition including digital harassment and workplace provisions
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded">
                                        <p className="font-semibold text-navy-900 mb-2">Acid Attack (IPC 326A → BNS 124)</p>
                                        <p className="text-sm text-gray-700">
                                            Minimum 10 years, up to life imprisonment with mandatory compensation
                                        </p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded">
                                        <p className="font-semibold text-navy-900 mb-2">Cruelty (IPC 498A → BNS 84)</p>
                                        <p className="text-sm text-gray-700">
                                            Expanded definition of cruelty by husband or relatives
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="border-l-4 border-blue-600">
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                4. Digital Age Provisions
                            </h3>
                            <p className="text-gray-700 mb-4">
                                BNS includes specific provisions for contemporary digital crimes:
                            </p>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Cyber fraud and online cheating</li>
                                <li>• Digital forgery and document manipulation</li>
                                <li>• Online harassment and intimidation</li>
                                <li>• Electronic evidence recognition</li>
                                <li>• Digital communication as offense medium</li>
                            </ul>
                        </Card>

                        <Card className="border-l-4 border-orange-600">
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                5. Enhanced Punishments
                            </h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="p-3 text-left">Offense</th>
                                            <th className="p-3 text-left">IPC Punishment</th>
                                            <th className="p-3 text-left">BNS Punishment</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr>
                                            <td className="p-3">Cheating (420)</td>
                                            <td className="p-3">Up to 7 years</td>
                                            <td className="p-3 text-green-700 font-semibold">Up to 7 years + higher fines</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3">Criminal Intimidation</td>
                                            <td className="p-3">Up to 2 years</td>
                                            <td className="p-3 text-green-700 font-semibold">Up to 7 years (if death threat)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3">Theft from dwelling</td>
                                            <td className="p-3">Up to 7 years</td>
                                            <td className="p-3 text-green-700 font-semibold">Up to 7 years + fine</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>

                        <Card className="border-l-4 border-teal-600">
                            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">
                                6. Community Service Introduced
                            </h3>
                            <p className="text-gray-700">
                                BNS introduces <strong>community service</strong> as a punishment option for
                                certain petty offenses, promoting restorative justice and rehabilitation over
                                purely punitive measures.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-12 text-center">
                        Transition Timeline
                    </h2>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-32 text-right">
                                <span className="font-bold text-navy-900">1860</span>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                                    <div className="h-6 w-6 bg-white rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-700">IPC enacted by British colonial government</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-32 text-right">
                                <span className="font-bold text-navy-900">1947-2023</span>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                                    <div className="h-6 w-6 bg-white rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-700">IPC continues with amendments post-independence</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-32 text-right">
                                <span className="font-bold text-navy-900">Dec 25, 2023</span>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="h-12 w-12 bg-gold-500 rounded-full flex items-center justify-center">
                                    <div className="h-6 w-6 bg-white rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-gray-700 font-semibold">BNS enacted by Indian Parliament</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-32 text-right">
                                <span className="font-bold text-green-700">July 1, 2024</span>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center">
                                    <CheckCircle2 className="h-8 w-8 text-white" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-green-700 font-semibold">BNS comes into force, IPC repealed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimer */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                        <p className="text-sm text-amber-900 leading-relaxed">
                            <strong>Note:</strong> This comparison is provided for general educational purposes.
                            Legal provisions are subject to judicial interpretation and may be amended. For
                            specific legal advice, consult a qualified advocate.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
