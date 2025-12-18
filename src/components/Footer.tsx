"use client";

import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center">
            <Image 
              src="/kdsv2.2.png" 
              alt="KDS Design and Build" 
              width={600}
              height={200}
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>

          <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 flex-wrap justify-center">
            <a href="#projects" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#timeline" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Timeline
            </a>
            <a href="#contact" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} KDS Design & Build. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
