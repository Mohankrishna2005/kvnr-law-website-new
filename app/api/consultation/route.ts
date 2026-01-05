import { NextRequest, NextResponse } from "next/server";

interface ConsultationRequest {
    fullName: string;
    mobile: string;
    city: string;
    practiceArea: string;
    message?: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: ConsultationRequest = await request.json();

        // Validate required fields
        if (!body.fullName || !body.mobile || !body.city || !body.practiceArea) {
            return NextResponse.json(
                { error: "All required fields must be filled" },
                { status: 400 }
            );
        }

        // Validate mobile number format (10 digits)
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(body.mobile)) {
            return NextResponse.json(
                { error: "Mobile number must be exactly 10 digits" },
                { status: 400 }
            );
        }

        // Log the consultation request (in production, this would save to database or send email)
        console.log("===== NEW CONSULTATION REQUEST =====");
        console.log("Timestamp:", new Date().toISOString());
        console.log("Full Name:", body.fullName);
        console.log("Mobile:", body.mobile);
        console.log("City:", body.city);
        console.log("Practice Area:", body.practiceArea);
        console.log("Message:", body.message || "No message provided");
        console.log("==================================");

        // In a production environment, you would:
        // 1. Save to database
        // 2. Send email notification to law firm
        // 3. Send SMS confirmation to client
        // 4. Add to CRM system

        // For now, we'll just return success
        return NextResponse.json(
            {
                success: true,
                message: "Consultation request received successfully",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error processing consultation request:", error);
        return NextResponse.json(
            { error: "Internal server error. Please try again later." },
            { status: 500 }
        );
    }
}
