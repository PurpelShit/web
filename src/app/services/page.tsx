import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { WhatsAppIcon, CheckIcon } from "@/components/ui/Icons";

export default function Services() {
    return (
        <main className="flex-grow pt-24 md:pt-32">
            <Section className="pb-10 pt-10">
                <SectionHeader
                    title="Our Services"
                    subtitle="Everything you need to succeed online, packed into clear, affordable services."
                />

                <div className="max-w-5xl mx-auto space-y-24 mt-16">

                    {/* SERVICE 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-50 p-12 flex items-center justify-center font-serif text-6xl text-[var(--color-gold)] opacity-50">
                            {/* Decorative Element Placeholder */}
                            &lt; / &gt;
                        </div>
                        <div>
                            <h3 className="font-serif text-3xl font-bold mb-4">Website Design & Development</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Your website is your digital storefront. We don&apos;t use bloated themes. We handcraft fast, responsive, and beautiful websites tailored specifically for your brand. Our sites are built to load instantly, rank natively on Google, and look stunning on any mobile device.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Mobile-First Responsive Design", "SEO Optimized Architecture", "Custom Brand Aesthetics", "High-Converting Copywriting"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckIcon className="w-5 h-5 text-[var(--color-gold)] mt-1" />
                                        <span className="font-medium text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/pricing"><Button variant="outline">View Pricing</Button></Link>
                        </div>
                    </div>

                    {/* SERVICE 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h3 className="font-serif text-3xl font-bold mb-4">AI Sales Assistant / Chatbot Integration</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Stop losing customers because you couldn&apos;t reply to a WhatsApp message in time. We build and train bespoke AI assistants that learn your menu, your services, and your pricing. They answer customer questions 24/7 on your website and WhatsApp directly.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["24/7 Automated Responses", "Direct WhatsApp Integration", "Trained strictly on your business data", "Lead Capture Automation"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckIcon className="w-5 h-5 text-[var(--color-gold)] mt-1" />
                                        <span className="font-medium text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="https://wa.me/919999999999"><Button variant="outline" className="gap-2"><WhatsAppIcon className="w-4 h-4" /> Talk to our Bot Demo</Button></Link>
                        </div>
                        <div className="order-1 md:order-2 bg-[var(--color-gold)] bg-opacity-10 p-12 flex items-center justify-center text-6xl">
                            🤖
                        </div>
                    </div>

                    {/* SERVICE 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="bg-gray-50 p-12 flex items-center justify-center text-6xl opacity-50 text-[var(--color-gold)]">
                            ☁️
                        </div>
                        <div>
                            <h3 className="font-serif text-3xl font-bold mb-4">Hosting & Maintenance</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                A website needs a home and regular upkeep to stay secure. We take care of everything behind the scenes. We deploy your site on Enterprise-grade CDN networks so it loads instantly in India and across the globe. Never worry about an SSL certificate expiring again.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {["Enterprise-grade Global CDN Storage", "Free SSL Certificates", "Automated Daily Backups", "99.9% Uptime Guarantee"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckIcon className="w-5 h-5 text-[var(--color-gold)] mt-1" />
                                        <span className="font-medium text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/pricing"><Button variant="outline">View Hosting Plans</Button></Link>
                        </div>
                    </div>

                </div>
            </Section>
        </main>
    );
}
