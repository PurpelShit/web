import { Section } from "@/components/ui/Section";

export const metadata = {
    title: "Refund Policy | The 100 Dinar Company",
};

export default function RefundPolicy() {
    return (
        <main className="flex-grow pt-32 pb-20">
            <Section className="max-w-[800px] mx-auto px-6">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#C9A84C]">Refund Policy</h1>
                <p className="text-gray-500 mb-12 border-b border-gray-200 pb-8">Last updated: March 2026</p>

                <div className="space-y-12 text-[1.05rem] leading-relaxed text-gray-800">
                    <section>
                        <p>
                            At <strong>The 100 Dinar Company</strong>, we are committed to delivering high-quality work and ensuring client satisfaction. This Refund Policy outlines the conditions under which refunds may be issued.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">1. Deposit (50% Upfront Payment)</h2>
                        <p className="mb-4">The initial 50% deposit is <strong>non-refundable</strong> once work has commenced.</p>
                        <p>This deposit covers the time, research, and resources allocated to your project from day one. If you choose to cancel after work has begun, the deposit will not be returned.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">2. Final Payment (50% on Completion)</h2>
                        <p className="mb-4">The final 50% payment is due only after you have reviewed and approved the completed website. We will not request final payment until you are satisfied with the result.</p>
                        <p>If you are not satisfied with the delivered work, we will first attempt to resolve the issue through our included revision rounds before any refund is considered.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">3. Eligibility for Refund</h2>
                        <p className="mb-4">A full or partial refund may be considered in the following circumstances:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>We fail to deliver the agreed website within the stated timeline (without a valid reason)</li>
                            <li>The delivered work significantly deviates from the agreed scope and cannot be resolved through revisions</li>
                            <li>We cancel the project on our end before commencing work</li>
                        </ul>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">4. Non-Refundable Situations</h2>
                        <p className="mb-4">Refunds will <strong>not</strong> be issued in the following cases:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>You change your mind after work has started</li>
                            <li>You provided incorrect or incomplete content that affected the outcome</li>
                            <li>You approved the design at a stage and later changed your requirements</li>
                            <li>Delays were caused by the client's failure to provide timely feedback or content</li>
                            <li>The project was completed and handed over as agreed</li>
                        </ul>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">5. Hosting & Maintenance Plans</h2>
                        <p>Hosting fees are <strong>non-refundable</strong> once the hosting period has begun. If you cancel your hosting plan mid-term, no partial refunds will be issued for unused time.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">6. How to Request a Refund</h2>
                        <p className="mb-4">If you believe you are eligible for a refund, please contact us within <strong>7 days</strong> of the issue arising:</p>
                        <p className="mb-4">
                            <strong>Email:</strong> <a href="mailto:hello@the100dinarcompany.live" className="text-[var(--color-gold)] hover:underline">hello@the100dinarcompany.live</a><br />
                            <strong>WhatsApp:</strong> <a href="https://wa.me/918218699398" className="text-[var(--color-gold)] hover:underline">+91 82186 99398</a>
                        </p>
                        <p>Include your name, project details, and reason for the refund request. We will respond within 2 business days.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">7. Resolution Process</h2>
                        <p className="mb-4">We always prefer to resolve disputes through communication first. Before requesting a refund, we encourage you to:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Message us on WhatsApp with your concern</li>
                            <li>Allow us one opportunity to fix the issue</li>
                            <li>If unresolved, submit a formal refund request via email</li>
                        </ol>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">8. Contact Us</h2>
                        <p><strong>Email:</strong> <a href="mailto:hello@the100dinarcompany.live" className="text-[var(--color-gold)] hover:underline">hello@the100dinarcompany.live</a><br />
                            <strong>Location:</strong> New Delhi, India</p>
                    </section>
                </div>
            </Section>
        </main>
    );
}
