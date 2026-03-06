import React from "react";
import Link from "next/link";

export const RamadanBanner = () => {
    return (
        <Link href="/contact">
            <div
                className="flex flex-col md:flex-row items-center justify-between px-6 py-4 rounded-xl mb-12 cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                style={{
                    backgroundColor: "#1C1F0F",
                    border: "1px solid #3A3D1F",
                }}
            >
                <div className="flex items-center gap-4 mb-3 md:mb-0">
                    <span className="text-2xl">🌙</span>
                    <div>
                        <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "0.95rem" }}>
                            Ramadan Special
                        </p>
                        <p style={{ color: "#B8B09A", fontSize: "0.85rem" }}>
                            Get a fully customised website for just 50 BHD. Limited slots available.
                        </p>
                    </div>
                </div>
                <button
                    style={{
                        backgroundColor: "#C9A84C",
                        color: "#1C1F0F",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        padding: "0.5rem 1.25rem",
                        borderRadius: "6px",
                        letterSpacing: "0.05em",
                        border: "none",
                        cursor: "pointer",
                    }}
                    className="uppercase tracking-wider shrink-0 hover:brightness-110 transition-all"
                >
                    Claim Offer
                </button>
            </div>
        </Link>
    );
};
