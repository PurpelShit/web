"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { MenuIcon, CloseIcon, WhatsAppIcon } from "../ui/Icons";
import Image from "next/image";

const LINKS = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Portfolio", href: "/portfolio" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 50,
            backgroundColor: 'rgba(250, 247, 242, 0.92)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(201, 168, 76, 0.12)',
            transition: 'all 0.3s ease'
        }}>
            <div style={{
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '16px 32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="The 100 Dinar Company"
                        width={280}
                        height={64}
                        style={{ height: '64px', width: 'auto', display: 'block', objectFit: 'contain' }}
                        priority
                    />
                </Link>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex items-center space-x-8">
                    <div className="flex space-x-6">
                        {LINKS.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-[var(--color-gold)] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <a
                        href="https://wa.me/918218699398"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full font-semibold px-5 py-2.5 text-sm transition-all duration-200 hover:opacity-90 hover:scale-105 text-white"
                        style={{ backgroundColor: '#25D366' }}
                        data-cursor="large"
                    >
                        <WhatsAppIcon className="w-4 h-4" /> Let&apos;s Talk
                    </a>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden flex flex-col p-4 space-y-4">
                    {LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-medium px-4 py-2 hover:bg-gray-50 rounded-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="px-4 pt-2">
                        <a
                            href="https://wa.me/918218699398"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full font-semibold px-5 py-3 text-sm transition-all duration-200 hover:opacity-90 text-white w-full justify-center"
                            style={{ backgroundColor: '#25D366' }}
                        >
                            <WhatsAppIcon className="w-5 h-5" /> Let&apos;s Talk on WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
