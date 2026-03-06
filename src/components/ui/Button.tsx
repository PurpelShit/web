"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "solid" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = "solid", size = "md", children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            solid: "bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-dark)] shadow-sm",
            outline: "border border-[var(--color-gold)] text-[var(--color-gold-dark)] hover:bg-[var(--color-gold)] hover:text-white",
            ghost: "hover:bg-gray-100 hover:text-gray-900 text-gray-600",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

        return (
            <motion.button
                ref={ref}
                className={combinedClassName}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
