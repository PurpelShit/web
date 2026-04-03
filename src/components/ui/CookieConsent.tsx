"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_KEY = "100dinar_cookie_consent";

export function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Only show if user hasn't already decided
        const stored = localStorage.getItem(COOKIE_KEY);
        if (!stored) {
            // Small delay so it doesn't flash on first paint
            const t = setTimeout(() => setVisible(true), 1200);
            return () => clearTimeout(t);
        }
    }, []);

    const accept = () => {
        localStorage.setItem(COOKIE_KEY, "accepted");
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem(COOKIE_KEY, "declined");
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="cookie-banner"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-6 left-6 z-[9999] max-w-sm w-[calc(100vw-3rem)] sm:w-sm"
                    role="dialog"
                    aria-label="Cookie consent"
                    aria-live="polite"
                >
                    {/* Card */}
                    <div
                        className="relative overflow-hidden"
                        style={{
                            background: "#1c1917",
                            border: "1px solid rgba(201, 168, 76, 0.25)",
                            borderRadius: "4px",
                            padding: "28px 28px 24px",
                            boxShadow: "0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,168,76,0.08)",
                        }}
                    >
                        {/* Subtle gold gradient accent strip at top */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "2px",
                                background: "linear-gradient(90deg, transparent, #c9a84c, transparent)",
                            }}
                        />

                        {/* Icon + Heading */}
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                            <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>🍪</span>
                            <p
                                style={{
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    color: "#FAF7F2",
                                    letterSpacing: "-0.02em",
                                    margin: 0,
                                }}
                            >
                                We use cookies
                            </p>
                        </div>

                        {/* Body */}
                        <p
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.85rem",
                                color: "rgba(250, 247, 242, 0.6)",
                                lineHeight: 1.6,
                                marginBottom: "20px",
                            }}
                        >
                            We use cookies to personalise your experience and analyse site traffic. You can choose to accept or decline below.{" "}
                            <Link
                                href="/privacy-policy"
                                style={{
                                    color: "#c9a84c",
                                    textDecoration: "underline",
                                    textUnderlineOffset: "2px",
                                }}
                            >
                                Learn more
                            </Link>
                        </p>

                        {/* Buttons */}
                        <div style={{ display: "flex", gap: "10px" }}>
                            {/* Accept — gold solid */}
                            <button
                                id="cookie-accept-btn"
                                onClick={accept}
                                style={{
                                    flex: 1,
                                    height: "40px",
                                    borderRadius: "2px",
                                    border: "none",
                                    background: "#c9a84c",
                                    color: "#1c1917",
                                    fontFamily: "var(--font-display)",
                                    fontSize: "0.78rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    cursor: "pointer",
                                    transition: "background 0.2s, transform 0.15s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLButtonElement).style.background = "#b39239";
                                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLButtonElement).style.background = "#c9a84c";
                                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                                }}
                            >
                                Accept All
                            </button>

                            {/* Decline — ghost */}
                            <button
                                id="cookie-decline-btn"
                                onClick={decline}
                                style={{
                                    flex: 1,
                                    height: "40px",
                                    borderRadius: "2px",
                                    border: "1px solid rgba(201, 168, 76, 0.35)",
                                    background: "transparent",
                                    color: "rgba(250, 247, 242, 0.55)",
                                    fontFamily: "var(--font-display)",
                                    fontSize: "0.78rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    cursor: "pointer",
                                    transition: "border-color 0.2s, color 0.2s, transform 0.15s",
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.7)";
                                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(250,247,242,0.9)";
                                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.35)";
                                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(250,247,242,0.55)";
                                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                                }}
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
