"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <Image
                src="/founder-portrait.jpg"
                alt="Founder of KDS Design & Build"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-foreground/20 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-xs sm:text-sm tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Meet the Founder
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4 sm:mb-6">
              The Vision Behind KDS
            </h2>
            
            <div className="space-y-4 sm:space-y-6 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                With 10 years of experience designing and building houses in Siargao, I&apos;ve dedicated my career to creating homes that harmonize with the island&apos;s natural beauty and tropical climate.
              </p>
              <p>
                Each project is a testament to understanding the unique challenges and opportunities that come with island living—from maximizing natural ventilation and light to working with local materials and respecting the landscape.
              </p>
              <p>
                From initial concept to final construction, I personally oversee every detail, ensuring that each home we build not only meets the highest standards of quality but also captures the essence of Siargao living.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="font-display text-2xl text-foreground italic mb-2">
                K. D. Sumaylo
              </p>
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Founder & Principal Architect
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

