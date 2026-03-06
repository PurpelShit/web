"use client";

// components/HeroGlow.jsx
export default function HeroGlow() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
            {/* Primary gold glow — top center */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '700px',
                height: '700px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.06) 40%, transparent 70%)',
                filter: 'blur(40px)',
            }} />

            {/* Secondary warm glow — bottom left */}
            <div style={{
                position: 'absolute',
                bottom: '0%',
                left: '-5%',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)',
                filter: 'blur(50px)',
            }} />

            {/* Accent glow — right side */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '-8%',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,180,50,0.10) 0%, transparent 60%)',
                filter: 'blur(45px)',
            }} />

            {/* Subtle floating dots — decorative only */}
            {[
                { top: '20%', left: '15%', size: 6, opacity: 0.4 },
                { top: '65%', left: '80%', size: 4, opacity: 0.3 },
                { top: '40%', left: '88%', size: 5, opacity: 0.25 },
                { top: '75%', left: '12%', size: 3, opacity: 0.35 },
                { top: '15%', left: '72%', size: 4, opacity: 0.3 },
            ].map((dot, i) => (
                <div key={i} style={{
                    position: 'absolute',
                    top: dot.top,
                    left: dot.left,
                    width: dot.size,
                    height: dot.size,
                    borderRadius: '50%',
                    backgroundColor: `rgba(201, 168, 76, ${dot.opacity})`,
                }} />
            ))}
        </div>
    )
}
