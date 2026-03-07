"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const SmoothScroller = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        // Disable Lenis smooth scrolling on touch devices as it harms performance 
        // and native touch scrolling is already hardware accelerated
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const lenis = new Lenis({
            duration: 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};
