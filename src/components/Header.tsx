"use client";

import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="font-display text-base sm:text-xl md:text-2xl text-white">
              KDS Design and Build
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#projects" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300">
              Projects
            </a>
            <a href="#about" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300">
              About
            </a>
            <a href="#timeline" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300">
              Timeline
            </a>
            <a href="#contact" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a href="tel:+6399999999" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-body">Call Us</span>
            </a>
          </div>

          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pt-6 pb-4 border-t border-border/50 mt-4 overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                <a 
                  href="#projects" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Projects
                </a>
                <a 
                  href="#about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  About
                </a>
                <a 
                  href="#timeline" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Timeline
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  Contact
                </a>
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <a href="tel:+6399999999" className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>Call Us</span>
                  </a>
                  <a href="mailto:info@kdsdesign.com" className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
