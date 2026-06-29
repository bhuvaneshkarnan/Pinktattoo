"use client";

import { useEffect, useRef, useState } from "react";

// Shiny 3D Red Pushpin Component
const PushPin = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 drop-shadow-[2px_5px_3px_rgba(0,0,0,0.55)]">
    {/* Metal needle needle stuck into card */}
    <path d="M16 16 L11 27" stroke="#333333" strokeWidth="2.5" strokeLinecap="round" />
    <defs>
      <radialGradient id="pinRed" cx="35%" cy="30%" r="60%">
        <stop offset="0%" stopColor="#FF6B6B" />
        <stop offset="60%" stopColor="#E8246A" />
        <stop offset="100%" stopColor="#800D32" />
      </radialGradient>
    </defs>
    {/* Red round plastic pin head */}
    <circle cx="16" cy="14" r="7.5" fill="url(#pinRed)" />
    <ellipse cx="16" cy="17" rx="5" ry="1.5" fill="#000000" opacity="0.15" />
    {/* Shimmer light reflection spot */}
    <circle cx="14" cy="12" r="2.2" fill="#FFFFFF" opacity="0.85" />
  </svg>
);

// Small leaf sketch next to step numbers
const SmallLeafSketch = () => (
  <svg className="w-7 h-7 text-[#2C2B29]/35" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 26 C12 20 20 12 26 6" />
    <path d="M14 18 C11 14 11 10 14 8 C17 6 19 10 20 12" />
    <path d="M18 14 C21 11 23 9 25 11 C27 13 25 15 22 16" />
  </svg>
);

// Botanical Branch sketch for Card 1
const BranchDrawing = () => (
  <svg className="w-20 h-20 text-[#2C2B29]/15 absolute right-4 top-4 select-none pointer-events-none" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M10 54 C18 42 32 25 50 12" strokeLinecap="round" />
    <path d="M22 38 C16 32 14 26 19 22 C24 18 28 22 29 28" />
    <path d="M34 26 C28 20 26 14 31 10 C36 6 40 10 41 16" />
    <path d="M25 41 C33 40 39 42 41 37 C43 32 38 28 32 31" />
    <path d="M38 29 C46 28 51 30 53 25 C55 20 50 16 43 19" />
  </svg>
);

// Moth sketch for Card 2
const MothDrawing = () => (
  <svg className="w-20 h-20 text-[#2C2B29]/15 absolute right-4 top-4 select-none pointer-events-none" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2">
    <line x1="32" y1="16" x2="32" y2="48" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="12" r="2" />
    <path d="M32 10 Q24 5 20 7" />
    <path d="M32 10 Q40 5 44 7" />
    <path d="M32 26 C12 12 8 26 32 40 Z" />
    <path d="M32 36 C10 30 12 44 32 48 Z" />
    <path d="M32 26 C52 12 56 26 32 40 Z" />
    <path d="M32 36 C54 30 52 44 32 48 Z" />
  </svg>
);

// Thistle flower sketch for Card 3
const ThistleDrawing = () => (
  <svg className="w-20 h-20 text-[#2C2B29]/15 absolute right-4 top-4 select-none pointer-events-none" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M32 26 L32 58" strokeWidth="2" />
    <path d="M20 26 C20 38 44 38 44 26 Z" />
    <path d="M20 26 L44 26" />
    <path d="M22 26 Q12 8 24 10 Q14 2 26 8 Q20 -2 32 6 Q44 -2 38 8 Q50 2 40 10 Q30 8 42 26" />
    <path d="M32 40 Q20 38 16 32" />
    <path d="M32 48 Q44 46 48 40" />
  </svg>
);

// Mystical Hand/Eye sketch for Card 4
const HamsaHandDrawing = () => (
  <svg className="w-20 h-20 text-[#2C2B29]/15 absolute right-4 top-4 select-none pointer-events-none" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M32 52 C25 52 19 48 19 40 C19 35 21 29 21 24 C21 21 23 21 23 24 L23 32 L26 32 L26 15 C26 13 28 13 28 15 L28 30 L31 30 L31 10 C31 8 33 8 33 10 L33 30 L36 30 L36 15 C36 13 38 13 38 15 L38 32 L41 32 L41 24 C41 22 43 22 43 24 C43 29 45 35 45 40 C45 48 39 52 32 52 Z" />
    <path d="M25 35 Q32 29 39 35" />
    <path d="M25 35 Q32 41 39 35" />
    <circle cx="32" cy="35" r="3.5" />
  </svg>
);

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pin1Ref = useRef<HTMLDivElement>(null);
  const pin2Ref = useRef<HTMLDivElement>(null);
  const pin3Ref = useRef<HTMLDivElement>(null);
  const pin4Ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updateCoords = () => {
      if (
        !containerRef.current ||
        !pin1Ref.current ||
        !pin2Ref.current ||
        !pin3Ref.current ||
        !pin4Ref.current
      )
        return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const pins = [pin1Ref.current, pin2Ref.current, pin3Ref.current, pin4Ref.current];

      const newCoords = pins.map((pin) => {
        const rect = pin.getBoundingClientRect();
        return {
          // Find center point of pin relative to the wrapper container
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      });

      setCoords(newCoords);
    };

    updateCoords();

    // Trigger update on resize and via ResizeObserver
    window.addEventListener("resize", updateCoords);
    const observer = new ResizeObserver(updateCoords);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", updateCoords);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-6xl mx-auto pt-6 pb-16">
      
      {/* Curved SVG string linking pushpins */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" aria-hidden="true">
        {coords.length === 4 && (
          <path
            d={`M ${coords[0].x} ${coords[0].y} 
               C ${(coords[0].x + coords[1].x) / 2} ${coords[0].y}, 
                 ${(coords[0].x + coords[1].x) / 2} ${coords[1].y}, 
                 ${coords[1].x} ${coords[1].y}
               C ${(coords[1].x + coords[2].x) / 2} ${coords[1].y}, 
                 ${(coords[1].x + coords[2].x) / 2} ${coords[2].y}, 
                 ${coords[2].x} ${coords[2].y}
               C ${(coords[2].x + coords[3].x) / 2} ${coords[2].y}, 
                 ${(coords[2].x + coords[3].x) / 2} ${coords[3].y}, 
                 ${coords[3].x} ${coords[3].y}`}
            fill="none"
            stroke="#E8246A"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="drop-shadow-[0_2.5px_4px_rgba(0,0,0,0.55)]"
          />
        )}
      </svg>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        
        {/* Left Column (Row 1 Left Text, Card 2, Card 4) */}
        <div className="flex flex-col gap-16 lg:gap-28">
          
          {/* Row 1 Left: Title Block */}
          <div className="space-y-3 lg:max-w-md lg:pr-8">
            <span className="font-label text-xs uppercase tracking-widest text-brand-pink font-semibold block">
              The Journey
            </span>
            <h2 className="font-serif text-[2.5rem] sm:text-6xl lg:text-7xl font-normal text-[#E5E4DE] leading-[1.1] tracking-wide mt-2">
              From Idea <br />
              To Ink
            </h2>
            <p className="font-body text-sm text-[#8E8D88] leading-relaxed">
              Here&apos;s how we bring your tattoo to life, guiding you through every step of the process from start to finish, ensuring your vision becomes a stunning reality.
            </p>
          </div>

          {/* Row 2 Left: Card 2 */}
          <div className="relative self-start w-full max-w-md bg-[#E2E1DA] border border-[#C5C4BD] p-8 rounded-2xl shadow-xl timeline-grid-paper text-[#2C2B29] rotate-[-1.5deg]">
            <div ref={pin2Ref} className="absolute -top-3.5 -right-3.5 w-8 h-8 z-30">
              <PushPin />
            </div>
            
            <MothDrawing />

            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-3xl font-normal text-[#2C2B29]/40 leading-none">02</span>
              <SmallLeafSketch />
            </div>

            <h3 className="font-serif text-lg font-bold tracking-wide text-[#2C2B29] mb-3 leading-none">Bringing It to Paper</h3>
            <p className="font-body text-xs sm:text-sm text-[#5C5B55] leading-relaxed">
              Once I understand your vision, I create a one-on-one design tailored to you. This stage is all about precision — clean composition, bold contrast, and a layout that flows naturally with your body. For flash tattoos, you&apos;ll simply choose a design from my curated flash book.
            </p>
          </div>

          {/* Row 4 Left: Card 4 */}
          <div className="relative self-start w-full max-w-md bg-[#E2E1DA] border border-[#C5C4BD] p-8 rounded-2xl shadow-xl timeline-grid-paper text-[#2C2B29] rotate-[-1deg]">
            <div ref={pin4Ref} className="absolute -top-3.5 -right-3.5 w-8 h-8 z-30">
              <PushPin />
            </div>
            
            <HamsaHandDrawing />

            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-3xl font-normal text-[#2C2B29]/40 leading-none">04</span>
              <SmallLeafSketch />
            </div>

            <h3 className="font-serif text-lg font-bold tracking-wide text-[#2C2B29] mb-3 leading-none">Keeping It Sharp</h3>
            <p className="font-body text-xs sm:text-sm text-[#5C5B55] leading-relaxed">
              Your tattoo is only as good as its healing process. I&apos;ll provide clear aftercare instructions to ensure the design heals cleanly and stays bold for years to come. From touch-ups to long-term care, I&apos;m here to make sure your piece looks as good on day 1,000 as it did on day 1.
            </p>
          </div>
        </div>

        {/* Right Column (Card 1, Card 3) */}
        <div className="flex flex-col gap-16 lg:gap-28 lg:pt-16">
          
          {/* Row 1 Right: Card 1 */}
          <div className="relative self-end lg:self-start w-full max-w-md bg-[#E2E1DA] border border-[#C5C4BD] p-8 rounded-2xl shadow-xl timeline-grid-paper text-[#2C2B29] rotate-[1.5deg]">
            <div ref={pin1Ref} className="absolute -top-3.5 -right-3.5 w-8 h-8 z-30">
              <PushPin />
            </div>
            
            <BranchDrawing />

            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-3xl font-normal text-[#2C2B29]/40 leading-none">01</span>
              <SmallLeafSketch />
            </div>

            <h3 className="font-serif text-lg font-bold tracking-wide text-[#2C2B29] mb-3 leading-none">Share Your Idea</h3>
            <p className="font-body text-xs sm:text-sm text-[#5C5B55] leading-relaxed">
              It all starts with a conversation. We&apos;ll sit down — in person or virtually — to talk about your vision, placement, and style preferences. Whether you have a clear concept or just a feeling, I&apos;ll help refine it into something that works perfectly for your skin and body.
            </p>
          </div>

          {/* Row 3 Right: Card 3 */}
          <div className="relative self-end lg:self-start w-full max-w-md bg-[#E2E1DA] border border-[#C5C4BD] p-8 rounded-2xl shadow-xl timeline-grid-paper text-[#2C2B29] rotate-[2deg] lg:mt-32">
            <div ref={pin3Ref} className="absolute -top-3.5 -right-3.5 w-8 h-8 z-30">
              <PushPin />
            </div>
            
            <ThistleDrawing />

            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-3xl font-normal text-[#2C2B29]/40 leading-none">03</span>
              <SmallLeafSketch />
            </div>

            <h3 className="font-serif text-lg font-bold tracking-wide text-[#2C2B29] mb-3 leading-none">The Tattoo Session</h3>
            <p className="font-body text-xs sm:text-sm text-[#5C5B55] leading-relaxed">
              On the day of your appointment, we&apos;ll confirm placement and walk through the process before the needle ever touches skin. My focus is on clean, steady work with minimal discomfort. You&apos;ll leave with a bold, striking piece of blackwork designed to last a lifetime.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
