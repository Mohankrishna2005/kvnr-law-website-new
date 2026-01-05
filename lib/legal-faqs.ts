// FAQ-based legal information database

export interface FAQ {
    id: number;
    question: string;
    answer: string;
    category: "General" | "Civil" | "Criminal" | "Family" | "Property" | "BNS";
}

export const legalFAQs: FAQ[] = [
    {
        id: 1,
        question: "What is Bharatiya Nyaya Sanhita (BNS)?",
        answer: "Bharatiya Nyaya Sanhita (BNS) is India's new criminal code that replaced the Indian Penal Code (IPC) on July 1, 2024. It modernizes criminal law to address contemporary issues like cybercrimes, organized crime, and includes enhanced provisions for women's safety.",
        category: "BNS",
    },
    {
        id: 2,
        question: "When did BNS come into effect?",
        answer: "BNS was enacted on December 25, 2023, and came into force on July 1, 2024. From this date, all new criminal cases are filed under BNS sections instead of IPC sections.",
        category: "BNS",
    },
    {
        id: 3,
        question: "What is the difference between IPC and BNS?",
        answer: "The main differences include: (1) BNS removed colonial-era sedition law (IPC 124A), (2) introduced specific provisions for mob lynching and organized crime, (3) enhanced punishments for crimes against women and children, (4) included provisions for cybercrimes and digital offenses, and (5) consolidated 511 IPC sections into 358 clearer BNS sections.",
        category: "BNS",
    },
    {
        id: 4,
        question: "What is a First Information Report (FIR)?",
        answer: "An FIR is a written document prepared by police when they receive information about a cognizable offense. It is the first step in criminal proceedings and can be filed at any police station regardless of jurisdiction. You have the right to receive a free copy of the FIR.",
        category: "Criminal",
    },
    {
        id: 5,
        question: "What are cognizable and non-cognizable offenses?",
        answer: "Cognizable offenses are serious crimes where police can arrest without a warrant and start investigation without court permission (e.g., murder, rape, theft). Non-cognizable offenses are less serious, requiring a warrant for arrest and court permission to investigate (e.g., simple hurt, defamation).",
        category: "Criminal",
    },
    {
        id: 6,
        question: "What are my rights if arrested?",
        answer: "If arrested, you have the right to: (1) be informed of the grounds of arrest, (2) consult and be defended by a lawyer of your choice, (3) be presented before a magistrate within 24 hours, (4) apply for bail if the offense is bailable, (5) not be subjected to torture or cruel treatment, and (6) inform a friend or relative about your arrest.",
        category: "Criminal",
    },
    {
        id: 7,
        question: "What is bail and when can it be granted?",
        answer: "Bail is the release of an accused person from custody on the condition that they will appear in court when required. For bailable offenses, bail is a right. For non-bailable offenses, bail is at the discretion of the court. Factors considered include severity of offense, likelihood of absconding, and potential to tamper with evidence.",
        category: "Criminal",
    },
    {
        id: 8,
        question: "What is a civil case?",
        answer: "A civil case is a legal dispute between individuals or entities regarding rights, obligations, or liabilities. Common civil matters include property disputes, contract breaches, family matters (divorce, custody), and money recovery suits. The remedy sought is usually compensation or specific performance, not imprisonment.",
        category: "Civil",
    },
    {
        id: 9,
        question: "What is the limitation period for filing a civil suit?",
        answer: "The Limitation Act, 1963 prescribes time limits for different types of civil suits. Common periods include: 3 years for most civil suits including property disputes and contracts, 12 years for suits based on fraud or mistake, and 1 year for defamation. The period is calculated from when the cause of action arose.",
        category: "Civil",
    },
    {
        id: 10,
        question: "How is property acquired through inheritance?",
        answer: "Property inheritance is governed by personal laws (Hindu Succession Act, Muslim Personal Law, etc.) or by a valid will. Under Hindu law, Class I heirs (spouse, children, mother) get equal shares. In absence of a will (intestate succession), the law determines  distribution. A succession certificate or legal heir certificate may be required to claim the property.",
        category: "Property",
    },
    {
        id: 11,
        question: "What documents are needed for property purchase?",
        answer: "Essential documents include: (1) Sale deed, (2) Prior sale deeds (chain of ownership), (3) Encumbrance certificate, (4) Property tax receipts, (5) Building plan approval, (6) Occupancy certificate (for apartments), (7) No Objection Certificate from society/bank, and (8) Power of attorney (if applicable). Always verify authenticity.",
        category: "Property",
    },
    {
        id: 12,
        question: "What is the process for divorce in India?",
        answer: "Divorce procedures depend on the religion/community. Under Hindu Marriage Act, grounds include cruelty, adultery, desertion (2 years), mental disorder, and mutual consent. The process involves: (1) filing a petition in family court, (2) serving notice to the other party, (3) attempts at reconciliation, (4) evidence and arguments, and (5) court decree. Mutual consent divorce is faster, typically 6-18 months.",
        category: "Family",
    },
    {
        id: 13,
        question: "Who gets child custody in divorce?",
        answer: "Child custody decisions are based on the child's best interests. Factors considered include: child's age (preference to mother for young children), financial stability of parents, child's preference (if old enough), parent's character and conduct, and ability to provide care. Courts may grant joint custody, sole custody, or visitation rights depending on circumstances.",
        category: "Family",
    },
    {
        id: 14,
        question: "What is domestic violence and legal remedies?",
        answer: "The Protection of Women from Domestic Violence Act, 2005 defines domestic violence broadly to include physical, sexual, emotional, verbal, and economic abuse. Remedies include: protection orders, residence orders, monetary relief, custody orders, and compensation. A woman can file a complaint with police, Magistrate, or Protection Officer.",
        category: "Family",
    },
    {
        id: 15,
        question: "What is a consumer complaint and how to file?",
        answer: "Consumer complaints address defects in goods/services, deficiency in service, or unfair trade practices. You can file in: District Forum (claims up to ₹1 crore), State Commission (₹1-10 crore), or National Commission (over ₹10 crore). The complaint must be filed within 2 years of the cause of action with supporting documents.",
        category: "General",
    },
    {
        id: 16,
        question: "What is legal notice and why is it sent?",
        answer: "A legal notice is a formal written communication informing the recipient of the sender's intention to take legal action. It serves as a final warning before filing a suit and provides an opportunity to settle the dispute amicably. It should clearly state facts, legal grounds, and demands with a reasonable time (usually 15-30 days) to respond.",
        category: "General",
    },
    {
        id: 17,
        question: "Can I represent myself in court?",
        answer: "Yes, you have the right to represent yourself (known as 'party-in-person') in any court in India. However, legal matters involve complex procedures and laws. For serious matters, especially criminal cases or complex civil disputes, hiring an experienced advocate is strongly recommended to protect your rights and interests.",
        category: "General",
    },
    {
        id: 18,
        question: "What is the difference between a lawyer and an advocate?",
        answer: "In India, a 'lawyer' is a person who has studied law, while an 'advocate' is a lawyer enrolled with a Bar Council and has the right to practice law and appear in courts. All advocates are lawyers, but not all lawyers are advocates. Only advocates can represent clients in court proceedings.",
        category: "General",
    },
    {
        id: 19,
        question: "How long do court cases typically take?",
        answer: "Case duration varies widely based on: case complexity, court workload, number of adjournments, evidence volume, and appeals. Simple civil suits may take 1-3 years, while complex property disputes can take 5-10+ years. Criminal trials typically take 2-5 years. Fast-track courts and Lok Adalats can expedite certain matters.",
        category: "General",
    },
    {
        id: 20,
        question: "What is anticipatory bail?",
        answer: "Anticipatory bail is pre-arrest bail granted under Section 438 CrPC when a person apprehends arrest for a non-bailable offense. The court considers factors like nature of accusation, applicant's background, likelihood of fleeing, and potential for tampering with evidence. It provides protection from arrest if granted.",
        category: "Criminal",
    },
];

export function searchFAQs(query: string, category?: string): FAQ[] {
    const lowerQuery = query.toLowerCase();
    let results = legalFAQs;

    if (category && category !== "All") {
        results = results.filter((faq) => faq.category === category);
    }

    if (query.trim()) {
        results = results.filter(
            (faq) =>
                faq.question.toLowerCase().includes(lowerQuery) ||
                faq.answer.toLowerCase().includes(lowerQuery)
        );
    }

    return results;
}

export function getRelatedFAQs(currentId: number, limit: number = 3): FAQ[] {
    const currentFAQ = legalFAQs.find((faq) => faq.id === currentId);
    if (!currentFAQ) return [];

    return legalFAQs
        .filter((faq) => faq.id !== currentId && faq.category === currentFAQ.category)
        .slice(0, limit);
}
