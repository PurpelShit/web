"use client";

import React from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const HeroImageBento = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yRight = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40 mix-blend-multiply">
            {/* Grid container overlaying the background */}
            <div className="absolute w-full h-[150%] top-[-10%] grid grid-cols-2 lg:grid-cols-4 gap-4 px-4 filter grayscale brightness-110 contrast-125">
                {/* Column 1 - Downward scroll */}
                <motion.div style={{ y: yLeft }} className="flex flex-col gap-4 mt-20">
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1600&auto=format&fit=crop" fill alt="Agency" className="object-cover" />
                    </div>
                </motion.div>

                {/* Column 2 - Upward scroll */}
                <motion.div style={{ y: yRight }} className="flex flex-col gap-4">
                    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop" fill alt="Strategy" className="object-cover" />
                    </div>
                </motion.div>

                {/* Column 3 - Downward scroll */}
                <motion.div style={{ y: yLeft }} className="flex flex-col gap-4 mt-40">
                    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop" fill alt="Design" className="object-cover" />
                    </div>
                </motion.div>

                {/* Column 4 - Upward scroll */}
                <motion.div style={{ y: yRight }} className="flex flex-col gap-4 mt-10">
                    <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image src="https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1600&auto=format&fit=crop" fill alt="Code" className="object-cover" />
                    </div>
                </motion.div>
            </div>

            {/* Gradient overlay to ensure text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-transparent" />

            {/* Soft gold wash to unify the black and white images with the gold text */}
            <div className="absolute inset-0 bg-[var(--color-gold)] opacity-[0.03] mix-blend-color" />
        </div>
    );
};
