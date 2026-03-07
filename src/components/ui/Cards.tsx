import React from "react";
import Image from "next/image";
import { StarIcon, CheckIcon } from "./Icons";
import { Button } from "./Button";
import Link from "next/link";
import { TiltCardWrapper } from "./Animations";

export const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <TiltCardWrapper>
        <div className="service-card group p-8 border border-gray-100 bg-white hover:border-[var(--color-gold)] transition-all duration-300 h-full shadow-sm hover:shadow-lg hover:-translate-y-2 rounded-xl">
            <div className="service-icon-wrapper mb-6">
                <div className="service-icon-inner">
                    <div className="service-icon-front w-12 h-12">
                        {icon}
                    </div>
                    <div className="service-icon-back">
                        CONVERTS<br />VISITORS
                    </div>
                </div>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-500 leading-relaxed">{description}</p>
            {/* Gold accent line on hover */}
            <div className="w-0 group-hover:w-12 h-0.5 bg-[var(--color-gold)] mt-6 transition-all duration-500" />
        </div>
    </TiltCardWrapper>
);

export const PortfolioCard = ({ image, title, category, description }: { image: string, title: string, category: string, description?: string }) => (
    <TiltCardWrapper>
        <Link href="/portfolio" className="block portfolio-card w-full h-72 md:h-96">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
            />
            <div className="portfolio-overlay">
                <span className="text-xs uppercase tracking-widest text-[var(--color-gold)] font-bold mb-2 block">
                    {category}
                </span>
                <h3 className="font-serif text-2xl font-bold mb-1 text-white">{title}</h3>
                {description && <p className="text-gray-300 text-sm line-clamp-2">{description}</p>}

                <div className="flex items-center gap-2 mt-3 text-[var(--color-gold)]">
                    <span className="portfolio-arrow text-lg font-bold">→</span>
                    <span className="text-sm font-display uppercase tracking-widest">View Project</span>
                </div>
            </div>
        </Link>
    </TiltCardWrapper>
);

export const TestimonialCard = ({ quote, name, business }: { quote: string, name: string, business: string }) => {
    const initials = name.split(" ").map(n => n[0]).join("").toUpperCase();

    return (
        <TiltCardWrapper className="h-full testimonial-card">
            <div className="p-8 bg-white border-l-4 border-[var(--color-gold)] flex flex-col h-full shadow-sm rounded-r-xl relative overflow-hidden">
                {/* Large quotation mark */}
                <div className="absolute top-4 right-6 text-8xl font-serif text-[var(--color-gold)]/10 leading-none select-none pointer-events-none">
                    &ldquo;
                </div>

                <div className="flex text-[var(--color-gold)] mb-6">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
                </div>
                <p className="font-serif text-gray-700 flex-grow mb-8 text-xl leading-relaxed relative z-10">
                    &quot;{quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                    {/* Gold circle avatar with initials */}
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {initials}
                    </div>
                    <div>
                        <h4 className="font-bold text-neutral-950">{name}</h4>
                        <p className="text-sm text-gray-500 font-display uppercase tracking-widest mt-0.5">{business}</p>
                    </div>
                </div>
            </div>
        </TiltCardWrapper>
    );
};

export const PricingCard = ({
    title,
    price,
    features,
    isPopular = false,
    delivery
}: {
    title: string,
    price: string,
    features: string[],
    isPopular?: boolean,
    delivery: string
}) => (
    <TiltCardWrapper className="h-full">
        <div className={`relative flex flex-col p-8 bg-white h-full transition-all duration-300 rounded-xl hover:-translate-y-2 ${isPopular
            ? 'border-2 border-[var(--color-gold)] shadow-2xl z-10 hover:shadow-[0_20px_50px_rgba(201,168,76,0.2)]'
            : 'border border-gray-200 shadow-sm hover:shadow-xl'
            }`}>
            {isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-gold)] text-white text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full shadow-lg">
                    Most Popular
                </div>
            )}
            <h3 className="font-serif text-2xl font-bold mb-2">{title}</h3>
            <div className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold">{price}</span>
                {price !== "Custom" && <span className="text-gray-500 font-medium">BHD</span>}
            </div>

            <div className="text-sm text-[var(--color-gold-dark)] font-medium mb-8 bg-yellow-50 py-2 px-3 border border-yellow-100 uppercase tracking-wide rounded-md">
                {delivery}
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckIcon className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                    </li>
                ))}
            </ul>

            <Link href="/contact" className="mt-auto">
                <Button variant={isPopular ? "solid" : "outline"} className={`w-full ${isPopular ? "shadow-lg" : ""}`}>
                    {price === "Custom" ? "Get Quote" : "Get Started"}
                </Button>
            </Link>
        </div>
    </TiltCardWrapper>
);
