"use client";

import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show on desktop
        const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const move = (e: MouseEvent) => {
            if (!cursorRef.current) return;
            cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.closest("a") ||
                target.closest("button") ||
                target.closest("[data-cursor='large']");
            setIsHovering(!!isInteractive);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", handleMouseOver);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
            style={{
                willChange: "transform",
            }}
        >
            <div
                className="rounded-full border-2 border-[#C9A84C] transition-all duration-200 ease-out"
                style={{
                    width: isHovering ? 48 : 24,
                    height: isHovering ? 48 : 24,
                    marginLeft: isHovering ? -24 : -12,
                    marginTop: isHovering ? -24 : -12,
                    backgroundColor: isHovering ? "rgba(201, 168, 76, 0.15)" : "transparent",
                }}
            />
        </div>
    );
};
