import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <main className="flex-grow pt-24 md:pt-32">
            <Section className="pb-10 pt-10">
                <SectionHeader
                    title="Our Story"
                    subtitle="Helping businesses across India thrive in the digital age without breaking the bank."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-12 max-w-6xl mx-auto">
                    <div className="order-2 md:order-1 space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            We realized something was broken in the agency space. Local businesses across India were paying too much — or settling for cheap templates that didn&apos;t convert. That&apos;s why we started The 100 Dinar Company.
                        </p>
                        <p className="font-serif italic text-2xl text-[var(--color-foreground)] border-l-4 border-[var(--color-gold)] pl-6 my-8">
                            Pay an agency 1,500+ BHD and wait months, or use a cheap DIY builder and look unprofessional.
                        </p>
                        <p>
                            Our mission is simple: provide ultra-premium, fast, and conversion-focused websites starting at just 100 BHD. We believe every business deserves a digital presence that perfectly reflects their physical quality.
                        </p>
                        <p>
                            We cut out the fluff. No endless meetings. No jargon. Just results. You tell us what you need, and a few days later, you get a beautiful, lightning-fast website.
                        </p>
                    </div>

                    <div className="order-1 md:order-2">
                        <div className="relative h-[400px] md:h-[500px] w-full bg-gray-100">
                            <Image
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
                                alt="Our Agency Workspace"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                                <span className="text-white font-serif text-2xl font-bold">Based in New Delhi, India.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section bg="gray">
                <SectionHeader title="Why Choose Us?" align="center" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 text-center text-gray-600">
                    <div>
                        <div className="text-5xl font-serif text-[var(--color-gold)] mb-4 font-bold">1.</div>
                        <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-3">Lightning Fast</h4>
                        <p>Most basic websites are delivered fully built within 48 hours. We value your time.</p>
                    </div>
                    <div>
                        <div className="text-5xl font-serif text-[var(--color-gold)] mb-4 font-bold">2.</div>
                        <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-3">Unbeatable Value</h4>
                        <p>We leverage our own frameworks and optimized workflows to bring the cost down without sacrificing quality.</p>
                    </div>
                    <div>
                        <div className="text-5xl font-serif text-[var(--color-gold)] mb-4 font-bold">3.</div>
                        <h4 className="text-xl font-bold text-[var(--color-foreground)] mb-3">Local Expertise</h4>
                        <p>We understand the Indian market. We build what works here, including localized SEO and WhatsApp integrations.</p>
                    </div>
                </div>
            </Section>

            <Section bg="gold" className="text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Let&apos;s build something great.</h2>
                    <Link href="https://wa.me/918218699398" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="bg-[#25D366] text-white hover:bg-[#20bd5a] text-lg border-none hover:text-white transition-all shadow-xl gap-3">
                            <WhatsAppIcon className="w-6 h-6" /> Chat with our Founder
                        </Button>
                    </Link>
                </div>
            </Section>
        </main>
    );
}
