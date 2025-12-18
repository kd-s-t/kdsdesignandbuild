"use client";

import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <div className="w-full h-full bg-muted" />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-foreground/20 -z-10" />
            </div>
          </div>

          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
              Meet the Founder
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
              The Vision Behind KDS
            </h2>
            
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>
                With over 15 years of experience in architecture and construction, 
                I founded KDS Design & Build with a singular vision: to create spaces 
                that transcend the ordinary.
              </p>
              <p>
                Every project we undertake is a collaboration between artistry and 
                engineering, between dreams and reality. We believe that great architecture 
                isn't just about buildings—it's about creating environments where life unfolds beautifully.
              </p>
              <p>
                From concept sketches to final construction, I personally oversee each project, 
                ensuring that our commitment to excellence is reflected in every detail.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border/50">
              <p className="font-display text-2xl text-foreground italic mb-2">
                K. D. Smith
              </p>
              <p className="text-sm text-muted-foreground tracking-widest uppercase">
                Founder & Principal Architect
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

