import { Section } from "@/components/ui/Section";

export const metadata = {
    title: "Privacy Policy | The 100 Dinar Company",
};

export default function PrivacyPolicy() {
    return (
        <main className="flex-grow pt-32 pb-20">
            <Section className="max-w-[800px] mx-auto px-6">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#C9A84C]">Privacy Policy</h1>
                <p className="text-gray-500 mb-12 border-b border-gray-200 pb-8">Last updated: March 2026</p>

                <div className="space-y-12 text-[1.05rem] leading-relaxed text-gray-800">
                    <section>
                        <p>
                            <strong>The 100 Dinar Company</strong> ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at the100dinarcompany.live.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">1. Information We Collect</h2>
                        <p className="mb-4">When you use our contact form or interact with our website, we may collect the following information:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li><strong>Full Name</strong> — to identify and address you correctly</li>
                            <li><strong>Business Name</strong> — to understand your project context</li>
                            <li><strong>WhatsApp / Phone Number</strong> — to follow up on your inquiry</li>
                            <li><strong>Email Address</strong> — to respond to your message</li>
                            <li><strong>Message Content</strong> — the details of your inquiry</li>
                        </ul>
                        <p>We do not collect payment information directly. All payments are processed through secure third-party gateways (PayPal, Wise) and we never store your card or banking details.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">2. How We Use Your Information</h2>
                        <p className="mb-4">We use the information you provide solely to:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Respond to your inquiry or project request</li>
                            <li>Send you a proposal or project update</li>
                            <li>Communicate about ongoing work</li>
                            <li>Improve our services based on feedback</li>
                        </ul>
                        <p>We do not sell, rent, or share your personal information with any third party for marketing purposes.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">3. Data Storage</h2>
                        <p>Contact form submissions are securely stored and accessible only to The 100 Dinar Company team. We use industry-standard security measures to protect your data from unauthorized access.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">4. Cookies</h2>
                        <p>Our website may use basic cookies to improve your browsing experience. These cookies do not collect personally identifiable information and are not used for advertising purposes.</p>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">5. Third-Party Services</h2>
                        <p className="mb-4">Our website may use the following third-party services:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Vercel</strong> — website hosting</li>
                            <li><strong>Resend</strong> — email delivery for contact form</li>
                            <li><strong>Google Analytics</strong> — anonymous website traffic analytics</li>
                            <li><strong>PayPal / Wise</strong> — payment processing (governed by their own privacy policies)</li>
                        </ul>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">6. Your Rights</h2>
                        <p className="mb-4">You have the right to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Request access to the personal data we hold about you</li>
                            <li>Request correction or deletion of your data</li>
                            <li>Withdraw consent at any time by contacting us</li>
                        </ul>
                    </section>

                    <hr className="border-gray-100" />

                    <section>
                        <h2 className="text-2xl font-bold text-[#C9A84C] mb-4">7. Contact Us</h2>
                        <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
                        <p><strong>Email:</strong> <a href="mailto:hello@the100dinarcompany.live" className="text-[var(--color-gold)] hover:underline">hello@the100dinarcompany.live</a><br />
                            <strong>Location:</strong> Manama, Bahrain</p>
                    </section>
                </div>
            </Section>
        </main>
    );
}
