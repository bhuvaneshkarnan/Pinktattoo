"use client";

import Link from "next/link";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="w-full bg-bg-surface border-t border-border-ink/50 text-text-secondary pt-16 pb-8 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-border-ink">
          
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col space-y-4">
            <span className="font-display text-2xl font-normal text-white tracking-wide">
              The Pink Tattoo Girl<span className="text-brand-pink">*</span>
            </span>
            <p className="font-body text-sm text-text-secondary italic">
              Your skin. Your story. Our craft.
            </p>
            <div className="font-body text-xs text-text-secondary/80 leading-relaxed pt-2">
              <p>Studio 4, Indiranagar</p>
              <p>Bangalore, India</p>
              <p className="mt-2 text-white font-medium">Hours:</p>
              <p>Tue – Sat: 11:00 – 19:00</p>
              <p>Sun – Mon: Closed</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4">
            <span className="font-label text-xs uppercase tracking-widest text-white font-semibold">
              Quick Links
            </span>
            <ul className="space-y-2.5 text-xs font-label uppercase tracking-wider">
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-brand-pink transition-colors">About</a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, "#gallery")} className="hover:text-brand-pink transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleLinkClick(e, "#process")} className="hover:text-brand-pink transition-colors">Process</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="hover:text-brand-pink transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col space-y-4">
            <span className="font-label text-xs uppercase tracking-widest text-white font-semibold">
              Studio Inquiry
            </span>
            <ul className="space-y-2.5 text-xs font-body">
              <li>
                <span className="text-text-secondary">Email:</span>{" "}
                <a href="mailto:hello@thepinktattoogirl.com" className="text-white hover:text-brand-pink transition-colors">
                  hello@thepinktattoogirl.com
                </a>
              </li>
              <li>
                <span className="text-text-secondary">Phone:</span>{" "}
                <a href="tel:+442079460958" className="text-white hover:text-brand-pink transition-colors">
                  +44 20 7946 0958
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div className="flex flex-col space-y-4">
            <span className="font-label text-xs uppercase tracking-widest text-white font-semibold">
              Follow Us
            </span>
            <div className="flex space-x-4 pt-1">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-label hover:text-brand-pink transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-label hover:text-brand-pink transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Big Bottom Brand Logo */}
        <div className="w-full text-center pt-12 pb-6 select-none pointer-events-none opacity-5">
          <div className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-white">
            The Pink Tattoo Girl
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-[10px] sm:text-xs font-label uppercase tracking-widest border-t border-border-ink/20">
          <p>© {new Date().getFullYear()} The Pink Tattoo Girl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
