"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border-ink/50 bg-bg-base/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-display text-2xl sm:text-3xl font-normal tracking-wide text-white hover:text-brand-pink transition-colors duration-200"
          >
            The Pink Tattoo Girl<span className="text-brand-pink ml-0.5">*</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-label text-xs sm:text-sm uppercase tracking-widest transition-colors duration-200 hover:text-brand-pink text-text-secondary"
            >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Book Now Button Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-pink px-5 py-2.5 font-label text-xs sm:text-sm uppercase tracking-widest font-semibold text-white shadow-lg shadow-brand-pink/10 hover:bg-pink-hover hover:shadow-brand-pink/20 transition-all duration-200 active:translate-y-[1px]"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-white hover:bg-bg-elevated focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-pink md:hidden"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Background Overlay */}
        <div 
          className="fixed inset-0 bg-bg-base/60 backdrop-blur-sm" 
          onClick={toggleMenu}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed inset-y-0 right-0 z-45 w-full max-w-[280px] bg-bg-surface border-l border-border-ink p-6 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-border-ink">
              <span className="font-display text-lg font-bold text-white">Menu</span>
              <button
                type="button"
                onClick={toggleMenu}
                className="p-2 rounded-md text-text-secondary hover:text-white hover:bg-bg-elevated focus:outline-none"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-label text-base uppercase tracking-widest transition-colors duration-200 hover:text-brand-pink text-text-primary"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-brand-pink py-3.5 font-label text-sm uppercase tracking-widest font-semibold text-white shadow-lg hover:bg-pink-hover transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Book Now
            </a>
            
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border-ink">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-brand-pink transition-colors text-xs uppercase tracking-widest font-label font-medium"
              >
                Instagram
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-brand-pink transition-colors text-xs uppercase tracking-widest font-label font-medium"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
