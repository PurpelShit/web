import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, businessName, phone, message } = body;

        if (!name || !phone || !message) {
            return NextResponse.json(
                { error: 'Name, phone, and message are required fields.' },
                { status: 400 }
            );
        }

        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            console.error('RESEND_API_KEY is not set');
            return NextResponse.json(
                { error: 'Server configuration error.' },
                { status: 500 }
            );
        }

        const resBody = {
            from: 'onboarding@resend.dev',
            to: 'hello@the100dinarcompany.live',
            subject: `New Inquiry — ${name}${businessName ? ` | ${businessName}` : ''}`,
            html: `
                <h2>New Contact Inquiry</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Business Name:</strong> ${businessName || 'N/A'}</p>
                <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            `,
        };

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${resendApiKey}`
            },
            body: JSON.stringify(resBody)
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Resend API error:', errorText);
            return NextResponse.json(
                { error: 'Failed to send the email. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true }, { status: 200 });

    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred.' },
            { status: 500 }
        );
    }
}
