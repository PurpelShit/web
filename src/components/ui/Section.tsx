import React from "react";

interface SectionProps {
    id?: string;
    className?: string;
    bg?: "white" | "gray" | "gold" | "dark" | "transparent";
    children: React.ReactNode;
    background?: React.ReactNode;
}

export const Section = ({ id, className = "", bg = "white", children, background }: SectionProps) => {
    const bgClasses = {
        white: "bg-white",
        gray: "bg-gray-50",
        gold: "bg-[var(--color-gold)] text-white",
        dark: "bg-neutral-950 text-white",
        transparent: "bg-transparent",
    };

    return (
        <section id={id} className={`py-20 md:py-28 relative ${bgClasses[bg]} ${className}`}>
            {background && (
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
                    {background}
                </div>
            )}
            <div className="container relative z-10 w-full">
                {children}
            </div>
        </section>
    );
};

export const SectionHeader = ({ title, subtitle, align = "center" }: { title: string, subtitle?: string, align?: "left" | "center" }) => {
    return (
        <div className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto" : "max-w-3xl"}`}>
            <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">{title}</h2>
            {subtitle && (
                <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
