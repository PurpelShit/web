"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const InteractiveBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="absolute top-0 left-0 w-full h-[120%] overflow-hidden pointer-events-none z-0">
            {/* Base gradient layer to frame the effect */}
            <div className="absolute w-full h-full bg-white" />

            {/* Interactive moving spotlight core */}
            <motion.div
                className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-90 blur-[40px]"
                style={{
                    background: "radial-gradient(circle, var(--color-gold) 0%, var(--color-gold-light) 40%, transparent 70%)",
                    x: springX,
                    y: springY,
                    marginLeft: "-300px", // Offset by half width
                    marginTop: "-300px",  // Offset by half height
                }}
            />

            {/* Rotating gradient aura */}
            <motion.div
                className="absolute top-0 left-0 w-[900px] h-[900px] rounded-full opacity-70 blur-[80px]"
                style={{
                    background: "conic-gradient(from 0deg, var(--color-gold-light) 0%, transparent 30%, var(--color-gold) 60%, transparent 100%)",
                    x: springX,
                    y: springY,
                    marginLeft: "-450px", // Offset by half width
                    marginTop: "-450px",  // Offset by half height
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, ease: "linear", repeat: Infinity }}
            />
            <motion.div
                className="absolute w-[1000px] h-[1000px] rounded-full opacity-40 blur-[120px] right-0 bottom-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle, var(--color-gold) 0%, transparent 80%)",
                }}
                animate={{
                    x: [0, 100, -100, 0],
                    y: [0, 50, -50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
};
