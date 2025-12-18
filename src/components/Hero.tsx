"use client";

import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/hero-architecture.jpg"
          alt="Modern architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-background" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            className="text-muted-foreground text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 sm:mb-6 px-4"
          >
            Architecture & Construction
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4 sm:mb-6 flex justify-center px-4"
          >
            <Image
              src="/kdsv2.2.png"
              alt="KDS Design and Build"
              width={600}
              height={200}
              className="w-auto h-20 sm:h-24 md:h-32 lg:h-40"
              priority
            />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            We transform visions into architectural masterpieces. From concept to completion, 
            crafting spaces that inspire and endure.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
          >
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background font-body text-sm tracking-wider hover:bg-foreground/90 transition-all duration-300 text-center"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-foreground/30 text-foreground font-body text-sm tracking-wider hover:border-foreground hover:bg-foreground/5 transition-all duration-300 text-center"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#projects" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
