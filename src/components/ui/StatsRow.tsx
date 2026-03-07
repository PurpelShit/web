"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Reveal } from "./Animations";
import { useRef } from "react";

function MagneticStat({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        ref.current.style.transform = 'translate(0, 0)';
        ref.current.style.transition = 'transform 0.5s ease';
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.1s ease', display: 'inline-block' }}
        >
            {children}
        </div>
    );
}

function StatItem({ end, suffix, label, prefix = "" }: { end: number; suffix: string; label: string; prefix?: string }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    return (
        <div ref={ref} className="text-center px-4">
            <MagneticStat>
                <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 mb-2">
                    {prefix}
                    {inView ? <CountUp end={end} duration={2.5} /> : "0"}
                    {suffix}
                </div>
            </MagneticStat>
            <div className="font-display text-sm md:text-base uppercase tracking-widest text-gray-500">
                {label}
            </div>
        </div>
    );
}

export const StatsRow = () => {
    return (
        <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 py-16 md:py-20 border-y border-gray-200">
                <StatItem end={50} suffix="+" label="Websites Delivered" />
                <StatItem end={2} suffix="-Day" label="Average Delivery" />
                <StatItem end={100} suffix="%" label="Client Satisfaction" />
                <StatItem end={100} suffix=" BHD" label="Starting Price" prefix="" />
            </div>
        </Reveal>
    );
};
