import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-linen/95 backdrop-blur-md ${
          isScrolled
            ? "shadow-sm border-b border-umber/10"
            : "border-b border-umber/5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-3 md:px-10 flex items-center justify-between h-20 md:h-24">
          <a href="#inicio" className="flex items-center gap-2 md:gap-4 min-w-0">
            <img
              src="/assets/images/flavio-logo.png"
              alt="Logo Flavio Henrique Bachi"
              className="h-[57px] md:h-[108px] w-auto shrink-0"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(25%) sepia(100%) saturate(500%) hue-rotate(80deg)",
              }}
            />
            <div className="leading-tight min-w-0">
              <span className="block font-body text-sage text-sm md:text-2xl font-bold tracking-wide truncate">
                Flavio Henrique Bachi
              </span>
              <span className="hidden md:block text-sage/65 font-body text-xs tracking-[0.2em] uppercase font-semibold">
                Palestrante Espírita · Fisioterapeuta
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                href={link.href}
                className="text-sm font-body font-medium text-sage/80 hover:text-sage transition-colors duration-300"
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-sage p-2"
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-linen flex flex-col items-center justify-center">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-6 text-sage p-2"
            aria-label="Fechar menu"
          >
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-heading text-3xl text-sage hover:text-sage/70 transition-colors"
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <img
            src="/assets/images/flavio-logo.png"
            alt="Logo"
            className="absolute bottom-10 h-14 opacity-40"
          />
        </div>
      )}
    </>
  );
}
