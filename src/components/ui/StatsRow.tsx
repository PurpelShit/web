"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Reveal } from "./Animations";

function StatItem({ end, suffix, label, prefix = "" }: { end: number; suffix: string; label: string; prefix?: string }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    return (
        <div ref={ref} className="text-center px-4">
            <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 mb-2">
                {prefix}
                {inView ? <CountUp end={end} duration={2.5} /> : "0"}
                {suffix}
            </div>
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
