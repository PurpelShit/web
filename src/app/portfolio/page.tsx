import { Section, SectionHeader } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Portfolio() {
    const projects = [
        {
            title: "Dosari Café",
            category: "Hospitality & Dining",
            image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
            challenge: "Dosari Café needed a way to showcase their unique coffee blends and ambient space while allowing customers to find them easily in Mumbai.",
            solution: "We built a warm, visually striking 3-page website with a Google Maps integration and a dynamic menu layout. We also integrated a WhatsApp floating widget which increased their direct delivery inquiries by 40% in the first week.",
            link: "/contact",
            isLive: false
        },
        {
            title: "Bloom Boutique",
            category: "Retail & E-commerce",
            image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop",
            challenge: "A premium floral shop in Delhi struggling to convert Instagram followers into actual sales due to a lack of a proper catalog.",
            solution: "We deployed a full e-commerce experience using our Premium package. It includes an inventory management system, pristine image galleries, and an AI chat assistant trained to suggest floral arrangements based on customer questions.",
            link: "/contact",
            isLive: false
        },
        {
            title: "Al Dana Restaurant",
            category: "Fine Dining",
            image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
            challenge: "A high-end restaurant looking for a sophisticated brand presence online without relying entirely on third-party aggregation apps.",
            solution: "Created a dark-mode inspired, elegant one-pager featuring a seamless direct reservation flow. The website perfectly captures their luxurious atmosphere while providing functional booking tools.",
            link: "/contact",
            isLive: false
        },
        {
            title: "Zayani Real Estate",
            category: "Real Estate & Property",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
            challenge: "A boutique real estate firm in Hyderabad that needed a fast, credible way to showcase high-value properties to international investors.",
            solution: "Developed a structural, professional corporate site with dedicated property listing pages. We prioritized heavy SEO optimization and an integrated CRM lead capture form.",
            link: "/contact",
            isLive: false
        },
        {
            title: "Brewed & Co.",
            category: "Café & Hospitality",
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
            challenge: "A premium urban café serving handcrafted specialty brews struggled to convert foot traffic into online orders. They had no digital presence to reflect the quality of their experience or drive delivery revenue.",
            solution: "We designed a rich, dark-themed web experience that mirrors the café's warmth and sophistication. The site features a dynamic category-based menu, real-time delivery promotions, and a direct ordering flow — leading to a 55% increase in online orders within the first month of launch.",
            link: "https://brewed-co.vercel.app/",
            isLive: true
        },
        {
            title: "Ember & Ash",
            category: "Specialty Coffee & Roastery",
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=1200&auto=format&fit=crop",
            challenge: "A high-end specialty coffee roastery with a cult following needed a website worthy of their craft — one that communicated their slow-roasting philosophy, rare single-origin beans, and multi-city presence without feeling generic.",
            solution: "We built a cinematic, dark-luxury website featuring dramatic full-screen imagery, a curated interactive menu showcasing signature and classic roasts, and a compelling brand story section. The result is a site that feels as premium as the coffee itself, driving both in-store visits and online orders.",
            link: "https://ember-ash-beta.vercel.app/",
            isLive: true
        },
        {
            title: "The Grind Collective",
            category: "Community Café & Co-Working",
            image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop",
            challenge: "A community-first café catering to creatives, writers, and entrepreneurs needed a digital home that felt alive. Their old site failed to capture the energy of their events or convert visitors into regulars and members.",
            solution: "We crafted a warm, editorial-style website built around community storytelling. It features a bookable events calendar, spotlight sections for recurring programs like Silent Writing Evenings and Startup Pitch Mornings, and a specialty drink menu with personality-driven copy — helping the café grow its membership base by 70% in 60 days.",
            link: "https://the-grind-collective.vercel.app/",
            isLive: true
        }
    ];

    return (
        <main className="flex-grow pt-24 md:pt-32">
            <Section className="pb-10 pt-10">
                <SectionHeader
                    title="Featured Work"
                    subtitle="A selection of premium websites we've built for businesses across India."
                />

                <div className="space-y-32 mt-20 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center`}>

                            {/* IMAGE SIDE */}
                            <div className="w-full md:w-1/2">
                                <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-gray-100 group">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* CONTENT SIDE */}
                            <div className="w-full md:w-1/2 space-y-6">
                                <span className="text-sm uppercase tracking-widest text-[var(--color-gold)] font-bold">{project.category}</span>
                                <h3 className="font-serif text-4xl font-bold">{project.title}</h3>

                                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                    <div>
                                        <strong className="text-gray-900 block mb-1">The Challenge:</strong>
                                        <p>{project.challenge}</p>
                                    </div>
                                    <div>
                                        <strong className="text-gray-900 block mb-1">Our Solution:</strong>
                                        <p>{project.solution}</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <Link
                                        href={project.link}
                                        {...(project.isLive ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    >
                                        <Button variant="outline">
                                            {project.isLive ? "View Live Site ↗" : "View Live Site Setup"}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
