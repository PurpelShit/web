"use client";

import { useState, useRef, useEffect } from "react";

const GOLD = "#c9a86c";
const GOLD_LIGHT = "#e8c98a";
const GOLD_DARK = "#9a7a42";
const BG_DARK = "#0d0d0d";
const BG_CARD = "#141414";
const BG_CARD2 = "#1a1810";
const TEXT = "#f0e6d3";
const TEXT_DIM = "#8a7a62";

const packages = [
    {
        id: "starter",
        name: "Starter",
        subtitle: "Your café's first home online",
        original: 100,
        sale: 50,
        delivery: "7 Days",
        icon: "✦",
        popular: false,
        features: [
            "5 Pages (Home, Menu, About, Gallery, Contact)",
            "Mobile-responsive design",
            "Google Maps integration",
            "WhatsApp floating button",
            "Social media links",
            "Basic SEO setup",
            "Contact & lead capture form",
            "Free domain — 1st year",
            "Free hosting setup",
        ],
    },
    {
        id: "premium",
        name: "Premium",
        subtitle: "Get discovered. Get booked.",
        original: 300,
        sale: 150,
        delivery: "2 Weeks",
        icon: "◈",
        popular: true,
        features: [
            "Everything in Starter",
            "Bilingual — Arabic + English",
            "Unlimited pages",
            "Custom branding & palette",
            "Digital / PDF menu upload",
            "Reservation & booking form",
            "Blog section",
            "Google Business profile setup",
            "Advanced SEO optimization",
            "WhatsApp Sales Assistant",
            "Google Analytics integration",
            "3 months free support",
        ],
    },
    {
        id: "ecommerce",
        name: "E-Commerce",
        subtitle: "Sell online. Take orders. Scale.",
        original: 800,
        sale: 400,
        delivery: "3 Weeks",
        icon: "⬡",
        popular: false,
        features: [
            "Everything in Premium",
            "Full online ordering system",
            "Benefit Pay / Telr payment gateway",
            "WhatsApp + email order alerts",
            "Delivery zone configuration",
            "Discount codes & promotions",
            "Customer accounts + order history",
            "Product management dashboard",
            "Inventory tracking",
            "6 months free support",
        ],
    },
    {
        id: "custom",
        name: "Custom",
        subtitle: "Your vision, no limits.",
        original: null,
        sale: null,
        delivery: "On Request",
        icon: "◉",
        popular: false,
        features: [
            "Fully bespoke UI/UX design",
            "Multi-branch / franchise support",
            "POS, ERP & CRM integrations",
            "Custom web applications",
            "Staff & admin portals",
            "Progressive Web App (PWA)",
            "Dedicated agency team",
            "1 year priority support",
        ],
    },
];

function Card3D({ children, style, className }: any) {
    const ref = useRef<HTMLDivElement>(null);
    const [rot, setRot] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(hover: none)").matches);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleMove = (e: any) => {
        if (isMobile) return;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setRot({ x: -y * 10, y: x * 10 });
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMove}
            onMouseEnter={() => !isMobile && setHovered(true)}
            onMouseLeave={() => { if (!isMobile) { setHovered(false); setRot({ x: 0, y: 0 }); } }}
            style={{
                transform: hovered
                    ? `perspective(800px) rotateX(${rot.x}deg) rotateY(${rot.y}deg) translateY(-6px) scale(1.01)`
                    : "perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)",
                transition: hovered ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                willChange: hovered ? "transform" : "auto",
                ...style,
            }}
            className={className}
        >
            {children}
        </div>
    );
}

function GlowOrb({ color, size, top, left, opacity = 0.18 }: any) {
    return (
        <div style={{
            position: "absolute",
            top, left,
            width: size, height: size,
            borderRadius: "50%",
            background: color,
            filter: `blur(${typeof size === 'number' ? size / 2 : parseInt(size) / 2}px)`,
            opacity,
            pointerEvents: "none",
            zIndex: 0,
        }} />
    );
}

function StarField() {
    const [stars, setStars] = useState<any[]>([]);

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        setStars(
            Array.from({ length: isMobile ? 30 : 80 }, () => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                s: Math.random() * 1.5 + 0.3,
                o: Math.random() * 0.5 + 0.1,
                d: Math.random() * 3 + 1.5,
                delay: Math.random() * 4,
            }))
        );
    }, []);

    if (stars.length === 0) return null;

    return (
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
            {stars.map((s, i) => (
                <circle key={i} cx={`${s.x}%`} cy={`${s.y}%`} r={s.s} fill={GOLD_LIGHT}>
                    <animate attributeName="opacity" values={`${s.o};${s.o * 3};${s.o}`} dur={`${s.d}s`} begin={`${s.delay}s`} repeatCount="indefinite" />
                </circle>
            ))}
        </svg>
    );
}

function PriceDisplay({ original, sale }: any) {
    const numRef = useRef<HTMLSpanElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const target = sale ?? 0;

    useEffect(() => {
        const el = containerRef.current;
        if (!el || target === 0) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let startTime: number | null = null;
                    const duration = 1200; // 1.2s animation

                    const step = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);

                        // Ease out quart
                        const easeOut = 1 - Math.pow(1 - progress, 4);
                        const currentVal = Math.floor(easeOut * target);

                        // Update DOM directly bypassing React render cycle 
                        if (numRef.current) {
                            numRef.current.innerText = currentVal.toString();
                        }

                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else if (numRef.current) {
                            numRef.current.innerText = target.toString();
                        }
                    };
                    requestAnimationFrame(step);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.5 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [target]);

    if (sale === null) return (
        <div style={{ fontSize: 32, fontWeight: 700, color: TEXT, letterSpacing: -1 }}>
            Let&apos;s Talk
        </div>
    );

    return (
        <div ref={containerRef} style={{ lineHeight: 1 }}>
            <div style={{ fontSize: 11, color: TEXT_DIM, textDecoration: "line-through", marginBottom: 2, letterSpacing: 1 }}>
                {original} BHD
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span
                    ref={numRef}
                    style={{
                        fontSize: 48,
                        fontWeight: 800,
                        background: `linear-gradient(135deg, ${GOLD_LIGHT}, ${GOLD}, ${GOLD_DARK})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        letterSpacing: -2,
                        lineHeight: 1,
                    }}>
                    0
                </span>
                <span style={{ fontSize: 14, color: GOLD, fontWeight: 500 }}>BHD</span>
                <span style={{
                    fontSize: 10,
                    background: "rgba(201,168,108,0.15)",
                    border: `1px solid ${GOLD}44`,
                    color: GOLD_LIGHT,
                    borderRadius: 20,
                    padding: "2px 8px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    marginLeft: 4,
                }}>
                    −50%
                </span>
            </div>
        </div>
    );
}

export default function Pricing() {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <div id="pricing" style={{
            background: BG_DARK,
            padding: "70px 20px 100px",
            position: "relative",
            overflow: "hidden",
        }}>
            <StarField />
            <GlowOrb color={GOLD} size={400} top="-100px" left="-100px" opacity={0.07} />
            <GlowOrb color={GOLD} size={300} top="60%" left="70%" opacity={0.06} />
            <GlowOrb color="#4a3a7a" size={250} top="30%" left="50%" opacity={0.08} />

            {/* Heading */}
            <div style={{ textAlign: "center", position: "relative", zIndex: 2, marginBottom: 48 }}>
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "linear-gradient(135deg, rgba(201,168,108,0.12), rgba(201,168,108,0.04))",
                    border: `1px solid ${GOLD}33`,
                    borderRadius: 30,
                    padding: "7px 20px",
                    marginBottom: 20,
                }}>
                    <span style={{ fontSize: 14 }}>🌙</span>
                    <span style={{ fontSize: 11, color: GOLD, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>
                        Ramadan Special — 50% Off Everything
                    </span>
                    <span style={{ fontSize: 14 }}>✨</span>
                </div>

                <h2 style={{
                    fontSize: "clamp(32px, 6vw, 56px)",
                    fontWeight: 800,
                    margin: "0 0 12px",
                    letterSpacing: -1.5,
                    lineHeight: 1.05,
                    background: `linear-gradient(135deg, ${TEXT} 40%, ${GOLD} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}>
                    Simple, Transparent Pricing
                </h2>
                <p style={{ fontSize: 14, color: TEXT_DIM, maxWidth: 380, margin: "0 auto", lineHeight: 1.7 }}>
                    A professionally built café website starting at just{" "}
                    <span style={{ color: GOLD, fontWeight: 700 }}>50 BHD</span>.
                    Offer ends with Ramadan.
                </p>

                {/* Decorative line */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 28 }}>
                    <div style={{ width: 60, height: 1, background: `linear-gradient(to right, transparent, ${GOLD}60)` }} />
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: GOLD, boxShadow: `0 0 8px ${GOLD}` }} />
                    <div style={{ width: 60, height: 1, background: `linear-gradient(to left, transparent, ${GOLD}60)` }} />
                </div>
            </div>

            {/* Cards */}
            <div style={{
                maxWidth: 980,
                margin: "0 auto",
                position: "relative",
                zIndex: 2,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 20,
            }}>
                {packages.map((pkg) => {
                    const isExpanded = expanded === pkg.id;
                    return (
                        <Card3D key={pkg.id}>
                            <div style={{
                                background: pkg.popular
                                    ? `linear-gradient(160deg, #1f1a0e, #221d0f, #1a1507)`
                                    : `linear-gradient(160deg, ${BG_CARD}, #161616, #121212)`,
                                border: pkg.popular
                                    ? `1px solid ${GOLD}88`
                                    : "1px solid rgba(255,255,255,0.07)",
                                borderRadius: 20,
                                overflow: "hidden",
                                position: "relative",
                                height: "100%",
                            }}>
                                {/* Top shimmer line */}
                                <div style={{
                                    height: 2,
                                    background: pkg.popular
                                        ? `linear-gradient(to right, transparent, ${GOLD}, ${GOLD_LIGHT}, ${GOLD}, transparent)`
                                        : `linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)`,
                                }} />

                                {/* Popular badge */}
                                {pkg.popular && (
                                    <div style={{
                                        position: "absolute", top: 14, right: 14,
                                        background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
                                        color: BG_DARK,
                                        fontSize: 9,
                                        fontWeight: 800,
                                        letterSpacing: "0.15em",
                                        textTransform: "uppercase",
                                        padding: "4px 10px",
                                        borderRadius: 20,
                                        boxShadow: `0 4px 12px ${GOLD}44`,
                                    }}>
                                        ★ Most Popular
                                    </div>
                                )}

                                {/* Inner glow */}
                                {pkg.popular && (
                                    <div style={{
                                        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                                        width: 200, height: 120,
                                        background: `radial-gradient(ellipse at top, ${GOLD}18, transparent 70%)`,
                                        pointerEvents: "none",
                                    }} />
                                )}

                                <div style={{ padding: "26px 22px 22px" }}>
                                    {/* Icon + Name */}
                                    <div style={{ marginBottom: 16 }}>
                                        <div style={{
                                            fontSize: 22,
                                            color: GOLD,
                                            marginBottom: 6,
                                            filter: pkg.popular ? `drop-shadow(0 0 8px ${GOLD}88)` : "none",
                                        }}>
                                            {pkg.icon}
                                        </div>
                                        <div style={{ fontSize: 20, fontWeight: 800, color: TEXT, letterSpacing: -0.3 }}>
                                            {pkg.name}
                                        </div>
                                        <div style={{ fontSize: 11, color: TEXT_DIM, marginTop: 2, fontStyle: "italic" }}>
                                            {pkg.subtitle}
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div style={{ marginBottom: 16 }}>
                                        <PriceDisplay original={pkg.original} sale={pkg.sale} />
                                    </div>

                                    {/* Delivery pill */}
                                    <div style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 5,
                                        background: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        borderRadius: 20,
                                        padding: "4px 12px",
                                        fontSize: 10,
                                        color: TEXT_DIM,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        marginBottom: 20,
                                    }}>
                                        <span style={{ color: GOLD, fontSize: 8 }}>⏱</span>
                                        {pkg.delivery} Delivery
                                    </div>

                                    {/* Divider */}
                                    <div style={{
                                        height: 1,
                                        background: pkg.popular
                                            ? `linear-gradient(to right, transparent, ${GOLD}40, transparent)`
                                            : "rgba(255,255,255,0.06)",
                                        marginBottom: 18,
                                    }} />

                                    {/* Features */}
                                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                                        {(isExpanded ? pkg.features : pkg.features.slice(0, 5)).map((f, i) => (
                                            <li key={i} style={{
                                                display: "flex",
                                                gap: 8,
                                                alignItems: "flex-start",
                                                marginBottom: 9,
                                                fontSize: 12,
                                                color: i === 0 && pkg.id !== "starter" ? TEXT_DIM : "#b0a090",
                                                lineHeight: 1.4,
                                                opacity: i === 0 && pkg.id !== "starter" ? 0.6 : 1,
                                            }}>
                                                <span style={{
                                                    fontSize: 9, color: GOLD, flexShrink: 0, marginTop: 3,
                                                    filter: `drop-shadow(0 0 3px ${GOLD}88)`,
                                                }}>✦</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {pkg.features.length > 5 && (
                                        <button
                                            onClick={() => setExpanded(isExpanded ? null : pkg.id)}
                                            style={{
                                                background: "none",
                                                border: `1px solid rgba(255,255,255,0.1)`,
                                                borderRadius: 8,
                                                color: TEXT_DIM,
                                                fontSize: 11,
                                                padding: "6px 14px",
                                                cursor: "pointer",
                                                width: "100%",
                                                marginBottom: 14,
                                                transition: "all 0.2s",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            {isExpanded ? "▲ Show less" : `▼ +${pkg.features.length - 5} more features`}
                                        </button>
                                    )}

                                    {/* CTA */}
                                    <a
                                        href={pkg.sale === null ? "/contact" : "https://wa.me/918218699398"}
                                        target={pkg.sale === null ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        style={{
                                            display: "block",
                                            textAlign: "center",
                                            textDecoration: "none",
                                            width: "100%",
                                            padding: "13px",
                                            background: pkg.popular
                                                ? `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`
                                                : "transparent",
                                            color: pkg.popular ? BG_DARK : TEXT,
                                            border: pkg.popular ? "none" : `1px solid ${GOLD}44`,
                                            borderRadius: 10,
                                            fontSize: 13,
                                            fontWeight: 800,
                                            letterSpacing: "0.08em",
                                            textTransform: "uppercase",
                                            cursor: "pointer",
                                            boxShadow: pkg.popular ? `0 8px 24px ${GOLD}33` : "none",
                                            transition: "all 0.2s",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}>
                                        {pkg.sale === null ? "Get Quote →" : "Get Started →"}
                                    </a>
                                </div>

                                {/* Bottom shimmer */}
                                <div style={{
                                    height: 1,
                                    background: pkg.popular
                                        ? `linear-gradient(to right, transparent, ${GOLD}40, transparent)`
                                        : "transparent",
                                }} />
                            </div>
                        </Card3D>
                    );
                })}
            </div>

            {/* Ramadan CTA strip */}
            <div style={{
                maxWidth: 980,
                margin: "40px auto 0",
                position: "relative",
                zIndex: 2,
            }}>
                <div style={{
                    background: `linear-gradient(135deg, #1a1507, #1f1a0e)`,
                    border: `1px solid ${GOLD}44`,
                    borderRadius: 20,
                    padding: "28px 32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 16,
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <div style={{
                        position: "absolute", inset: 0,
                        background: `radial-gradient(ellipse at 0% 50%, ${GOLD}0d, transparent 60%)`,
                        pointerEvents: "none",
                    }} />
                    <div style={{ position: "relative" }}>
                        <div style={{ fontSize: 22, marginBottom: 4 }}>🌙</div>
                        <div style={{ fontSize: 18, fontWeight: 800, color: TEXT, letterSpacing: -0.3 }}>
                            Ramadan offer — limited time
                        </div>
                        <div style={{ fontSize: 12, color: TEXT_DIM, marginTop: 4, lineHeight: 1.6 }}>
                            Get your café live before Eid. 50% off all packages, no hidden fees.
                        </div>
                    </div>
                    <a
                        href="https://wa.me/918218699398"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            textDecoration: "none",
                            background: `linear-gradient(135deg, ${GOLD}, ${GOLD_DARK})`,
                            border: "none",
                            borderRadius: 12,
                            padding: "14px 28px",
                            fontSize: 13,
                            fontWeight: 800,
                            color: BG_DARK,
                            cursor: "pointer",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            boxShadow: `0 8px 30px ${GOLD}40`,
                            flexShrink: 0,
                        }}>
                        Claim 50% Off →
                    </a>
                </div>
            </div>

            {/* Hosting Add-ons */}
            <div style={{ maxWidth: 980, margin: "48px auto 0", position: "relative", zIndex: 2 }}>
                <div style={{ textAlign: "center", marginBottom: 28 }}>
                    <h3 style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: TEXT,
                        margin: "0 0 8px",
                        letterSpacing: -0.5,
                    }}>
                        Hosting & Maintenance Add-ons
                    </h3>
                    <p style={{ fontSize: 12, color: TEXT_DIM, margin: 0 }}>
                        Keep your site fast, secure, and online 24/7 without lifting a finger.
                    </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                    {[
                        {
                            name: "Starter Hosting", sale: 17, original: 50, unit: "/ month",
                            features: ["Enterprise Global CDN", "Free SSL Certificate", "99.9% Uptime Guarantee", "Basic Monthly Backups"],
                        },
                        {
                            name: "Professional Hosting", sale: 59, original: 100, unit: "/ month",
                            features: ["Everything in Starter", "Daily Automated Backups", "Priority Security Patching", "5× Technical Support / month", "Advanced Traffic Analytics"],
                        },
                    ].map((plan, i) => (
                        <Card3D key={i}>
                            <div style={{
                                background: `linear-gradient(160deg, ${BG_CARD}, #161616)`,
                                border: "1px solid rgba(255,255,255,0.07)",
                                borderRadius: 18,
                                padding: "22px",
                                position: "relative",
                                overflow: "hidden",
                                height: "100%",
                            }}>
                                <div style={{ height: 1, background: `linear-gradient(to right, transparent, ${GOLD}50, transparent)`, marginBottom: 18 }} />
                                <div style={{ display: "flex", justifyItems: "stretch", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                                    <div style={{ fontSize: 15, fontWeight: 700, color: TEXT }}>{plan.name}</div>
                                    <div style={{ textAlign: "right" }}>
                                        <div style={{
                                            fontSize: 9, color: GOLD, fontWeight: 700, letterSpacing: "0.1em",
                                            background: `${GOLD}1a`, border: `1px solid ${GOLD}33`,
                                            padding: "2px 8px", borderRadius: 10, marginBottom: 4, display: "inline-block",
                                        }}>
                                            Ramadan {plan.sale} BHD/mo
                                        </div>
                                        <div style={{ display: "flex", alignItems: "baseline", gap: 3, justifyContent: "flex-end" }}>
                                            <span style={{ fontSize: 11, color: TEXT_DIM, textDecoration: "line-through" }}>{plan.original}</span>
                                            <span style={{ fontSize: 26, fontWeight: 800, color: GOLD, lineHeight: 1 }}>{plan.sale}</span>
                                            <span style={{ fontSize: 11, color: TEXT_DIM }}>{plan.unit}</span>
                                        </div>
                                    </div>
                                </div>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                    {plan.features.map((f, j) => (
                                        <li key={j} style={{ display: "flex", gap: 7, alignItems: "flex-start", marginBottom: 7, fontSize: 12, color: "#9a8a76", lineHeight: 1.4 }}>
                                            <span style={{ color: GOLD, fontSize: 8, flexShrink: 0, marginTop: 3 }}>✦</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card3D>
                    ))}
                </div>
            </div>

        </div>
    );
}
