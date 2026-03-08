"use client";

import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Basic honeypot check purely on client side before sending
        if (data.website) {
            setStatus("error");
            setErrorMessage("Spam detected.");
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/mqeyazne", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.name,
                    business: data.businessName,
                    phone: data.phone,
                    message: data.message
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Something went wrong.");
            }

            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <main className="flex-grow pt-24 md:pt-32">
            <Section className="pb-10 pt-10">
                <SectionHeader
                    title="Let's build your website."
                    subtitle="Fill out the form below or chat with us directly on WhatsApp for an immediate response."
                />

                <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* CONTACT INFO */}
                    <div className="bg-gray-50 p-10 md:p-14 h-full flex flex-col justify-center">
                        <h3 className="font-serif text-3xl font-bold mb-6">Direct Contact</h3>
                        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                            We highly recommend reaching out via WhatsApp for the fastest response time. We&apos;re online 7 days a week, ready to help businesses across India digitize.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <span className="block text-sm uppercase tracking-widest text-[var(--color-gold)] font-bold mb-2">WhatsApp / Phone</span>
                                <a href="https://wa.me/918218699398" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-2xl font-bold hover:text-[#25D366] transition-colors">
                                    <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                                    +91 8218699398
                                </a>
                            </div>

                            <div>
                                <span className="block text-sm uppercase tracking-widest text-[var(--color-gold)] font-bold mb-2">Email Us</span>
                                <a href="mailto:hello@the100dinarcompany.live" className="text-xl font-bold hover:text-[var(--color-gold)] transition-colors">
                                    hello@the100dinarcompany.live
                                </a>
                            </div>

                            <div>
                                <span className="block text-sm uppercase tracking-widest text-[var(--color-gold)] font-bold mb-2">Location</span>
                                <p className="text-xl font-bold text-gray-900">
                                    New Delhi, India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CONTACT FORM */}
                    <div className="bg-white p-10 md:p-14 border border-gray-200">
                        <h3 className="font-serif text-3xl font-bold mb-8">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Honeypot field - visually hidden */}
                            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
                                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                                <input required type="text" id="name" name="name" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="Ali Hassan" />
                            </div>

                            <div>
                                <label htmlFor="businessName" className="block text-sm font-bold text-gray-700 mb-2">Business Name</label>
                                <input type="text" id="businessName" name="businessName" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="Bloom Boutique" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">WhatsApp / Phone Number *</label>
                                <input required type="tel" id="phone" name="phone" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="+973 3xxx xxxx" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">How can we help? *</label>
                                <textarea required id="message" name="message" rows={5} className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-[var(--color-gold)] transition-colors resize-none" placeholder="I need the Standard package for my cafe..."></textarea>
                            </div>

                            {status === "success" && (
                                <div className="bg-green-50 text-green-800 p-4 border border-green-200">
                                    Thanks! We&apos;ve received your message and will be in touch shortly.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="bg-red-50 text-red-800 p-4 border border-red-200">
                                    {errorMessage || "Failed to send message. Please try WhatsApp instead."}
                                </div>
                            )}

                            <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                                {status === "loading" ? "Sending..." : "Submit Inquiry"}
                            </Button>
                        </form>
                    </div>

                </div>
            </Section>
        </main>
    );
}
