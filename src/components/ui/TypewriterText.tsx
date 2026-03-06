"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = ["In 2 days.", "For 100 BHD.", "Done right."];

export const TypewriterText = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="inline-block relative min-w-[200px] md:min-w-[300px]">
            <AnimatePresence mode="wait">
                <motion.span
                    key={phrases[currentIndex]}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-[var(--color-gold)]"
                >
                    {phrases[currentIndex]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};
