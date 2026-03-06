"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
    const opacity = useTransform(progress, range, [0.2, 1]);
    const fontWeight = useTransform(progress, range, [300, 700]);

    return (
        <motion.span
            style={{ opacity, fontWeight, display: "inline-block", marginRight: "0.25em" }}
        >
            {word}
        </motion.span>
    );
}

export const ScrollBoldText = ({ text, className = "" }: { text: string; className?: string }) => {
    const containerRef = useRef(null);
    const words = text.split(" ");

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.3"],
    });

    return (
        <p ref={containerRef} className={className} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                return (
                    <Word
                        key={i}
                        word={word}
                        progress={scrollYProgress}
                        range={[start, end]}
                    />
                );
            })}
        </p>
    );
};
