"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const Carousel = ({ children }: { children: React.ReactNode[] }) => {
    // We use embla-carousel for smooth, interactive, modern swipeable sliders
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", dragFree: true }, [
        Autoplay({ delay: 4000, stopOnInteraction: true })
    ]);

    return (
        <div className="overflow-hidden py-10 cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex gap-8">
                {React.Children.map(children, (child, index) => (
                    // Each slide takes 100% width on mobile, and 50% on desktop to show 2 at once
                    <div className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 pl-4" key={index}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};
