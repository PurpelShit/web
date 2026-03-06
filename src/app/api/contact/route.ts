import { NextResponse } from "next/server";

// Simple in-memory rate limiting (IP -> Last Submit Timestamp)
// Warning: This resets on server restart and doesn't share state across Vercel serverless edge nodes,
// but it's sufficient for basic spam deterrence in a free-tier setup.
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute per IP

export async function POST(request: Request) {
    try {
        // 1. IP Rate Limiting Extraction
        // Attempt to extract IP from common Next.js / Proxy headers
        const ip = request.headers.get("x-forwarded-for") ||
            request.headers.get("x-real-ip") ||
            "unknown-ip";

        const now = Date.now();
        const lastSubmit = rateLimitMap.get(ip);

        if (lastSubmit && (now - lastSubmit) < RATE_LIMIT_WINDOW_MS) {
            return NextResponse.json(
                { error: "Too many requests. Please try again in a minute, or contact us via WhatsApp." },
                { status: 429 }
            );
        }

        rateLimitMap.set(ip, now);

        // 2. Body Parsing
        const body = await request.json();
        const { name, businessName, phone, message, website } = body;

        // 3. Honeypot Validation
        if (website) {
            // If the honeypot field 'website' is filled out, quietly drop it (bot behavior)
            return NextResponse.json({ success: true }, { status: 200 });
        }

        // 4. Basic Input Sanitation & Validation
        if (!name || !phone || !message) {
            return NextResponse.json(
                { error: "Name, Phone, and Message are required fields." },
                { status: 400 }
            );
        }

        const sanitizedData = {
            name: String(name).slice(0, 100).replace(/[<>]/g, ""),
            businessName: businessName ? String(businessName).slice(0, 100).replace(/[<>]/g, "") : null,
            phone: String(phone).slice(0, 50).replace(/[<>]/g, ""),
            message: String(message).slice(0, 1000).replace(/[<>]/g, ""),
            created_at: new Date().toISOString()
        };

        // 5. Supabase Insertion
        const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        // For local development or without credentials, we just act like it worked 
        // rather than breaking the build.
        if (!SUPABASE_URL || !SUPABASE_KEY) {
            console.warn("Supabase credentials missing. Logging sanitized data:", sanitizedData);
            return NextResponse.json({ success: true, message: "Logged to console (credentials missing)" }, { status: 200 });
        }

        // Direct REST API call to Supabase to save dependency overhead
        const supabaseResponse = await fetch(`${SUPABASE_URL}/rest/v1/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": SUPABASE_KEY,
                "Authorization": `Bearer ${SUPABASE_KEY}`,
                "Prefer": "return=minimal"
            },
            body: JSON.stringify(sanitizedData)
        });

        if (!supabaseResponse.ok) {
            const errorText = await supabaseResponse.text();
            console.error("Supabase Error:", errorText);
            return NextResponse.json(
                { error: "Failed to submit inquiry to database." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error("API Route Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
