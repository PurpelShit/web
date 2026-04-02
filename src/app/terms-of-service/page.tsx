import { Section } from "@/components/ui/Section";

export const metadata = {
    title: "Terms of Service | The 100 Dinar Company",
};

export default function TermsOfService() {
    return (
        <main className="flex-grow pt-32 pb-20">
            <Section className="max-w-[800px] mx-auto px-6">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#C9A84C]">Terms of Service</h1>
                <p className="text-gray-500 mb-12 border-b border-gray-200 pb-8">Last updated: March 2026</p>

                <div className="space-y-12 text-[1.05rem] leading-relaxed text-gray-800">
                    <section>
                        <p className="mb-4">
                            Please read these Terms of Service carefully before engaging with <strong>The 100 Dinar Company</strong> for any web design or development services.
                        </p>
                        <p>
                            By submitting an inquiry, making a payment, or proceeding with any project, you agree to be bound by these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">1. Services</h2>
                        <p className="mb-4">The 100 Dinar Company provides the following services:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Website design and development</li>
                            <li>AI chatbot integration</li>
                            <li>Website hosting and maintenance</li>
                        </ul>
                        <p>The specific scope, deliverables, and timeline for each project will be agreed upon in writing (via WhatsApp or email) before work begins.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">2. Payment Terms</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>A <strong>50% deposit</strong> is required before any work begins</li>
                            <li>The remaining <strong>50% is due upon project completion</strong>, before the final website is handed over</li>
                            <li>All prices are quoted in BHD (Bahraini Dinar) or equivalent currency as agreed</li>
                            <li>Payments are processed via PayPal or Wise</li>
                            <li>We reserve the right to pause or discontinue work if payment terms are not met</li>
                        </ul>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">3. Revisions</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Each plan includes <strong>2 rounds of revisions</strong></li>
                            <li>A revision is defined as reasonable changes to existing design or content</li>
                            <li>Additional revisions beyond the included rounds may be charged separately</li>
                            <li>Complete redesigns or scope changes are considered new projects</li>
                        </ul>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">4. Delivery Timeline</h2>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Basic plan: 1–2 business days</li>
                            <li>Standard plan: 3–5 business days</li>
                            <li>Premium plan: 5–7 business days</li>
                        </ul>
                        <p>Timelines begin from the date the deposit is received and all required content (logo, text, images) is provided by the client.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">5. Client Responsibilities</h2>
                        <p className="mb-4">The client agrees to:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Provide all required content, assets, and feedback in a timely manner</li>
                            <li>Review deliverables and provide feedback within 3 business days</li>
                            <li>Ensure they have the rights to any content (images, text, logos) they provide</li>
                        </ul>
                        <p>Delays caused by the client may result in adjusted delivery timelines.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">6. Ownership & Rights</h2>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Upon receipt of final payment, the client owns full rights to their website</li>
                            <li>The 100 Dinar Company retains the right to display the completed project in our portfolio unless the client requests otherwise in writing</li>
                            <li>Any third-party tools, plugins, or frameworks used remain subject to their own licensing terms</li>
                        </ul>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">7. Confidentiality</h2>
                        <p>We treat all client information as confidential and will not share project details, business information, or communications with any third party without explicit permission.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">8. Limitation of Liability</h2>
                        <p className="mb-4">The 100 Dinar Company is not liable for:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Loss of business, revenue, or data resulting from website downtime</li>
                            <li>Third-party service outages (hosting, payment gateways, etc.)</li>
                            <li>Issues arising from content provided by the client</li>
                        </ul>
                        <p>Our maximum liability in any case is limited to the amount paid for the specific project in question.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">9. Termination</h2>
                        <p className="mb-4">Either party may terminate a project with written notice. In the event of termination:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Work completed up to the termination date will be charged proportionally</li>
                            <li>The deposit is non-refundable if work has already commenced</li>
                            <li>Any completed work remains the property of The 100 Dinar Company until full payment is received</li>
                        </ul>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">10. Contact Us</h2>
                        <p><strong>Email:</strong> <a href="mailto:hello@the100dinarcompany.live" className="text-[var(--color-gold)] hover:underline">hello@the100dinarcompany.live</a><br />
                            <strong>Location:</strong> Manama, Bahrain</p>
                    </section>
                </div>
            </Section>
        </main>
    );
}
