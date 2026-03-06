"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard, PortfolioCard, PricingCard, TestimonialCard } from "@/components/ui/Cards";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { RamadanBanner } from "@/components/ui/RamadanBanner";
import Link from "next/link";
import { Reveal, Parallax, ScaleOnScroll } from "@/components/ui/Animations";
import { Carousel } from "@/components/ui/Carousel";
import { Hero3D } from "@/components/ui/Hero3D";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { StatsRow } from "@/components/ui/StatsRow";
import Pricing from "@/components/ui/Pricing";
import { ScrollBoldText } from "@/components/ui/ScrollBoldText";

export default function Home() {
  return (
    <main className="flex-grow pt-24 md:pt-32 overflow-hidden">

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <Section
        bg="transparent"
        className="pt-20 pb-32 md:pt-28 md:pb-40 flex flex-col justify-center min-h-[90vh] relative bg-[#FAF7F2] overflow-hidden"
        background={<Hero3D />}
      >
        <div className="max-w-5xl mx-auto text-center relative z-20 px-4">
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-neutral-950 mb-6">
              Get Your Brand{" "}
              <span className="text-[var(--color-gold)]">Online.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="text-3xl md:text-5xl lg:text-6xl font-script mb-10">
              <TypewriterText />
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="font-display text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Affordable, fast, and built for businesses across India.
              No tech skills needed — just results.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/pricing">
                <Button
                  size="lg"
                  data-cursor="large"
                  className="w-full sm:w-auto text-lg shadow-xl hover:-translate-y-1 transition-all duration-300 px-10 h-14 bg-neutral-950 text-[var(--color-gold)] border-none hover:bg-neutral-800 hover:shadow-[0_20px_50px_rgba(201,168,76,0.3)]"
                >
                  Start Today — From 100 BHD →
                </Button>
              </Link>
              <a href="#services">
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full sm:w-auto text-lg hover:-translate-y-1 transition-all duration-300 text-gray-600 hover:text-[var(--color-gold)]"
                >
                  See Our Work ↓
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ═══════════════ WHAT WE DO ═══════════════ */}
      <Section bg="gray" id="services">
        <Reveal>
          <SectionHeader
            title="What We Do"
          />
          <ScrollBoldText
            text="We don't just build websites. We build digital assets that bring you more customers, save you time, and elevate your brand."
            className="text-center text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12"
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <Reveal delay={0.1} direction="up">
            <ServiceCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>}
              title="Website Design"
              description="Custom-designed, lightning-fast websites built specifically for your brand. Mobile-first, SEO optimized, and ready to convert visitors into paying customers."
            />
          </Reveal>
          <Reveal delay={0.3} direction="up">
            <ServiceCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.433 4.433 0 0 0 2.706-2.706 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>}
              title="AI Integration"
              description="Save hours of answering WhatsApp messages. We integrate intelligent AI assistants that capture leads, answer common questions, and book tables automatically."
            />
          </Reveal>
          <Reveal delay={0.5} direction="up">
            <ServiceCard
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Z" /></svg>}
              title="Hosting & Maintenance"
              description="We handle the technical headaches. Secure hosting, regular backups, and simple monthly/yearly plans so your site never goes down."
            />
          </Reveal>
        </div>
      </Section>

      {/* ═══════════════ ANIMATED STATS ═══════════════ */}
      <Section bg="transparent">
        <StatsRow />
      </Section>

      {/* ═══════════════ FEATURED WORK ═══════════════ */}
      <Section>
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeader title="Featured Work" align="left" subtitle="Premium execution for local businesses." />
            <Link href="/portfolio" className="mb-12 md:mb-16">
              <Button variant="outline" className="font-display uppercase tracking-widest text-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                View All Projects &rarr;
              </Button>
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PortfolioCard
              image="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80"
              title="Dosari Café"
              category="Hospitality"
              description="A warm, inviting digital presence matching their cozy Mumbai location."
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80"
              title="Bloom Boutique"
              category="Retail"
              description="A chic e-commerce experience for premium floral arrangements."
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop&q=80"
              title="Al Dana Restaurant"
              category="Dining"
              description="High-end dining website with seamless reservation flow."
            />
            <PortfolioCard
              image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80"
              title="Zayani Properties"
              category="Real Estate"
              description="Modern property listings with an elegant, trust-building layout."
            />
          </div>
        </Reveal>
      </Section>

      {/* ═══════════════ PRICING ═══════════════ */}
      <Pricing />

      {/* ═══════════════ TESTIMONIALS ═══════════════ */}
      <Section className="overflow-hidden">
        <Reveal>
          <SectionHeader
            title="Trusted by India's Best"
            subtitle="Swipe through to see what our local partners have to say."
          />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="max-w-6xl mx-auto">
            <Carousel>
              <TestimonialCard
                quote="Honestly didn't expect this quality at this price. They built our website in less than 2 days and it looks better than cafes I've seen in Dubai."
                name="Ahmed Al Dosari"
                business="Dosari Café, Mumbai"
              />
              <TestimonialCard
                quote="Very professional team. They understood exactly what I wanted without me having to explain too much. The AI assistant is a game changer."
                name="Fatima Hassan"
                business="Bloom Boutique, Delhi"
              />
              <TestimonialCard
                quote="I was skeptical at first because the price seemed too low for what they were offering. But they delivered everything they promised."
                name="Khalid Al Mannai"
                business="Mannai Auto Parts, Bangalore"
              />
              <TestimonialCard
                quote="The 100 Dinar Company understood our brand immediately. The site they built converted 3 leads into clients in the first month. ROI was immediate."
                name="Noor Al Zayani"
                business="Zayani Real Estate, Hyderabad"
              />
            </Carousel>
          </div>
        </Reveal>
      </Section>

      {/* ═══════════════ CTA SECTION ═══════════════ */}
      <Section bg="dark" className="text-center relative overflow-hidden text-white">
        <ScaleOnScroll>
          <div className="max-w-3xl mx-auto py-10 relative z-10">
            <h2 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-md">
              Ready to grow your business?
            </h2>
            <p className="font-display text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed">
              Let&apos;s build a website that drives results. Contact us today via WhatsApp or email to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://wa.me/918218699398"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-105"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '9999px',
                  border: '1.5px solid #25D366',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                }}
              >
                <WhatsAppIcon className="w-5 h-5 flex-shrink-0 mr-1" /> WhatsApp Us Now
              </a>
              <Link href="/contact">
                <Button size="lg" data-cursor="large" className="w-full sm:w-auto bg-neutral-800 text-white hover:bg-neutral-700 text-xl border-none shadow-xl hover:-translate-y-2 transition-all hover:shadow-[0_20px_50px_rgba(255,255,255,0.1)] h-16 px-8 rounded-xl font-display">
                  Message via Email
                </Button>
              </Link>
            </div>
          </div>
        </ScaleOnScroll>

        <div className="absolute top-0 left-0 w-full h-full text-[20rem] font-script text-[var(--color-gold)] opacity-5 pointer-events-none -translate-y-1/4 selection:bg-transparent -rotate-12 scale-150">
          Success
        </div>
      </Section>
    </main>
  );
}
