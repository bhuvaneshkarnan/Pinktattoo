"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star, Mail, MapPin, Sparkles } from "lucide-react";
import PolaroidCard from "@/components/PolaroidCard";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", idea: "" });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: "", email: "", phone: "", idea: "" });
  };

  // Smooth scroll helper for buttons
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll reveal IntersectionObserver trigger
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal-on-scroll, .reveal-stagger");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Trigger once
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full bg-bg-base overflow-x-hidden">
      
      {/* 1. HERO SECTION - EXACTLY MATCHING ROWAN BLACK */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-24 pb-16 bg-black border-b border-border-ink/20">
        
        {/* Subtle background smoke texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(25,23,32,0.15),transparent_70%)] pointer-events-none" />
        
        {/* Typography Block */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center relative z-10 space-y-6">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.2rem] font-normal tracking-wide text-[#E5E4DE] leading-[1.1] max-w-5xl mx-auto">
            The Kind of Tattoo <br />
            You Won&apos;t Regret.
          </h1>
          
          <div className="font-body text-xs sm:text-sm text-[#8E8D88] space-y-1 uppercase tracking-widest leading-relaxed">
            <p>Exclusive blackwork tattoos by appointment-only.</p>
            <p>Where clean design meets permanent art.</p>
          </div>
        </div>

        {/* 7-Card perspective arc cylinder row */}
        <div className="w-full relative z-10 mt-14 overflow-hidden">
          <div className="relative w-full flex justify-center items-center gap-1.5 sm:gap-3 md:gap-4 lg:gap-5 overflow-hidden py-10 px-4 max-w-7xl mx-auto">
            
            {/* Card 1 - Leftmost (Hidden on mobile/tablet) */}
            <div className="hidden lg:block w-[13%] aspect-[3/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 opacity-55 rotate-[-12deg] -translate-y-4 scale-90 origin-bottom-right transition-all duration-300 hover:opacity-100 hover:scale-95 flex-shrink-0 relative">
              <Image 
                src="/images/stock_tattoo1.webp" 
                alt="Botanical leaves" 
                fill 
                sizes="180px"
                className="object-cover" 
              />
            </div>

            {/* Card 2 - Left (Hidden on mobile) */}
            <div className="hidden sm:block w-[16%] lg:w-[13%] aspect-[3/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 opacity-80 rotate-[-8deg] -translate-y-2 scale-95 transition-all duration-300 hover:opacity-100 hover:scale-100 flex-shrink-0 relative">
              <Image 
                src="/images/stock_tattoo2.webp" 
                alt="Spider design" 
                fill 
                sizes="180px"
                className="object-cover" 
              />
            </div>

            {/* Card 3 - Inner Left */}
            <div className="w-[28%] sm:w-[20%] lg:w-[13%] aspect-[3/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 rotate-[-4deg] -translate-y-1 scale-100 transition-all duration-300 hover:scale-105 flex-shrink-0 relative">
              <Image 
                src="/images/stock_tattoo3.webp" 
                alt="Snake crescent" 
                fill 
                sizes="180px"
                className="object-cover" 
              />
            </div>

            {/* Card 4 - CENTER ARTIST (Focal Point) */}
            <div className="w-[36%] sm:w-[24%] lg:w-[15%] aspect-[3.2/5] rounded-[1.5rem] md:rounded-[2.2rem] overflow-hidden border border-white/15 scale-105 z-10 transition-all duration-300 hover:scale-110 flex-shrink-0 relative shadow-2xl">
              <Image 
                src="/images/stock_artist.webp" 
                alt="Artist Pink" 
                fill 
                sizes="220px"
                className="object-cover" 
              />
            </div>

            {/* Card 5 - Inner Right */}
            <div className="w-[28%] sm:w-[20%] lg:w-[13%] aspect-[3/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 rotate-[4deg] -translate-y-1 scale-100 transition-all duration-300 hover:scale-105 flex-shrink-0 relative">
              <Image 
                src="/images/stock_tattoo5.webp" 
                alt="Flail mace" 
                fill 
                sizes="180px"
                className="object-cover" 
              />
            </div>

            {/* Card 6 - Right (Hidden on mobile) */}
            <div className="hidden sm:block w-[16%] lg:w-[13%] aspect-[3/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 opacity-80 rotate-[8deg] -translate-y-2 scale-95 transition-all duration-300 hover:opacity-100 hover:scale-100 flex-shrink-0 relative">
              <Image 
                src="/images/stock_tattoo6.webp" 
                alt="Skull with helm" 
                fill 
                sizes="180px"
                className="object-cover" 
              />
            </div>

            {/* Card 7 - Rightmost (Hidden on mobile/tablet) */}
            <div className="hidden lg:block w-[13%] aspect-[3/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 opacity-55 rotate-[12deg] -translate-y-4 scale-90 origin-bottom-left transition-all duration-300 hover:opacity-100 hover:scale-95 flex-shrink-0 relative">
              <Image 
                src="/images/stock_tattoo7.webp" 
                alt="Dagger design" 
                fill 
                sizes="180px"
                className="object-cover" 
              />
            </div>

          </div>
        </div>

        {/* Action Buttons Centered at Bottom */}
        <div className="mt-8 flex items-center justify-center gap-4 relative z-10 w-full px-4">
          <button
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="w-48 sm:w-auto inline-flex items-center justify-center rounded-full bg-[#E5E4DE] text-[#0E0D0F] hover:bg-white px-8 py-3.5 font-label text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
          >
            Book an Appointment
          </button>
          <button
            onClick={(e) => handleScrollTo(e, "#gallery")}
            className="w-48 sm:w-auto inline-flex items-center justify-center rounded-full bg-transparent border-2 border-border-ink px-8 py-3.5 font-label text-xs uppercase tracking-widest font-semibold text-text-primary hover:border-brand-pink hover:text-brand-pink transition-colors duration-200"
          >
            View The Flash Book
          </button>
        </div>

      </section>

      {/* 2. MEET THE ARTIST */}
      <section id="about" className="py-24 border-b border-border-ink/30 bg-bg-base">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Rosa Portrait */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-72 sm:w-96 aspect-[3/4] rounded-3xl overflow-hidden border border-border-ink shadow-2xl">
                <Image
                  src="/images/stock_artist.webp"
                  alt="Artist Pink portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover"
                />
                
                {/* 10+ Years Badge */}
                <div className="absolute bottom-6 -right-4 bg-white text-bg-base rounded-2xl px-5 py-3 shadow-xl border border-white/20 rotate-[6deg] max-w-[120px] text-center select-none z-10">
                  <p className="font-serif text-2xl font-bold leading-none">10+</p>
                  <p className="font-label text-[9px] uppercase tracking-widest font-semibold text-text-disabled mt-1">Years of Craft</p>
                </div>
              </div>

              {/* Decorative brand serif name background overlay */}
              <div className="absolute -bottom-6 left-4 select-none opacity-10 pointer-events-none">
                <div className="font-display text-8xl font-black text-white italic">Pink</div>
              </div>
            </div>

            {/* Right: Artist details */}
            <div className="lg:col-span-7 flex flex-col space-y-8">
              <div className="space-y-3">
                <span className="font-label text-xs uppercase tracking-widest text-brand-pink font-semibold block">
                  Meet the Artist
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#E5E4DE] leading-[1.1] tracking-wide">
                  Pink Tattoo Girl
                </h2>
              </div>

              <div className="space-y-6">
                
                {/* Bullet 1 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-brand-pink/10 border border-brand-pink/25 flex items-center justify-center">
                    <Star className="w-4 h-4 text-brand-pink fill-brand-pink" />
                  </div>
                  <div>
                    <p className="font-serif text-base sm:text-lg text-text-primary font-semibold mb-2">Passionate & Precision-Driven</p>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      Before tattooing, I filled sketchbooks with bold, abstract designs and intricate botanical drawings. Fine-line tattooing became the ultimate medium to bring that detail onto skin.
                    </p>
                  </div>
                </div>

                {/* Bullet 2 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-brand-pink/10 border border-brand-pink/25 flex items-center justify-center">
                    <Star className="w-4 h-4 text-brand-pink fill-brand-pink" />
                  </div>
                  <div>
                    <p className="font-serif text-base sm:text-lg text-text-primary font-semibold mb-2">Craft Above Volume</p>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      Tattooing is more than just skill, it requires intense discipline, patience, and visual empathy. I prioritize custom, focused work over high-volume walk-ins.
                    </p>
                  </div>
                </div>

                {/* Bullet 3 */}
                <div className="flex gap-4 items-start">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-brand-pink/10 border border-brand-pink/25 flex items-center justify-center">
                    <Star className="w-4 h-4 text-brand-pink fill-brand-pink" />
                  </div>
                  <div>
                    <p className="font-serif text-base sm:text-lg text-text-primary font-semibold mb-2">A Private Welcoming Haven</p>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      Now, I work from my private studio in Bangalore, India — a quiet, intimate space designed for safety, comfort, and focus, ensuring every piece is meant to last a lifetime.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. ON THE BOARD PORTFOLIO */}
      <section id="gallery" className="py-24 border-b border-border-ink/30 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full reveal-on-scroll">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-label text-xs uppercase tracking-widest text-brand-pink font-semibold block">
              Curated Works
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#E5E4DE] leading-[1.1] tracking-wide">
              On The Board
            </h2>
          </div>

          {/* 3-Column Staggered Polaroid Collage Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start reveal-stagger">
            
            {/* Column 1 (Left) */}
            <div className="flex flex-col items-center gap-12 lg:gap-16">
              <PolaroidCard
                src="/images/stock_tattoo1.webp"
                alt="Botanical detail tattoo"
                date="04.02.2023"
                stickyNote="A lot of detail went into this one!"
                stickyNotePosition="top-right"
                className="rotate-[-4deg] hover:rotate-0"
              />
              <PolaroidCard
                src="/images/stock_tattoo2.webp"
                alt="Spider tattoo"
                date="09.02.2023"
                className="rotate-[3deg] hover:rotate-0"
              />
              <PolaroidCard
                src="/images/stock_tattoo4.webp"
                alt="Flail mace tattoo"
                date="23.01.2023"
                className="rotate-[-3deg] hover:rotate-0"
              />
            </div>

            {/* Column 2 (Center) */}
            <div className="flex flex-col items-center gap-12 lg:gap-16 lg:mt-16">
              <PolaroidCard
                src="/images/stock_tattoo5.webp"
                alt="Swallow bird tattoo"
                date="20.10.2022"
                stickyNote="Adam's First Tattoo!"
                stickyNotePosition="bottom-right"
                className="rotate-[3deg] hover:rotate-0"
              />
              <PolaroidCard
                src="/images/stock_tattoo3.webp"
                alt="Serpent and crescent moon tattoo"
                date="27.06.2023"
                className="rotate-[-4deg] hover:rotate-0"
              />
              <PolaroidCard
                src="/images/stock_tattoo9.webp"
                alt="Japanese koi fish tattoo"
                date="29.10.2022"
                stickyNote="For Maya from Mumbai <3"
                stickyNotePosition="top-left"
                className="rotate-[-2deg] hover:rotate-0"
              />
            </div>

            {/* Column 3 (Right) */}
            <div className="flex flex-col items-center gap-12 lg:gap-16 lg:mt-8">
              <PolaroidCard
                src="/images/stock_tattoo8.webp"
                alt="Rose ribcage tattoo"
                date="16.12.2023"
                className="rotate-[4deg] hover:rotate-0"
              />
              <PolaroidCard
                src="/images/stock_tattoo6.webp"
                alt="Helmet skull tattoo"
                date="03.11.2022"
                className="rotate-[-3deg] hover:rotate-0"
              />
              <PolaroidCard
                src="/images/stock_tattoo7.webp"
                alt="Butterfly micro-tattoo"
                date="01.08.2022"
                stickyNote="Thank you Ben for trusting me!"
                stickyNotePosition="bottom-right"
                className="rotate-[3deg] hover:rotate-0"
              />
            </div>

          </div>
        </div>
      </section>

      {/* FLASH BOOK SHOWCASE */}
      <section id="flash" className="py-24 border-b border-border-ink/30 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full reveal-on-scroll">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="font-label text-xs uppercase tracking-widest text-brand-pink font-semibold block">
              Flash Book
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#E5E4DE] leading-[1.1] tracking-wide mt-3">
              Claimable Flash
            </h2>
            <p className="mt-4 font-body text-sm text-[#8E8D88] max-w-xl leading-relaxed">
              Curated original designs. Each piece is tattooed only once. Claim your design to reserve it for your upcoming session.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger">
            {/* Flash Card 1 */}
            <div className="relative group bg-[#E2E1DA] border border-[#C5C4BD] p-6 rounded-2xl shadow-lg timeline-grid-paper text-[#2C2B29] transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-brand-pink/15 text-brand-pink text-[10px] uppercase font-bold tracking-wider">
                Claimable
              </div>
              <div className="aspect-square w-full relative border border-[#C5C4BD] bg-white/40 rounded-lg flex items-center justify-center overflow-hidden mb-4">
                <svg className="w-20 h-20 text-[#2C2B29]/75" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <line x1="32" y1="16" x2="32" y2="48" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="32" cy="12" r="2" />
                  <path d="M32 10 Q24 5 20 7" />
                  <path d="M32 10 Q40 5 44 7" />
                  <path d="M32 26 C12 12 8 26 32 40 Z" />
                  <path d="M32 36 C10 30 12 44 32 48 Z" />
                  <path d="M32 26 C52 12 56 26 32 40 Z" />
                  <path d="M32 36 C54 30 52 44 32 48 Z" />
                </svg>
              </div>
              <h3 className="font-serif text-base font-bold text-[#2C2B29] mb-1 leading-none">Luna Moth</h3>
              <p className="font-body text-xs text-[#5C5B55] mb-4">Approx. 4&quot; x 4&quot; • Perfect for forearm, chest or thigh.</p>
              <a href="#contact" className="block text-center py-2 rounded-lg bg-black text-white text-xs uppercase font-semibold tracking-wider hover:bg-brand-pink transition-colors">
                Claim Design
              </a>
            </div>

            {/* Flash Card 2 */}
            <div className="relative group bg-[#E2E1DA] border border-[#C5C4BD] p-6 rounded-2xl shadow-lg timeline-grid-paper text-[#2C2B29] transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#C5C4BD] text-[#5C5B55] text-[10px] uppercase font-bold tracking-wider">
                Reserved
              </div>
              <div className="aspect-square w-full relative border border-[#C5C4BD] bg-white/40 rounded-lg flex items-center justify-center overflow-hidden mb-4 opacity-60">
                <svg className="w-20 h-20 text-[#2C2B29]/75" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M32 10 L32 54" strokeWidth="2" />
                  <circle cx="32" cy="18" r="8" />
                  <path d="M26 18 Q32 12 38 18" />
                  <path d="M32 28 Q24 26 20 20" />
                  <path d="M32 38 Q40 36 44 30" />
                </svg>
              </div>
              <h3 className="font-serif text-base font-bold text-[#2C2B29] mb-1 opacity-70 leading-none">Spine Rose</h3>
              <p className="font-body text-xs text-[#5C5B55] mb-4 opacity-70">Approx. 6&quot; x 2&quot; • Vertical design for spine/arm.</p>
              <button disabled className="block w-full text-center py-2 rounded-lg bg-[#C5C4BD]/40 text-[#5C5B55] text-xs uppercase font-semibold tracking-wider cursor-not-allowed">
                Taken
              </button>
            </div>

            {/* Flash Card 3 */}
            <div className="relative group bg-[#E2E1DA] border border-[#C5C4BD] p-6 rounded-2xl shadow-lg timeline-grid-paper text-[#2C2B29] transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-brand-pink/15 text-brand-pink text-[10px] uppercase font-bold tracking-wider">
                Claimable
              </div>
              <div className="aspect-square w-full relative border border-[#C5C4BD] bg-white/40 rounded-lg flex items-center justify-center overflow-hidden mb-4">
                <svg className="w-20 h-20 text-[#2C2B29]/75" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="32" cy="24" r="10" strokeDasharray="3 3" />
                  <path d="M20 44 C20 30 44 30 44 44 C44 50 32 50 32 44" />
                </svg>
              </div>
              <h3 className="font-serif text-base font-bold text-[#2C2B29] mb-1 leading-none">Serpent Moon</h3>
              <p className="font-body text-xs text-[#5C5B55] mb-4">Approx. 5&quot; x 3&quot; • Detailed dotwork and crescent.</p>
              <a href="#contact" className="block text-center py-2 rounded-lg bg-black text-white text-xs uppercase font-semibold tracking-wider hover:bg-brand-pink transition-colors">
                Claim Design
              </a>
            </div>

            {/* Flash Card 4 */}
            <div className="relative group bg-[#E2E1DA] border border-[#C5C4BD] p-6 rounded-2xl shadow-lg timeline-grid-paper text-[#2C2B29] transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-brand-pink/15 text-brand-pink text-[10px] uppercase font-bold tracking-wider">
                Claimable
              </div>
              <div className="aspect-square w-full relative border border-[#C5C4BD] bg-white/40 rounded-lg flex items-center justify-center overflow-hidden mb-4">
                <svg className="w-20 h-20 text-[#2C2B29]/75" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M32 10 L32 46 M20 20 L44 20" strokeWidth="2" strokeLinecap="round" />
                  <path d="M26 44 L32 54 L38 44 Z" />
                </svg>
              </div>
              <h3 className="font-serif text-base font-bold text-[#2C2B29] mb-1 leading-none">Dagger</h3>
              <p className="font-body text-xs text-[#5C5B55] mb-4">Approx. 5&quot; x 2&quot; • Bold linework, perfect for arm/calf.</p>
              <a href="#contact" className="block text-center py-2 rounded-lg bg-black text-white text-xs uppercase font-semibold tracking-wider hover:bg-brand-pink transition-colors">
                Claim Design
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESS TIMELINE */}
      <section id="process" className="py-24 border-b border-border-ink/30 bg-bg-base">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full reveal-on-scroll">
          <ProcessTimeline />
        </div>
      </section>

      {/* CLIENT REVIEWS */}
      <section id="reviews" className="py-24 border-b border-border-ink/30 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full reveal-on-scroll">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="font-label text-xs uppercase tracking-widest text-brand-pink font-semibold block">
              Testimonials
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#E5E4DE] leading-[1.1] tracking-wide mt-3">
              Client Stories
            </h2>
            <p className="mt-4 font-body text-sm text-[#8E8D88] max-w-xl leading-relaxed">
              Stories from those who have trusted me with their skin. Every review represents a permanent piece of shared art.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger">
            {/* Review 1 */}
            <div className="border border-border-ink/40 bg-bg-surface p-8 rounded-2xl shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-pink fill-brand-pink" />
                  ))}
                </div>
                <p className="font-body text-sm text-text-secondary leading-relaxed italic">
                  &quot;Tattooing with Pink was a spiritual experience. Her private studio in Indiranagar is so quiet and peaceful. She took my rough idea for a botanical snake and turned it into a breathtaking fine-line masterpiece. Zero rush, absolute focus, and incredible precision.&quot;
                </p>
              </div>
              <div className="border-t border-border-ink/30 pt-4">
                <p className="font-serif text-sm font-bold text-white leading-none mb-1">Priya S.</p>
                <p className="font-body text-[10px] text-brand-pink uppercase tracking-widest leading-none">Bangalore, India</p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="border border-border-ink/40 bg-bg-surface p-8 rounded-2xl shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-pink fill-brand-pink" />
                  ))}
                </div>
                <p className="font-body text-sm text-text-secondary leading-relaxed italic">
                  &quot;I traveled from Mumbai specifically to get a flash piece from Pink. The detail in her linework is unmatched. The grid-paper notebook cards she uses for available designs are so cool. The healing process with the second-skin instructions she provided was flawless.&quot;
                </p>
              </div>
              <div className="border-t border-border-ink/30 pt-4">
                <p className="font-serif text-sm font-bold text-white leading-none mb-1">Rohan M.</p>
                <p className="font-body text-[10px] text-brand-pink uppercase tracking-widest leading-none">Mumbai, India</p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="border border-border-ink/40 bg-bg-surface p-8 rounded-2xl shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-pink fill-brand-pink" />
                  ))}
                </div>
                <p className="font-body text-sm text-text-secondary leading-relaxed italic">
                  &quot;Best tattooing experience I have ever had. The 3D red string timeline of how she takes you from idea to ink is exactly how it felt. Her hand-drawn sketches on the cards and the hygiene standards are top-notch. If you want high-contrast blackwork in Bangalore, this is the place.&quot;
                </p>
              </div>
              <div className="border-t border-border-ink/30 pt-4">
                <p className="font-serif text-sm font-bold text-white leading-none mb-1">Ananya K.</p>
                <p className="font-body text-[10px] text-brand-pink uppercase tracking-widest leading-none">Bangalore, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO HAVEN */}
      <section id="studio" className="py-24 border-b border-border-ink/30 bg-bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-video lg:aspect-square w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/images/stock_studio.webp"
                alt="Minimalist private studio haven"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
            </div>

            {/* Right details */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div>
                <span className="font-label text-xs uppercase tracking-widest text-brand-pink font-semibold block">
                  The Space
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#E5E4DE] leading-[1.1] tracking-wide mt-3">
                  Studio Haven
                </h2>
              </div>
              <p className="font-body text-sm text-text-secondary leading-relaxed max-w-xl">
                Located in Indiranagar, Bangalore, my workspace is a private, appointment-only sanctuary. Unlike commercial street shops, this space is dedicated to one client at a time, ensuring a focused, comfortable, and highly customized tattooing experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="border border-border-ink/40 bg-black/40 p-5 rounded-xl">
                  <h3 className="font-serif text-base font-bold text-white mb-2 leading-none">Sanitation First</h3>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    100% single-use medical grade disposables, state-of-the-art barriers, and complete hospital-grade sterilization protocols.
                  </p>
                </div>
                <div className="border border-border-ink/40 bg-black/40 p-5 rounded-xl">
                  <h3 className="font-serif text-base font-bold text-white mb-2 leading-none">Comfort & Focus</h3>
                  <p className="font-body text-xs text-text-secondary leading-relaxed">
                    A calm layout with ambient lighting, quiet chillhop playlist, complimentary water/tea, and an uninterrupted vibe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARE & PREP GUIDE */}
      <section id="care" className="py-24 border-b border-border-ink/30 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full reveal-on-scroll">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="font-label text-xs uppercase tracking-widest text-brand-pink font-semibold block">
              Guidelines
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#E5E4DE] leading-[1.1] tracking-wide mt-3">
              Care & Prep
            </h2>
            <p className="mt-4 font-body text-sm text-[#8E8D88] max-w-xl leading-relaxed">
              Proper preparation and meticulous healing are vital for fine-line and high-contrast blackwork tattoos. Follow these instructions carefully.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Column 1: Pre-session */}
            <div className="border border-border-ink/40 bg-bg-surface p-8 rounded-2xl shadow-lg space-y-6">
              <h3 className="font-serif text-xl font-bold text-white border-b border-border-ink pb-4 leading-none">Pre-Session Prep</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/15 text-brand-pink flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">1</div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Hydration:</strong> Drink plenty of water for 48 hours prior to your session to make the skin more receptive to ink.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/15 text-brand-pink flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">2</div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Sleep & Nutrition:</strong> Get at least 8 hours of sleep and eat a full, hearty meal right before your appointment.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/15 text-brand-pink flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">3</div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Avoid Blood Thinners:</strong> Do not consume alcohol, caffeine, or blood-thinning painkillers (aspirin/ibuprofen) for 24h prior.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/15 text-brand-pink flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">4</div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Comfortable Clothing:</strong> Wear loose black clothing that permits easy access to the location being tattooed.
                  </p>
                </li>
              </ul>
            </div>

            {/* Column 2: Aftercare */}
            <div className="border border-border-ink/40 bg-bg-surface p-8 rounded-2xl shadow-lg space-y-6">
              <h3 className="font-serif text-xl font-bold text-white border-b border-border-ink pb-4 leading-none">Aftercare Rules</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/15 text-brand-pink flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">1</div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Second Skin Wrap:</strong> Keep the protective film on for 3 to 5 days, unless it leaks or peels to expose the tattoo.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/15 text-brand-pink flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">2</div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Gentle Wash:</strong> Wash the tattoo with lukewarm water and mild fragrance-free antibacterial soap. Pat dry with clean paper towels.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/15 text-brand-pink flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">3</div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">Moisturize Thinly:</strong> Apply a microscopic layer of recommended tattoo balm 2-3 times daily. Do not smother or suffocate the skin.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-pink/15 text-brand-pink flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">4</div>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">No Scratching or Sun:</strong> Do not scratch, pick, or peel the healing skin. Avoid direct sun, swimming pools, and hot tubs for 3 weeks.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-24 border-b border-border-ink/30 bg-bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full reveal-on-scroll">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="font-label text-xs uppercase tracking-widest text-brand-pink font-semibold block">
              Common Queries
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#E5E4DE] leading-[1.1] tracking-wide mt-3">
              Frequently Asked
            </h2>
            <p className="mt-4 font-body text-sm text-[#8E8D88] max-w-xl leading-relaxed">
              Find answers to the most common questions regarding booking, safety, design consultations, and pricing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How much does a custom tattoo cost?",
                a: "Pricing is calculated on a per-project basis depending on overall size, placement complexity, design time, and detail work. Fine-line and dotwork shading require extreme patience and high precision, which affects session lengths. We provide a final price estimate during your design consultation."
              },
              {
                q: "Do you do cover-ups or color work?",
                a: "We work exclusively with custom black and gray ink, focusing on high-contrast blackwork, line-art, and detailed shading. We do not do color tattoos. Cover-ups are taken on a case-by-case basis and require a prior in-person consultation to analyze the existing tattoo."
              },
              {
                q: "How do I book a session?",
                a: "Fill out the consultation booking form below. Make sure to describe your idea, approximate sizes (in inches/cm), and placement clearly. We will review your submission and contact you within 24-48 hours to align on design details and schedule your slot."
              },
              {
                q: "What safety and hygiene standards do you follow?",
                a: "Our private Indiranagar studio adheres to medical-grade hygiene protocols. We use 100% single-use disposable needles, tubes, and protective barriers. All surfaces are disinfected with hospital-grade cleaners between sessions, ensuring a completely sterile environment."
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="border border-border-ink/40 bg-black/40 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 text-white hover:text-brand-pink transition-colors focus:outline-none"
                >
                  <span className="font-serif text-lg font-bold tracking-wide leading-none">{item.q}</span>
                  <span className={`text-xl font-bold text-brand-pink transition-transform duration-300 ${activeFaq === idx ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`transition-all duration-500 overflow-hidden ${activeFaq === idx ? "max-h-[300px] border-t border-border-ink/30" : "max-h-0"}`}
                >
                  <p className="p-6 font-body text-sm text-text-secondary leading-relaxed bg-[#0d0c10]/20">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT FORM & INFO */}
      <section id="contact" className="py-24 bg-bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full reveal-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="font-label text-xs uppercase tracking-widest text-brand-pink font-semibold block">
                  Get in touch
                </span>
                <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#E5E4DE] leading-[1.1] tracking-wide mt-3">
                  Let&apos;s Create <br />
                  <span className="text-brand-pink">Something Permanent.</span>
                </h2>
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  Custom designs are available by appointment only. Share your concept, placement, and size estimates to initiate a design consultation.
                </p>
              </div>

              <div className="space-y-4 mt-8 lg:mt-0 pt-8 border-t border-border-ink">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-pink" />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-text-secondary">Email me at</p>
                    <a href="mailto:hello@thepinktattoogirl.com" className="font-body text-sm text-white hover:text-brand-pink transition-colors">
                      hello@thepinktattoogirl.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-pink/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-brand-pink" />
                  </div>
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-text-secondary">Tattooing at</p>
                    <p className="font-body text-sm text-white">
                      Private Studio — Bangalore, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-bg-elevated border border-border-ink p-8 sm:p-10 rounded-3xl shadow-2xl relative">
                
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-brand-pink/20 border border-brand-pink/40 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-brand-pink animate-pulse" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-white">Consultation Request Sent!</h3>
                    <p className="font-body text-sm text-text-secondary max-w-sm">
                      Thank you for sharing your idea. Pink will review your inquiry and get back to you with booking availability within 2 business days.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 font-label text-xs uppercase tracking-widest text-brand-pink font-semibold underline"
                    >
                      Send Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block font-label text-[11px] uppercase tracking-widest text-text-secondary mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-bg-surface border border-border-ink rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all"
                          placeholder="e.g. Maya Lin"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block font-label text-[11px] uppercase tracking-widest text-text-secondary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-bg-surface border border-border-ink rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all"
                          placeholder="e.g. maya@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-label text-[11px] uppercase tracking-widest text-text-secondary mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-bg-surface border border-border-ink rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all"
                        placeholder="e.g. +44 7700 900077"
                      />
                    </div>

                    <div>
                      <label htmlFor="idea" className="block font-label text-[11px] uppercase tracking-widest text-text-secondary mb-2">
                        Describe Your Tattoo Idea *
                      </label>
                      <textarea
                        id="idea"
                        name="idea"
                        required
                        rows={4}
                        value={formData.idea}
                        onChange={handleInputChange}
                        className="w-full bg-bg-surface border border-border-ink rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-pink focus:ring-1 focus:ring-brand-pink transition-all resize-none"
                        placeholder="Share style preferences, approximate size, body placement, and the core concept..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#E5E4DE] text-[#0E0D0F] hover:bg-white py-3.5 font-label text-xs uppercase tracking-widest font-semibold transition-colors duration-200"
                    >
                      Submit Consultation Request
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
