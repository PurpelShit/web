"use client";

import { WhatsAppIcon } from "./Icons";
import { useEffect, useState } from "react";

export const FloatingWhatsApp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay showing the button so it somewhat feels intentional 
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <a
            href="https://wa.me/918218699398"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 md:hidden"
            aria-label="Chat with us on WhatsApp"
        >
            <WhatsAppIcon className="w-8 h-8" />
        </a>
    );
};
